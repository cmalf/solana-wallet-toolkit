const translations = {
  en: {
    // Main Menu
    mainMenu: "Select a tool to use:",
    vanityGen: "Vanity Address Generator",
    bulkGen: "Bulk Wallet Generator",
    exit: "Exit",

    // Bulk Wallet
    askBulkAmount: "How many wallets do you want to create?",
    creatingBulk: "Creating {numWallets} new wallet(s)...",
    createdBulk: "Created wallet {count}/{total} | Address:",
    successBulk: "Successfully created {numWallets} wallet(s).",

    // Vanity Wallet
    askNumWallets: "How many vanity wallets do you want to find? (Recommended: 1)",
    askPrefix: "Enter prefix (start of address), leave empty if none: ",
    askSuffix: "Enter suffix (end of address), leave empty if none: ",
    askCaseSensitive: "Is the search case-sensitive? (y/n) [default: n] ",
    startSearch: "Starting brute force search for {numWallets} wallet(s)...",
    prefix: "Prefix",
    suffix: "Suffix",
    caseSensitive: "Case-Sensitive",
    pressCtrlC: "Press Ctrl+C to stop anytime.",
    wpsInfo: "(Note: WPS speed depends on your CPU and cannot be set manually.)",

    // Common
    stoppingSearch: "Stopping search... Press Ctrl+C again to force exit.",
    forceExit: "Forced exit.",
    foundWallet: "FOUND!",
    address: "Address",
    mnemonic: "Mnemonic",
    privateKey: "Private Key",
    finished: "Finished! Found {walletsFound} wallet(s) in {totalSeconds} seconds ({attempts} attempts).",
    savePrompt: "Do you want to save the generated wallets?", // Modifikasi prompt lama
    askSaveFormat: "Choose a format to save the wallets:",
    saveFormatJS: "JavaScript (.js - appends to existing data)",
    saveFormatCSV: "CSV File (.csv - new file)",
    saveFormatTXT: "Text File (.txt - new file)",
    askFilename: "Enter filename to save:",
    saveDeclined: "Data was not saved.",
    invalidNumber: "Please enter a valid number (greater than 0).",
    noPrefixSuffix: "You must enter at least a prefix or a suffix. Exiting.",
    wallet: "Wallet",
    searchStopped: "Search stopped by user.",
    progress: "Attempts: {attempts} | WPS: {wps} | Found: {walletsFound}/{numWallets}..."
  },
  id: {
    // Main Menu
    mainMenu: "Pilih program yang akan digunakan:",
    vanityGen: "Pembuat Alamat Vanity",
    bulkGen: "Pembuat Wallet Massal",
    exit: "Keluar",

    // Bulk Wallet
    askBulkAmount: "Berapa banyak wallet yang akan dibuat?",
    creatingBulk: "Membuat {numWallets} wallet baru...",
    createdBulk: "Membuat wallet {count}/{total} | Alamat:",
    successBulk: "Berhasil membuat {numWallets} wallet.",
    
    // Vanity Wallet
    askNumWallets: "Berapa banyak wallet vanity yang ingin dicari? (Disarankan: 1) ",
    askPrefix: "Masukkan prefix (awal alamat), biarkan kosong jika tidak: ",
    askSuffix: "Masukkan suffix (akhir alamat), biarkan kosong jika tidak: ",
    askCaseSensitive: "Apakah pencarian case-sensitive? (y/n) [default: n] ",
    startSearch: "Memulai pencarian brute force untuk {numWallets} wallet...",
    prefix: "Prefix",
    suffix: "Suffix",
    caseSensitive: "Case-Sensitive",
    pressCtrlC: "Tekan Ctrl+C untuk berhenti kapan saja.",
    wpsInfo: "(Catatan: Kecepatan WPS bergantung pada CPU Anda dan tidak bisa diatur manual.)",

    // Common
    stoppingSearch: "Menghentikan pencarian... Tekan Ctrl+C lagi untuk keluar paksa.",
    forceExit: "Keluar paksa.",
    foundWallet: "DITEMUKAN!",
    address: "Alamat",
    mnemonic: "Mnemonic",
    privateKey: "Private Key",
    finished: "Selesai! Ditemukan {walletsFound} wallet dalam {totalSeconds} detik ({attempts} percobaan).",
    savePrompt: "Apakah Anda ingin menyimpan dompet yang telah dibuat?",
    askSaveFormat: "Pilih format untuk menyimpan dompet:",
    saveFormatJS: "JavaScript (.js - ditambahkan ke data yang sudah ada)",
    saveFormatCSV: "Berkas CSV (.csv - berkas baru)",
    saveFormatTXT: "Berkas Teks (.txt - berkas baru)",
    askFilename: "Masukkan nama berkas untuk disimpan:",
    saveDeclined: "Data tidak disimpan.",
    invalidNumber: "Harap masukkan angka yang valid (lebih besar dari 0).",
    noPrefixSuffix: "Anda harus memasukkan setidaknya prefix atau suffix. Keluar.",
    wallet: "Wallet",
    searchStopped: "Pencarian dihentikan oleh pengguna.",
    progress: "Percobaan: {attempts} | WPS: {wps} | Ditemukan: {walletsFound}/{numWallets}..."
  },
  zh: {
    // Main Menu
    mainMenu: "选择要使用的工具:",
    vanityGen: "靓号地址生成器",
    bulkGen: "批量钱包生成器",
    exit: "退出",

    // Bulk Wallet
    askBulkAmount: "您想创建多少个钱包？",
    creatingBulk: "正在创建 {numWallets} 个新钱包...",
    createdBulk: "已创建钱包 {count}/{total} | 地址:",
    successBulk: "成功创建了 {numWallets} 个钱包。",

    // Vanity Wallet
    askNumWallets: "您想找到多少个靓号钱包？ (推荐: 1)",
    askPrefix: "输入前缀 (地址开头), 如果没有则留空: ",
    askSuffix: "输入后缀 (地址末尾), 如果没有则留空: ",
    askCaseSensitive: "搜索是否区分大小写? (y/n) [默认: n] ",
    startSearch: "开始为 {numWallets} 个钱包进行暴力搜索...",
    prefix: "前缀",
    suffix: "后缀",
    caseSensitive: "区分大小写",
    pressCtrlC: "随时按 Ctrl+C 停止。",
    wpsInfo: "(注意: WPS速度取决于您的CPU, 无法手动设置。)",

    // Common
    stoppingSearch: "正在停止搜索... 再次按 Ctrl+C 强制退出。",
    forceExit: "强制退出。",
    foundWallet: "找到了!",
    address: "地址",
    mnemonic: "助记词",
    privateKey: "私钥",
    finished: "完成! 在 {totalSeconds} 秒内找到 {walletsFound} 个钱包 ({attempts} 次尝试)。",
    savePrompt: "您想保存生成的钱包吗？",
    askSaveFormat: "选择一种格式来保存钱包：",
    saveFormatJS: "JavaScript (.js - 附加到现有数据)",
    saveFormatCSV: "CSV 文件 (.csv - 新文件)",
    saveFormatTXT: "文本文件 (.txt - 新文件)",
    askFilename: "输入要保存的文件名：",
    saveDeclined: "数据未保存。",
    invalidNumber: "请输入一个有效的数字 (大于0)。",
    noPrefixSuffix: "您必须至少输入一个前缀或后缀。正在退出。",
    wallet: "钱包",
    searchStopped: "搜索被用户停止。",
    progress: "尝试次数: {attempts} | WPS: {wps} | 已找到: {walletsFound}/{numWallets}..."
  },
  ru: {
    // Main Menu
    mainMenu: "Выберите инструмент для использования:",
    vanityGen: "Генератор Vanity Адресов",
    bulkGen: "Массовый Генератор Кошельков",
    exit: "Выход",

    // Bulk Wallet
    askBulkAmount: "Сколько кошельков вы хотите создать?",
    creatingBulk: "Создание {numWallets} новых кошельков...",
    createdBulk: "Создан кошелек {count}/{total} | Адрес:",
    successBulk: "Успешно создано {numWallets} кошельков.",

    // Vanity Wallet
    askNumWallets: "Сколько vanity кошельков вы хотите найти? (Рекомендуется: 1)",
    askPrefix: "Введите префикс (начало адреса), оставьте пустым, если нет: ",
    askSuffix: "Введите суффикс (конец адреса), оставьте пустым, если нет: ",
    askCaseSensitive: "Поиск чувствителен к регистру? (y/n) [по умолчанию: n] ",
    startSearch: "Начинаем перебор для поиска {numWallets} кошельков...",
    prefix: "Префикс",
    suffix: "Суффикс",
    caseSensitive: "Чувствительность к регистру",
    pressCtrlC: "Нажмите Ctrl+C для остановки в любое время.",
    wpsInfo: "(Примечание: Скорость WPS зависит от вашего процессора и не может быть установлена вручную.)",

    // Common
    stoppingSearch: "Остановка поиска... Нажмите Ctrl+C еще раз для принудительного выхода.",
    forceExit: "Принудительный выход.",
    foundWallet: "НАЙДЕНО!",
    address: "Адрес",
    mnemonic: "Мнемоника",
    privateKey: "Приватный ключ",
    finished: "Готово! Найдено {walletsFound} кошельков за {totalSeconds} секунд ({attempts} попыток).",
    savePrompt: "Вы хотите сохранить сгенерированные кошельки?",
    askSaveFormat: "Выберите формат для сохранения кошельков:",
    saveFormatJS: "JavaScript (.js - добавляет к существующим данным)",
    saveFormatCSV: "Файл CSV (.csv - новый файл)",
    saveFormatTXT: "Текстовый файл (.txt - новый файл)",
    askFilename: "Введите имя файла для сохранения:",
    saveDeclined: "Данные не были сохранены.",
    invalidNumber: "Пожалуйста, введите корректное число (больше 0).",
    noPrefixSuffix: "Вы должны ввести хотя бы префикс или суффикс. Выход.",
    wallet: "Кошелек",
    searchStopped: "Поиск был остановлен пользователем.",
    progress: "Попытки: {attempts} | WPS: {wps} | Найдено: {walletsFound}/{numWallets}..."
  },
  th: {
    // Main Menu
    mainMenu: "เลือกเครื่องมือที่จะใช้:",
    vanityGen: "เครื่องสร้าง Vanity Address",
    bulkGen: "เครื่องสร้าง Wallet จำนวนมาก",
    exit: "ออก",

    // Bulk Wallet
    askBulkAmount: "คุณต้องการสร้างกี่ Wallet?",
    creatingBulk: "กำลังสร้าง {numWallets} Wallet ใหม่...",
    createdBulk: "สร้าง Wallet ที่ {count}/{total} | ที่อยู่:",
    successBulk: "สร้าง {numWallets} Wallet สำเร็จแล้ว",

    // Vanity Wallet
    askNumWallets: "คุณต้องการค้นหา vanity wallet กี่ใบ? (แนะนำ: 1)",
    askPrefix: "กรุณาใส่ Prefix (ส่วนหน้าของที่อยู่), เว้นว่างไว้หากไม่มี: ",
    askSuffix: "กรุณาใส่ Suffix (ส่วนท้ายของที่อยู่), เว้นว่างไว้หากไม่มี: ",
    askCaseSensitive: "การค้นหาต้องตรงตามตัวพิมพ์ใหญ่-เล็กหรือไม่? (y/n) [ค่าเริ่มต้น: n] ",
    startSearch: "เริ่มการค้นหา brute force สำหรับ {numWallets} wallet...",
    prefix: "Prefix",
    suffix: "Suffix",
    caseSensitive: "ตรงตามตัวพิมพ์ใหญ่-เล็ก",
    pressCtrlC: "กด Ctrl+C เพื่อหยุดเมื่อใดก็ได้",
    wpsInfo: "(หมายเหตุ: ความเร็ว WPS ขึ้นอยู่กับ CPU ของคุณและไม่สามารถตั้งค่าด้วยตนเองได้)",

    // Common
    stoppingSearch: "กำลังหยุดการค้นหา... กด Ctrl+C อีกครั้งเพื่อบังคับออก",
    forceExit: "บังคับออก",
    foundWallet: "พบแล้ว!",
    address: "ที่อยู่",
    mnemonic: "Mnemonic",
    privateKey: "Private Key",
    finished: "เสร็จสิ้น! พบ {walletsFound} wallet ใน {totalSeconds} วินาที ({attempts} ครั้ง)",
    savePrompt: "คุณต้องการบันทึกกระเป๋าสตางค์ที่สร้างขึ้นหรือไม่?",
    askSaveFormat: "เลือกรูปแบบเพื่อบันทึกกระเป๋าสตางค์:",
    saveFormatJS: "JavaScript (.js - เพิ่มต่อท้ายข้อมูลที่มีอยู่)",
    saveFormatCSV: "ไฟล์ CSV (.csv - ไฟล์ใหม่)",
    saveFormatTXT: "ไฟล์ข้อความ (.txt - ไฟล์ใหม่)",
    askFilename: "ป้อนชื่อไฟล์เพื่อบันทึก:",
    saveDeclined: "ข้อมูลไม่ถูกบันทึก",
    invalidNumber: "โปรดป้อนหมายเลขที่ถูกต้อง (มากกว่า 0)",
    noPrefixSuffix: "คุณต้องป้อน Prefix หรือ Suffix อย่างน้อยหนึ่งอย่าง กำลังออก",
    wallet: "Wallet",
    searchStopped: "การค้นหาถูกหยุดโดยผู้ใช้",
    progress: "จำนวนครั้ง: {attempts} | WPS: {wps} | พบ: {walletsFound}/{numWallets}..."
  }
};

function t(key, lang, replacements = {}) {
  let text = (translations[lang] && translations[lang][key]) || key;
  for (const placeholder in replacements) {
    text = text.replace(new RegExp(`{${placeholder}}`, 'g'), replacements[placeholder]);
  }
  return text;
}

module.exports = { t, translations };
