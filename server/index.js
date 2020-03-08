const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const usersRouter = require("./routes/users")
const dbConnection = require("./db/db")
const productsRouter = require("./routes/products")

require("dotenv").config()
const port = process.env.PORT || 5000

app.listen(port, () => { console.log(`now listening to ${port}`) })
app.use(cors())
app.use(bodyParser.json())
dbConnection()

app.use("/users", usersRouter)
app.use("/products", productsRouter)
