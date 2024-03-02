const router = require("express").Router();
const passport = require("passport");

router.get("/login/succes", (req, res) => {
    if (req.use){
        res.status(200).json({
            error: false,
            message: "Loged in Succesfully",
        });
    } else {
        res.status(403).json({ error: true, message: "Not Authorized"});
    }
});

router.get("/login/failure", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failed",
    });
});

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failure",
    })
);