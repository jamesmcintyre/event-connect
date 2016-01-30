'use strict';

var Firebase = require('firebase');
var express = require('express');
var router = express.Router();
var request = require('request');
var authMiddleware = require('../config/auth');

var User = require('../models/user');

var ref = new Firebase('https://jmmusers2.firebaseio.com/');

router.post('/register', function(req, res, next) {
  ref.createUser(req.body, function(err, userData) {
    //if(err) return res.status(400).send(err);
    User.create(userData, function(err) {
      //if (err) return res.status(400).send(err);
      res.send();
    });
  });
});

router.post('/login', function(req, res, next) {
  ref.authWithPassword(req.body, function(err, authData) {
    if(err) return res.status(400).send(err);
    User.findOne({uid: authData.uid}, function(err, user) {
      // console.log(user.email);
      // if(! user.email) {
      //   user.email = authData.password.email;
      //   console.log('new email :', user.email);
      //   user.save(function (err) {
      //     if (err) return res.status(400).send(error);
      //     console.log('mongo user updated with email!:  ', user.email);
      //   });
      // }
      // req.user.email = authData.password.email;
      var token = user.generateToken();
      res.cookie('mytoken', token).send();
    });
  });
});

router.get('/profile', authMiddleware, function(req, res) {
  //// logged in,   req.user

    // console.log('XXXXXXXXXX:  ',req.user.uid);
    //
    // User.findOne({uid: req.user.uid}, function(err, user) {
    //   var userEmail = user.email;
    //   //console.log('yyyyyyyyy: ',user.email);
    //   var baseURL = 'https://api.fullcontact.com/v2/person.json?';
    //   //var userEmail = 'email='+'james.checks.his.email@gmail.com';
    //   var apiKey = "&apiKey=fea00f8a85d7ec98";
    //   var reqURL = baseURL+userEmail+apiKey;
    //   console.log(user.email);
    //   console.log('ZZZZZZZZZ:   ', (!user.hasFullContact));
    //   //if we have not pulled the data from full contact
    //   if (!user.hasFullContact){
    //       console.log('pulling data from fullcontact api...')
    //       request(reqURL, function (error, response, body) {
    //         if (error) return res.status(400).send(error);
    //
    //         if (!error && response.statusCode == 200) {
    //
    //           console.log('data received from fullcontact api!!!')
    //           user.name = {first: body.contactInfo.givenName, last: body.contactInfo.familyName},
    //           user.websites = body.websites,
    //           user.age = body.demographics.age,
    //           user.ageRange = body.demographics.ageRange,
    //           user.gender = body.demographics.gender,
    //           user.location = body.demographics.locationDeduced.deducedLocation,
    //           user.locationLikelihood = body.demographics.locationDeduced.likelihood,
    //           user.scores = body.digitalFootprint.scores,
    //           user.likelihood = body.likelihood,
    //           user.photos = body.photos,
    //           user.profiles = body.socialProfiles
    //
    //           user.save(function (err) {
    //             if (err) return res.status(400).send(error);
    //             console.log('mongo user updated!')
    //           });
    //
    //           console.log('mongo user doc: ', user);
    //
    //           res.render('profile', {
    //             userData: user,
    //             user: req.user,
    //             title: 'Profile'
    //             }
    //           );
    //
    //         }
    //       });
    //
    // }
    // else {
    //   //we have already pulled the user data from full contact
    //
    //   res.render('profile', {
    //     userData: user,
    //     user: req.user,
    //     title: 'Profile'
    //     }
    //   );
    //
    // }



  // });

  res.send();

  // });
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('mytoken').redirect('/');
});


module.exports = router;
