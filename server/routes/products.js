const router = require("express").Router();
const { handleGetProducts } = require("../controllers/products")

router.get("/all", async (req, res, next) => {
    try {
        const result = await handleGetProducts()
        res.json(result)
    }
    catch (err) {
        res.send(err.message)
    }
})
module.exports = router