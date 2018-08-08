'use strict';
var router = require('express').Router();
var qr = require('qr-image')

router.get('/create_qrcode', function (req, res, next) {
  var url = req.query.url;
  try {
    var code = qr.image(url, { type: 'png' });
    res.setHeader('Content-type', 'image/png')
    code.pipe(res);
  } catch (e) {
    res.writeHead(414, {'Content-Type': 'text/html'});
    res.end('<h1>414 Request-URI Too Large</h1>'+e);
  }
})

module.exports = router;






