'use strict';
process.noDeprecation = true;

const { Keypair } = require('@solana/web3.js');
const bip39 = require('bip39');
const { derivePath } = require('ed25519-hd-key');
const { Colors } = require("../utils/utils.js");
const { t } = require('../utils/translate.js');
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
let bs58 = require('bs58');

const DATA_FILE_JS = "./bulkwalletData.js";

if (typeof bs58.encode !== 'function' && bs58.default && typeof bs58.default.encode === 'function') {
  bs58 = bs58.default;
}


// Menyimpan ke file .js
function saveToJs(dataArray) {
    ensureDirectoryExists(DATA_FILE_JS);
    let accounts = [];
    if (fs.existsSync(DATA_FILE_JS)) {
        try {
            const fileData = fs.readFileSync(DATA_FILE_JS, "utf8").match(/const\s+walletLists\s*=\s*(\[[\s\S]*?\]);/);
            if (fileData && fileData[1]) accounts = JSON.parse(fileData[1]);
        } catch (err) { accounts = []; }
    }
    const updatedAccounts = accounts.concat(dataArray);
    const finalData = `const walletLists = ${JSON.stringify(updatedAccounts, null, 2)};\n\nmodule.exports = { walletLists };\n`;
    fs.writeFileSync(DATA_FILE_JS, finalData, 'utf8');
}

// Menyimpan ke file .csv
function saveToCsv(dataArray, filename) {
    ensureDirectoryExists(filename);
    const header = "walletAddress,mnemonic,privateKeyB58";
    const rows = dataArray.map(w => `${w.walletAddressBase58},"${w.mnemonic}",${w.privateKeyBase58}`);
    const content = [header, ...rows].join('\n');
    fs.writeFileSync(filename, content, 'utf8');
}

// Menyimpan ke file .txt
function saveToTxt(dataArray, filename) {
    ensureDirectoryExists(filename);
    const content = dataArray.map((w, i) => {
        return `---------- Wallet ${i + 1} ----------\nAddress: ${w.walletAddressBase58}\nMnemonic: ${w.mnemonic}\nPrivate Key: ${w.privateKeyBase58}\n`;
    }).join('\n');
    fs.writeFileSync(filename, content, 'utf8');
}

function ensureDirectoryExists(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function generateSolanaWallet() {
    const mnemonic = bip39.generateMnemonic(256);
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const { key } = derivePath("m/44'/501'/0'/0'", seed.toString('hex'));
    const keypair = Keypair.fromSeed(new Uint8Array(key));
    return {
        mnemonic,
        walletAddressBase58: keypair.publicKey.toBase58(),
        privateKeyBase58: bs58.encode(keypair.secretKey)
    };
}


async function runBulkWallet(lang) {
    let newWallets = [];
    try {
        const { numWallets } = await inquirer.prompt([{
            type: 'input', name: 'numWallets',
            message: t('askBulkAmount', lang),
            default: 5,
            validate: input => (parseInt(input) > 0 ? true : t('invalidNumber', lang))
        }]);

        console.log(`\n${Colors.Teal}==>${Colors.RESET} ${t('creatingBulk', lang, { numWallets })}`);

        for (let i = 0; i < parseInt(numWallets, 10); i++) {
            const wallet = await generateSolanaWallet();
            newWallets.push(wallet);
            console.log(`${Colors.Cyan}>${Colors.RESET} ${t('createdBulk', lang, { count: i + 1, total: numWallets })} ${Colors.Neon}${wallet.walletAddressBase58}${Colors.RESET}`);
        }

        console.log(`\n${Colors.Green}✔${Colors.RESET} ${t('successBulk', lang, { numWallets })}`);
        
        if (newWallets.length > 0) {
            const { confirmSave } = await inquirer.prompt([{
                type: 'confirm', name: 'confirmSave',
                message: t('savePrompt', lang), default: true
            }]);

            if (confirmSave) {
                const { saveFormat } = await inquirer.prompt([{
                    type: 'list', name: 'saveFormat', message: t('askSaveFormat', lang),
                    choices: [
                        { name: t('saveFormatJS', lang), value: 'js' },
                        { name: t('saveFormatCSV', lang), value: 'csv' },
                        { name: t('saveFormatTXT', lang), value: 'txt' }
                    ]
                }]);

                let filename = '';
                if (saveFormat === 'js') {
                    filename = DATA_FILE_JS;
                    saveToJs(newWallets);
                } else {
                    const defaultName = `wallets_bulk_${Date.now()}.${saveFormat}`;
                    const { chosenFilename } = await inquirer.prompt([{
                        type: 'input', name: 'chosenFilename',
                        message: t('askFilename', lang), default: defaultName
                    }]);
                    filename = chosenFilename;

                    if (saveFormat === 'csv') {
                        saveToCsv(newWallets, filename);
                    } else if (saveFormat === 'txt') {
                        saveToTxt(newWallets, filename);
                    }
                }
                console.log(`\n${Colors.Teal}==> ${Colors.Green}${t('saveSuccess', lang, { DATA_FILE: filename })}${Colors.RESET}`);
            } else {
                console.log(`\n${Colors.Teal}==> ${Colors.Yellow}${t('saveDeclined', lang)}${Colors.RESET}`);
            }
        }
    } catch (error) {
        console.error(`\n${Colors.Red}Error: ${error.message}${Colors.RESET}`);
    }
}

module.exports = { runBulkWallet };
