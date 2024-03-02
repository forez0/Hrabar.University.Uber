const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
    if (req.user){
        res.status(200).json({
            error: false,
            message: "Logged in Successfully",
            user: req.user,
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

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: true, message: "Internal Server Error" });
});

module.exports = router;