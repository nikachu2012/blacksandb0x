const express = require('express');
const version = require('./package.json').version;

const app = express();

const listener = app.listen(80, function () {

    console.log(listener.address().port);
    console.log(`hackSandb0x Server v${version} / (C) nikachu2012`)

});

app.get('/view', function (req, res) {
    let send = [];
    // debug
    if(req.query.debug === "true"){
        send.push('<pre><code >')
        send.push(`hackSandb0x debug\n`)
        send.push(`load Date: ${new Date()}\n`)
        send.push(`input Data: ${req.query.d}\n`)
        send.push(`convert Data: ${htmlspecialchars(Buffer.from(decodeURIComponent(req.query.d), 'base64').toString())}\n`)
        send.push('</code></pre>')
    }
    
    const data = Buffer.from(decodeURIComponent(req.query.d), 'base64').toString();
    send.push(data)

    res.send(send.join(''))
});

function htmlspecialchars(unsafeText){
    if(typeof unsafeText !== 'string'){
      return unsafeText;
    }
    return unsafeText.replace(
      /[&'`"<>]/g, 
      function(match) {
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
