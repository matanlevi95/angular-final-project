const router = require("express").Router()
const { handleSignUp, handleSignIn } = require("../controllers/users")


router.post("/signup", async (req, res, next) => {
    const { email, password } = req.body
    try {
        const result = await handleSignUp(email, password)
        res.json({ result, message: "user has registerd successfully" })
    }
    catch (err) {
        res.json(err.message)
    }
})
router.post("/signin", async (req, res, next) => {
    const { email, password } = req.body
    try {
        const { token, name } = await handleSignIn(email, password)
        console.log(token, name);

        res.json({ token, name, message: "logged in successfully" })
    }
    catch (err) {
        res.json({
            token: "", message: "email or password are incorrect"
        })
    }
})


module.exports = router