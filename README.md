#  Solana Wallet Toolkit 🛠️

<p align="center">
  <strong>A user-friendly, multi-language CLI toolkit for generating Solana wallets, including custom vanity and bulk addresses.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg" alt="Node.js version">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/npm-ready-red.svg" alt="npm ready">
</p>

---

**Solana Wallet Toolkit** provides a simple yet powerful interactive command-line interface to create Solana wallets. Whether you need a personalized vanity address with a specific prefix, or thousands of wallets for an airdrop, this tool streamlines the process with guided menus and high-performance generation.
<!--
*Read this in other languages: [English](README.md), [Bahasa Indonesia](README.id.md)* 
-->
## ✨ Features

-   **Vanity Address Generator**: Find Solana addresses with your desired prefix or suffix (e.g., `cmalf...`). Utilizes multi-threading for non-blocking, high-performance searching.
-   **Bulk Wallet Generator**: Quickly create hundreds or thousands of wallets in a single command.
-   **Interactive & User-Friendly**: A fully guided menu-driven experience. No complex commands to memorize.
-   **Multi-Language Support**: Full support for English, Indonesian, Chinese, Russian, and Thai.
-   **Flexible Save Options**: Save your generated wallets in multiple formats (`.js`, `.csv`, `.txt`) for easy integration.
-   **Safe & Secure**: All key generation happens locally on your machine. Your mnemonic phrases are never transmitted.
-   **Responsive Controls**: Stop any process gracefully with `Ctrl+C` at any time, thanks to a non-blocking architecture.

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) version 16.0.0 or higher.
-   [npm](https://www.npmjs.com/) (usually included with Node.js).

### Installation

There are two ways to use this toolkit:

#### 1. Via `npx` (Recommended for Quick Use)

This method allows you to run the toolkit without a permanent installation. It's quick, easy, and always uses the latest version.

```
npx solana-wallet-toolkit
```

#### 2. Global Installation (For Frequent Use)

If you plan to use this tool often, you can install it globally on your system.

```
npm install -g solana-wallet-toolkit
```

After installation, you can run the toolkit from anywhere in your terminal with a simple command:

```
sol-toolkit
```

## 🎮 How to Use

Once you start the application, you will be guided through an interactive menu:

1.  **Select Language**: Choose your preferred language for the interface.
2.  **Select Tool**:
    -   `Vanity Address Generator`: To find a custom address (`with mnemonic and privateKeyBase58`).
    -   `Bulk Wallet Generator`: To create multiple wallets at once.
3.  **Follow Prompts**: Answer the questions to configure the generator (e.g., enter prefix, number of wallets).
4.  **Generate**: The tool will start the generation process.
5.  **Save Results**: After completion, you'll be prompted to save the generated wallets in your preferred format (`.js`, `.csv`, or `.txt`).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/cmalf/solana-wallet-toolkit/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Crafted with ❤️ by [cmalf](https://github.com/cmalf)
