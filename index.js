'use strict';
process.noDeprecation = true;

const inquirer = require('inquirer');
const { t } = require('./utils/translate.js');
const { runVanityWallet } = require('./models/sol-vanity.js');
const { runBulkWallet } = require('./models/bulk-wallet.js');
const { Colors, CoderMark } = require('./utils/utils.js');

async function main() {
    console.clear();
    await CoderMark();     
    let lang = 'en';

    try {
        // 1. Pilih Bahasa
        const langAnswer = await inquirer.prompt([{
            type: 'list', name: 'selected', message: 'Select language / Pilih bahasa:',
            choices: [
                { name: 'English', value: 'en' }, { name: 'Indonesia', value: 'id' },
                { name: '中文 (Chinese)', value: 'zh' }, { name: 'Русский (Russian)', value: 'ru' },
                { name: 'ไทย (Thai)', value: 'th' }
            ]
        }]);
        lang = langAnswer.selected;

        // Loop untuk menu utama
        while (true) {
            console.log(`\n${Colors.Cyan}${"-".repeat(30)}${Colors.RESET}`);

            // 2. Pilih Program
            const { toolChoice } = await inquirer.prompt([{
                type: 'list',
                name: 'toolChoice',
                message: t('mainMenu', lang),
                choices: [
                    { name: t('vanityGen', lang), value: 'vanity' },
                    { name: t('bulkGen', lang), value: 'bulk' },
                    new inquirer.Separator(),
                    { name: t('exit', lang), value: 'exit' }
                ]
            }]);

            // 3. Jalankan Program yang Dipilih
            if (toolChoice === 'vanity') {
                await runVanityWallet(lang);
            } else if (toolChoice === 'bulk') {
                await runBulkWallet(lang);
            } else if (toolChoice === 'exit') {
                console.log(`${Colors.Yellow}Goodbye!${Colors.RESET}`);
                process.exit(0);
            }
        }
    } catch (error) {
        console.error(`\n${Colors.Red}An unexpected error occurred in the main menu: ${error.message}${Colors.RESET}`);
        process.exit(1);
    }
}

main();