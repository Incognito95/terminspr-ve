const db = require('../config/sql');

// show product
exports.showProducts = function (req, res, next) {
    db.query('SELECT name, weight, description, price, id FROM products', function (err, results) {
        if (err) {
            console.log(err)
            res.end();
            return;
        } else {
            console.table(results);
            res.render('products', { results })
        }
    })
}

// show one product
exports.showProduct = function(req, res, next) {
    db.query(`SELECT id, name, weight, price, description FROM products WHERE id = ?`,[req.params.id], function(err, results) {
        if(err) {
            console.log(err)
            res.end();
            return;
        }
        console.table(results[0]);
        res.render('editproduct', {result: results[0]})
    })
}

