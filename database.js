var mongoose = require('mongoose'),
    ScoreModel = rekuire('SquashBerryModel');

var db = mongoose.connect('mongodb://jt:jt@kahana.mongohq.com:10016/pesek');

module.exports = new function Database() {
    var that = this;

    that.list = function (callback) {
        ScoreModel.find({})
            .sort({score: -1})
            .limit(10)
            .exec(function (err, posts) {
                callback(err, posts);
            });
    };

    that.insert = function (score, callback) {
        ScoreModel.create(score, callback);
    };

    return that;
};
