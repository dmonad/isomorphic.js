/* eslint-env browser */
const perf = typeof performance === 'undefined' ? null : performance

const isoCrypto = typeof crypto === 'undefined' ? null : crypto

/**
 * @type {function(number):ArrayBuffer}
 */
const cryptoRandomBuffer = isoCrypto !== null
  ? len => {
    // browser
    const arr = new Uint8Array(len)
    isoCrypto.getRandomValues(arr)
    return arr.buffer
  }
  : len => {
    // polyfill
    const arr = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
      arr[i] = Math.ceil((Math.random() * 0xFFFFFFFF) >>> 0)
    }
    return arr.buffer
  }

exports.performance = perf
exports.cryptoRandomBuffer = cryptoRandomBuffer
