
const isNode = typeof process !== 'undefined' && process.release && /node|io\.js/.test(process.release.name)

const perf = isNode ? require('perf_hooks').performance : require('./iso-browser.js')

const isoBrowser = require('./iso-browser.js')
const nodeCrypto = isNode ? require('crypto') : null

/**
 * @type {function(number):ArrayBuffer}
 */
const cryptoRandomBuffer = nodeCrypto
  // node
  ? len => nodeCrypto.randomBytes(len).buffer
  : isoBrowser.cryptoRandomBuffer

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.cryptoRandomBuffer = cryptoRandomBuffer
exports.performance = perf

exports.default = {
  performance: perf,
  cryptoRandomBuffer: cryptoRandomBuffer
}
