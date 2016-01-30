'use strict';

var jwt = require('jwt-simple');
var JWT_SECRET = process.env.JWT_SECRET;

var authStatusMiddleware = function(req, res, next) {

  try {
    var payload = jwt.decode(req.cookies.mytoken, JWT_SECRET);
    req.user = payload;
    req.user.isLoggedIn = true;

  } catch(err) {
    // req.user;
      if(!req.user){
        req.user = {};
      }
      if(!req.cookies.mytoken){
        req.user.noCookie = true;
      }
    req.user.isLoggedIn = false;
  }


  next();
};


module.exports = authStatusMiddleware;
