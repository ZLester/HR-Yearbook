// http://expressjs.com/en/guide/routing.html
var router = require('express').Router();
var messageController = require('../controllers/messageController.js');

router.route('/')
  .get(function(req, res) {
    res.send('You hit ' + req.originalUrl + '! Extend this router so that it\'s more useful!')
  });

module.exports = router;