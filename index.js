const express = require('express');
const path = require('path')
const version = require('./package.json').version;

const app = express();

const listener = app.listen(80, function () {

  console.log(`hackSandb0x Server v${version} / (C) nikachu2012`)
  console.log('port: ', listener.address().port);

});

app.get('/view', function (req, res) {
  let send = [];

  if (req.query.d !== undefined) {
    // debug
    if (req.query.debug === "true") {
      send.push('<pre><code>')
      send.push(`hackSandb0x v${version} debug\n`)
      send.push(`load Date: ${new Date()}\n`)
      send.push(`input Data: ${req.query.d}\n`)
      send.push(`convert Data: ${htmlspecialchars(Buffer.from(decodeURIComponent(req.query.d), 'base64').toString())}\n`)
      send.push('</code></pre>')
    }

    const data = Buffer.from(decodeURIComponent(req.query.d), 'base64').toString();
    send.push(data)

    res.send(send.join(''))
  }
  else {
    res.contentType('html')
    res.sendFile(path.join(__filename, '../error.html'))
  }

});

function htmlspecialchars(unsafeText) {
  if (typeof unsafeText !== 'string') {
    return unsafeText;
  }
  return unsafeText.replace(
    /[&'`"<>]/g,
    function (match) {
      return {
        '&': '&amp;',
        "'": '&#x27;',
        '`': '&#x60;',
        '"': '&quot;',
        '<': '&lt;',
        '>': '&gt;',
      }[match]
    }
  );
}
