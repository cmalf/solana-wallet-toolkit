'use strict';
process.noDeprecation = true;

const { Worker } = require('worker_threads');
const path = require('path');
const { Colors } = require('../utils/utils.js');
const { t } = require('../utils/translate.js');
const inquirer = require('inquirer');
const fs = require("fs");

const DATA_FILE = "./VanitywalletData.js";

function ensureDirectoryExists(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function saveAccountData(dataArray) {
    ensureDirectoryExists(DATA_FILE);
    let accounts = [];
    if (fs.existsSync(DATA_FILE)) {
        try {
            const fileData = fs.readFileSync(DATA_FILE, "utf8").match(/const\s+walletLists\s*=\s*(\[[\s\S]*?\]);/);
            if (fileData && fileData[1]) accounts = JSON.parse(fileData[1]);
        } catch (err) { accounts = []; }
    } else {
        const initData = "const walletLists = [];\n\nmodule.exports = { walletLists };\n";
        fs.writeFileSync(DATA_FILE, initData);
    }
    const updatedAccounts = accounts.concat(dataArray);
    const finalData = "const walletLists = " + JSON.stringify(updatedAccounts, null, 2) + ";\n\nmodule.exports = { walletLists };\n";
    fs.writeFileSync(DATA_FILE, finalData);
}


async function runVanityWallet(lang) { // Terima 'lang' sebagai parameter
    let newWallets = [],
        attempts = 0,
        walletsFound = 0,
        isStopping = false;
    let worker;

    const handleExit = () => {
        if (worker) worker.terminate();
    };

    const sigintListener = () => {
        if (isStopping) {
            console.log(`\n${Colors.Red}x${Colors.RESET} ${t('forceExit', lang)}`);
            handleExit();
            process.exit(1);
        }
        isStopping = true;
        console.log(`\n${Colors.Yellow}i${Colors.RESET} ${t('stoppingSearch', lang)}`);
        handleExit();
    };

    process.on('SIGINT', sigintListener);

    try {
        const questions = [
            {
                type: 'input', name: 'numWallets', message: t('askNumWallets', lang), default: 1,
                validate: input => (parseInt(input) > 0 ? true : t('invalidNumber', lang))
            },
            {
                type: 'input', name: 'prefix', message: t('askPrefix', lang)
            },
            {
                type: 'input', name: 'suffix', message: t('askSuffix', lang),
                validate: (input, answers) => (!answers.prefix && !input ? t('noPrefixSuffix', lang) : true)
            },
            {
                type: 'confirm', name: 'caseSensitive', message: t('askCaseSensitive', lang), default: false
            }
        ];

        const answers = await inquirer.prompt(questions);
        const { numWallets, prefix, suffix, caseSensitive } = answers;

        console.log(`\n${Colors.Cyan}i${Colors.RESET} ${t('startSearch', lang, { numWallets })}`);
        console.log(`${Colors.Cyan}i${Colors.RESET} ${t('prefix', lang)}: '${prefix || "N/A"}', ${t('suffix', lang)}: '${suffix || "N/A"}', ${t('caseSensitive', lang)}: ${caseSensitive}`);
        console.log(`\n${Colors.Teal}]> ${Colors.Yellow}${t('pressCtrlC', lang)}${Colors.RESET}`);
        console.log(`${Colors.Teal}]> ${Colors.Dim}${t('wpsInfo', lang)}${Colors.RESET}\n`);

        const searchPrefix = caseSensitive ? prefix : (prefix || '').toLowerCase();
        const searchSuffix = caseSensitive ? suffix : (suffix || '').toLowerCase();
        const startTime = process.hrtime.bigint();

        await new Promise((resolve) => {
            worker = new Worker(path.resolve(__dirname, '../utils/generator-worker.js'));

            worker.on('message', (wallet) => {
                if (isStopping || walletsFound >= numWallets) return;

                attempts++;
                if (wallet.error) {
                    console.error('Worker error:', wallet.error);
                    worker.postMessage('generate');
                    return;
                }

                const address = wallet.walletAddressBase58;
                const checkAddress = caseSensitive ? address : address.toLowerCase();

                if ((!prefix || checkAddress.startsWith(searchPrefix)) && (!suffix || checkAddress.endsWith(searchSuffix))) {
                    walletsFound++;
                    newWallets.push(wallet);
                    process.stdout.write('\r' + ' '.repeat(process.stdout.columns || 80) + '\r');
                    console.log(`${Colors.Green}✔${Colors.RESET} ${t('foundWallet', lang)} [${walletsFound}/${numWallets}] ${t('address', lang)}: ${Colors.Neon}${wallet.walletAddressBase58}${Colors.RESET}`);
                }

                if (attempts % 100 === 0) {
                    const elapsedNanos = process.hrtime.bigint() - startTime;
                    const elapsedSeconds = Number(elapsedNanos) / 1_000_000_000;
                    const wps = elapsedSeconds > 0 ? attempts / elapsedSeconds : 0;
                    const progressLine = t('progress', lang, { attempts: attempts.toLocaleString(), wps: wps.toFixed(0), walletsFound, numWallets });
                    process.stdout.write(`\r${Colors.Teal}==>${Colors.RESET} ${progressLine}`);
                }

                if (walletsFound < numWallets) {
                    worker.postMessage('generate');
                } else {
                    resolve();
                }
            });

            worker.on('exit', resolve);
            worker.on('error', err => { console.error('Worker thread error:', err); resolve(); });
            worker.postMessage('generate');
        });

        if (isStopping) console.log(`\n${Colors.Yellow}i${Colors.RESET} ${t('searchStopped', lang)}`);
        
        const endTime = process.hrtime.bigint();
        const totalSeconds = (Number(endTime - startTime) / 1_000_000_000).toFixed(2);
        console.log(`\n${Colors.Green}✔${Colors.RESET} ${t('finished', lang, { walletsFound, totalSeconds, attempts: attempts.toLocaleString() })}`);

        if (newWallets.length > 0) {
             console.log(`${Colors.Green}${"-".repeat(55)}${Colors.RESET}`);
            newWallets.forEach((w, i) => {
                console.log(`\n${Colors.Yellow}${t('wallet', lang)} ${i + 1}:${Colors.RESET}`);
                console.log(` ${Colors.Cyan}${t('address', lang).padEnd(12, ' ')}:${Colors.RESET} ${w.walletAddressBase58}`);
                console.log(` ${Colors.Cyan}${t('mnemonic', lang).padEnd(12, ' ')}:${Colors.RESET} ${w.mnemonic}`);
                console.log(` ${Colors.Cyan}${t('privateKey', lang).padEnd(12, ' ')}:${Colors.RESET} ${w.privateKeyBase58}`);
            });
            console.log(`${Colors.Green}${"-".repeat(55)}${Colors.RESET}`);
            
            const { confirmSave } = await inquirer.prompt([{
                type: 'confirm', name: 'confirmSave',
                message: t('savePrompt', lang, { newWalletsLength: newWallets.length, DATA_FILE }),
                default: true
            }]);

            if (confirmSave) {
                saveAccountData(newWallets);
                console.log(`${Colors.Teal}==> ${Colors.Green}${t('saveSuccess', lang, { DATA_FILE })}${Colors.RESET}`);
            } else {
                console.log(`${Colors.Teal}==> ${Colors.Yellow}${t('saveDeclined', lang)}${Colors.RESET}`);
            }
        }
    } catch (error) {
        if (!isStopping) console.error(`\n${Colors.Red}An unexpected error occurred: ${error.message}${Colors.RESET}`);
    } finally {
        process.removeListener('SIGINT', sigintListener);
        if (worker) worker.terminate();
    }
}

module.exports = { runVanityWallet };
