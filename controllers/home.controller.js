const db = require('../config/sql');

exports.home = function (req, res, next) {
res.render('home', { 'content': 'Forsiden'})
};