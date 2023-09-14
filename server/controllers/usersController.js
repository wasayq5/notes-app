const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

async function signup(req, res) {
try {
//Retrieve login credentials
const { email, password } = req.body;

//Hash password
const hashedPassword = bcrypt.hashSync(password, 8);

// Create User
await User.create({ email, password: hashedPassword });

//respond
res.sendStatus(200);
} catch(err) {
    console.log(err);
    res.sendStatus(400);
    }
}

async function login(req, res) {
    try{
    // Get login credentials
    const { email, password } = req.body;

    //find user
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(401);

    //verify password using password hash
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401);
    // create jwt token
    const exp = Date.now() + 1000*60*60*24*30;
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    //set cookie
    res.cookie("Authorization", token, {
        expires: new Date(exp),
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });

    //send jwt token
    res.json({token});

} catch (err) {
    console.log(err);
    res.sendStatus(400);
}
}

function logout(req, res) {
    try {
    res.clearCookie("Authorization");
    res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

function checkAuth(req, res) {
    try{
    res.sendStatus(200);
    } catch (err) {
        return res.sendStatus(400);

    }
}

module.exports = {
    signup,
    login,
    logout,
    checkAuth,
};