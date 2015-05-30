var mongoose = require('mongoose');

var model  = new mongoose.Schema({
    "name": String,
    "score": Number
});

module.exports = mongoose.model('Score', model, "squashberry");