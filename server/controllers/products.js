const CategoryModel = require("../schemas/categories")

async function handleGetProducts() {
    return await CategoryModel.find({})
}

module.exports = { handleGetProducts }