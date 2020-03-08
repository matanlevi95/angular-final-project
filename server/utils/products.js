const products = require("../products.json")
const CategoryModel = require("../schemas/categories")


async function createCategory() {
    let result = products.reduce((obj, itr) => {
        itr.category.forEach((cat) => {
            const { name } = cat
            if (!obj[name]) obj = { ...obj, [name]: [itr] }
            else obj = { ...obj, [name]: [...obj[name], itr] }

        })
        return obj
    }, {})
    const categories = Object.keys(result).sort((a, b) => b.length - a.length)
    const fixedProducts = Object.values(result).sort((a, b) => b.length - a.length)
    for (let index = 0; index < 5; index++) {
        let newCategory = new CategoryModel({ name: categories[index], products: fixedProducts[index] })
        try {
            await newCategory.save()
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = { handleProducts }