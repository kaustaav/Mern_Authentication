const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = function auth(req,res,next) {
    const token = req.header('Authorization');
    if(!token) return res.status(401).send('Access Denied');

    try{
        // console.log(keys.secretOrKey);
        const verified = jwt.verify(token, keys.secretOrKey);
        req.user = verified;
        console.log(verified);
        next();
    } catch {
        res.status(400).send('Invalid Token');
    }
}