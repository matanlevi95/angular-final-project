const { saveUser, getUser, checkPassword, getToken } = require("../utils/user")
const bcrypt = require("bcrypt")

async function handleSignUp(email, password) {
    const salt = bcrypt.genSaltSync(10)
    const encryptPassword = bcrypt.hashSync(password, salt)
    const result = await saveUser({ email, password: encryptPassword, salt })
    return result
}

async function handleSignIn(email, password) {
    try {
        const [user] = await getUser(email)
        const result = await checkPassword(password, user.password)
        if (!result) throw new Error
        const token = await getToken()
        return { token, name: user.email }
    }
    catch{
        throw new Error
    }
}


module.exports = {
    handleSignUp,
    handleSignIn
}