const clc = require('cli-color');

/**
 * Log a message to the console
 * @param {string} action - The action of message to log
 * @param {string} message - The message to log
 * @param {string} type - The type of message to log
 * @example log('compiler', 'Compiling');
 * @example log('compiler', 'Compiling', 'error');
 */
module.exports = function(action, message, type='log') {
  // define some colors
  const types = {
    log: clc.white,
    error: clc.red,
    warn: clc.yellow,
    info: clc.blue
  }

  // get current date
  const date = new Date();

  // use clc to color the message
  const printTime = clc.blue(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`);
  const printAction = clc.cyan(`[${action}]`);
  const printMessage = types[type](message);

  // print to the console
  console.log(`${printTime}${printAction} ${printMessage}`);
}
