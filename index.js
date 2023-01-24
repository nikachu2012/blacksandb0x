const express = require('express');
const version = require('./package.json').version;

const app = express();

const listener = app.listen(80, function () {

    console.log(`hacksandb0x Server v${version} / (C) nikachu2012`)
    console.log(listener.address().port);

});

app.get('/view', function (req, res) {
    let send = [];
    // debug
    const data = Buffer.from(decodeURIComponent(req.query.d), 'base64').toString();
    send.push(data)

    res.send(send.join(''))
});

