var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');
var authStatusMiddleware = require('../config/auth2');

/* GET home page. */
router.get('/', authStatusMiddleware, function(req, res, next) {
  console.log('ssdfsf:  ',{user: req.user});
  res.render('index', {title: 'Event Shadow', user: req.user});
    //TODO pull from mongo user document loggin status


});

router.get('/login', authStatusMiddleware, function(req, res, next) {
  res.render('login',  {user: req.user});
});

router.get('/register', authStatusMiddleware, function(req, res, next) {
  res.render('register',  {user: req.user, page: 'register'});
});

router.get('/secret', authMiddleware, function(req, res, next) {
  console.log('req.user:', req.user);
  res.send('Wooo!  Secret stuff!!!');
});

module.exports = router;
