'use strict';
const { parentPort } = require('worker_threads');
const { Keypair } = require('@solana/web3.js');
const bip39 = require('bip39');
const { derivePath } = require('ed25519-hd-key');
let bs58 = require('bs58');

if (typeof bs58.encode !== 'function' && bs58.default && typeof bs58.default.encode === 'function') {
    bs58 = bs58.default;
}

function generateWallet() {
    try {
        const mnemonic = bip39.generateMnemonic(256);
        const seed = bip39.mnemonicToSeedSync(mnemonic); // Gunakan versi sync di worker
        const { key } = derivePath("m/44'/501'/0'/0'", seed.toString('hex'));
        const seedBuffer = new Uint8Array(key);
        const keypair = Keypair.fromSeed(seedBuffer);
        return {
            mnemonic,
            walletAddressBase58: keypair.publicKey.toBase58(),
            privateKeyBase58: bs58.encode(keypair.secretKey)
        };
    } catch (error) {
        return null;
    }
}

// Dengar pesan dari main thread
parentPort.on('message', (msg) => {
    if (msg === 'generate') {
        const wallet = generateWallet();
        parentPort.postMessage(wallet); // Kirim hasil kembali ke main thread
    }
});
