var express = require('express');
var bodyParser = require('body-parser');

global.rekuire = require('rekuire');

var app = express();

app.use(bodyParser.json());

app.use('/', rekuire('squashberry'));

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);

});

module.exports = app;
