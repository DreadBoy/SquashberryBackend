var express = require('express'),
    router = express.Router(),
    database = rekuire('database');


router
    .get('/', function (req, res) {
        database.list(function (err, scores) {
            if(err)
                res.status(404).send('Not found');
            else
                res.json(scores);
        })
    })
    .post('/:name', function (req, res) {
        var score = {
            name: req.params.name,
            score: req.query.score
        };
        database.insert(score, function (err, score) {
            if(err)
                res.status(404).send('Not found');
            else
                res.json(score);
        });

    });

module.exports = router;