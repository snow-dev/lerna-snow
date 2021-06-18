
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./snow-lib.cjs.production.min.js')
} else {
  module.exports = require('./snow-lib.cjs.development.js')
}
