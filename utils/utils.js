"use strict";

const readline = require('readline');

const Colors = {
    Green: "\x1b[32m",
    Red: "\x1b[31m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Purple: "\x1b[35m",
    Yellow: "\x1b[33m",
    Magenta: "\x1b[95m",
    Cyan: "\x1b[36m",
    Magenta2: "\x1b[91m",
    Blue: "\x1b[34m",
    Rainbow: "\x1b[38;5;206m",
    Gold: "\x1b[38;5;220m",
    Teal: "\x1b[38;5;51m",
    Orange: "\x1b[38;5;208m",
    Neon: "\x1b[38;5;198m",
    Electric: "\x1b[38;5;123m",
    RESET: "\x1b[0m"
};

function CoderMark() {
  try {
    // Log multi-line string with preserved formatting and color codes
    console.log(`
    
 ______     __    __     ______     __         ______  
/\\  ___\\   /\\ "-./  \\   /\\  __ \\   /\\ \\       /\\  ___\\ ${Colors.Green}
\\ \\ \\____  \\ \\ \\-./\\ \\  \\ \\  __ \\  \\ \\ \\____  \\ \\  __\\ 
 \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ ${Colors.Blue}  
  \\/_____/   \\/_/  \\/_/   \\/_/\\/_/   \\/_____/   \\/_/   ${Colors.Blue}${Colors.RESET}
                                                        
  
${Colors.Gold}[+] ${Colors.RESET}Bulk-Wallet and Vanity Address Toolkit ${Colors.Green}JS ${Colors.Blue}{ ${Colors.Neon}SOLANA${Colors.Blue} }${Colors.RESET} 
${Colors.Green}${"-".repeat(55)}
${Colors.Gold}[+]${Colors.RESET} GH : ${Colors.Teal}https://github.com/cmalf 
${Colors.Green}${"-".repeat(55)}${Colors.RESET}
    `);
  } catch (error) {
    console.error("An error occurred while logging the banner:", error);
  }
}

// Create a persistent global readline interface to avoid multiple instances.
let rlInstance = null;
function createInterface() {
  if (!rlInstance) {
    rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    // When the interface closes, allow it to be recreated later if needed.
    rlInstance.on("close", () => {
      rlInstance = null;
    });
  }
  return rlInstance;
}

// Promisified question function. Notice that we do not close the interface here.
function questionAsync(rl, question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer.trim());
    });
  });
}


module.exports = {
  Colors,
  CoderMark,  
  createInterface, 
  questionAsync 
};
