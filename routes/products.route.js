const { showProducts, showProduct, updateProduct, iphonexsmax} = require('../controllers/products.controller'); // can call multiple functions
const db = require('../config/sql'); // connection to database

module.exports = function (app) {
    app.get('/admin/products', showProducts);
    app.get('/admin/editproduct/:id', showProduct);
    app.post('/admin/editproduct/:id', updateProduct);
    app.get('/admin/iphonexsmax', iphonexsmax)
}