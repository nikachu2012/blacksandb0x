const express = require('express');
const version = require('./package.json').version;

const app = express();

const listener = app.listen(80, function () {

    console.log(`hacksandb0x Server v${version} / (C) nikachu2012`)
    console.log(listener.address().port);

});

app.get('/view', function (req, res) {
    res.send(`data: ${res.query.send}`)
});