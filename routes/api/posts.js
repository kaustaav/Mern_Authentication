const express = require('express');
const verify = require('../../validation/verifyToken');
const router = express.Router();
const User = require('../../models/User');

router.get('/', verify, (req,res) => {
    user_id = req.user.id;
    User.findOne({_id: user_id}).then(user => {
        if(user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    })
})

module.exports = router;