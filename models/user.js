'use strict';

var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var JWT_SECRET = process.env.JWT_SECRET;

var userSchema = new mongoose.Schema({
  uid: String,
  groups: [{
    name: String
  }],
  cards: [
    {
      profile_img: String,
      profile_url: String,
    },
  ],
  name: {first: String, last: String},
  websites: [{url: String}],
  age: Number,
  ageRange: String,
  gender: String,
  location: String,
  locationLikelihood: Number,
  scores: [{provider: String, value: Number}],
  likelihood: Number,
  photos: [{type: String, url: String}],
  profiles: [{type: String, url: String}],
  currentLocationLat: String,
  hasFullContact: Boolean,
  email: String

});

// instance method
userSchema.methods.generateToken = function() {
  var payload = {
    uid: this.uid,
    _id: this._id
  };
  var token = jwt.encode(payload, JWT_SECRET);

  return token;
};

var User = mongoose.model('User', userSchema);

module.exports = User;
