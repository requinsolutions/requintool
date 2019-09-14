var jwt = require('jsonwebtoken');
const config = require("../config/config");

module.exports=(req, res, next)=>{
        const token = req.cookies.auth;
        if(token){
          const decode = jwt.verify(token, config.secret);
          if(decode){
            res.redirect('/../dashboard');
            console.log(decode)
          }
          else{
            res.redirect('/../api/user/logout')
          }
        }
        next();
}