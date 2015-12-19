// http://mongoosejs.com/docs/index.html
// Flesh out this controller so that you can create, retrieve, and delete messages
var Message = require('../models/Message.js');

exports.create = function(message, callback) {
  Message.create(message, callback);
};

exports.find = function(query, callback) {

};

exports.findByAuthor= function(author, callback) {

};

exports.delete = function(query, callback) {

};