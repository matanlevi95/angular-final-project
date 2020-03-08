const UserModel = require("../schemas/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function saveUser(user) {
    console.log(user)
    const newUser = new UserModel({ ...user })
    try {
        const result = await newUser.save()
        return result
    }
    catch (err) {
        return console.log(err.message)

    }
}
async function getUser(email) {
    try {
        const user = await UserModel.find({ email })
        return user
    }
    catch (err) {
        return console.log(err.message)
    }
}
async function checkPassword(password, exPassword) {
    try {
        const compare = await bcrypt.compare(password, exPassword)
        if (compare) {
            return true
        } else {
            throw new Error("user not exists")
        }
    }
    catch (err) {
        return console.log(err.message)
    }
}


async function getToken(email) {
    const { SECRET } = process.env
    const token = jwt.sign(
        { email }, SECRET, { expiresIn: "1h" }
    )
    return token
}









module.exports = {
    saveUser,
    getUser,
    checkPassword,
    getToken

}