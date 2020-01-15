
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

exports.performance = perf
exports.cryptoRandomBuffer = cryptoRandomBuffer
