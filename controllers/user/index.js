const User = require("../../models/user/index");
const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const config = require("../../config/config");
const jwt_decode = require('jwt-decode');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};
exports.user_view = function(req, res, next) {
  User.find(function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};
exports.user_create = function(req, res, next) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        user_type: req.body.user_type,
        is_active: req.body.is_active,
        password: hash,
        freelancer: {
          isfulltime: req.body.isfulltime
        }
      });
      user.save(function(err, data) {
        if (err) {
          if (err.name === "MongoError" && err.code === 11000) {
            return next(new Error("Email already exist"));
          } else {
            return next(err);
          }
        }
        res.send(data);
      });
    }
  });
};

exports.user_details = function(req, res, next) {
  const token = req.cookies.auth;
  User.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};
exports.reset_pass = function (req, res, next){
  
      res.send({msg:"still in progress"})
      

}
exports.user_login = function(req, res, next) {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          msg: "error"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, function(
        err,
        result
      ) {
        if (err) {
          return res.status(401).json({
            msg: "error"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            config.secret,
            {
              expiresIn: "2h"
            }
          );
          res.cookie("auth", token);
          return res.redirect('/dashboard')
        }

        return res.status(401).json({
          msg: "error"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).redirect("/../login");
    });
};

exports.gettoken = function(req, res, next) {
  const token = req.cookies.auth;
  var decoded = jwt_decode(token);
  res.status(200).json({
    token: decoded
  });
};

exports.logout = function(req, res, next) {
  res.clearCookie("auth");
  res.redirect('/login')
};
exports.freelancer_update = function(req, res, next) {
  Freelancer.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return next(new Error("Email already exist"));
      } else {
        return next(err);
      }
    }
    res.send("Updated.");
  });
};
exports.user_delete = function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
