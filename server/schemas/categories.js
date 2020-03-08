const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
})
const CategoryModel = mongoose.model('categories', CategorySchema)

module.exports = CategoryModel

