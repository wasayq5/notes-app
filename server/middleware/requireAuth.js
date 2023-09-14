const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function requireAuth(req,res,next) {
    try {
    // Read token off cookies
    const token = req.cookies.Authorization;

    //decode token
    const decoded = jwt.verify(token, process.env.SECRET);

    //check expiration
    if (Date.now() > decoded.app) return res.sendStatus(401);

    //find user via decoded sub
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    //attach user to req
    req.user = user;
    console.log("hi");

    //continue on
    next();
    } catch (err) { 
        return res.sendStatus(401);
    }
}

module.exports = requireAuth;