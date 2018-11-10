require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
// var webpack = require('webpack')
/**
 * 开启gzip 压缩文件
 */
var compression = require('compression');

var port = process.env.PORT || config.dev.port


var app = express()
app.use(compression());

app.use('/', express.static('./dist'))

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})


/**
 *  选择 (这里判断可用的端口号)可用的端口号------------
 */
var uri = 'http://localhost:' + port
console.log('> Starting dev server...')
var net = require('net')
function probe(port, callback) {

  var server = net.createServer().listen(port)

  var calledOnce = false

  var timeoutRef = setTimeout(function() {
    calledOnce = true
    callback(false, port)
  }, 2000)

  timeoutRef.unref()

  var connected = false

  server.on('listening', function() {
    clearTimeout(timeoutRef)

    if (server)
      server.close()

    if (!calledOnce) {
      calledOnce = true
      callback(true, port)
    }
  })

  server.on('error', function(err) {
    clearTimeout(timeoutRef)

    var result = true
    if (err.code === 'EADDRINUSE')
      result = false

    if (!calledOnce) {
      calledOnce = true
      callback(result, port)
    }
  })
}
var checkPortPromise = new Promise((resolve) => {
  (function server(_port) {
    var pt = _port || 8080;
    probe(pt, function(bl, _pt) {
      if (bl === true) {
        resolve(_pt);
      } else {
        server(_pt + 1)
      }
    })
  })()
})

checkPortPromise.then(data => {
  uri = 'http://localhost:' + data;
  var server = app.listen(data);
  console.log('> Listening at ' + uri + '\n')
});
//-------------------
module.exports = {
  ready: readyPromise,
  close: () => {
    // server.close()
  }
}