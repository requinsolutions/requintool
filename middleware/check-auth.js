var jwt = require('jsonwebtoken');
const config = require("../config/config");

module.exports=(req, res, next)=>{
    try{
        const token = req.cookies.auth;
        const decode = jwt.verify(token, config.secret);
        console.log(decode)
        if(!decode){
            res.redirect('/../api/user/logout');
        }
        req.userData = decode;
        next();
    } catch(error){
        return res.status(401).redirect('/../api/user/logout');
    }
}