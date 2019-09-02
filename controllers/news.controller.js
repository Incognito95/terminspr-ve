const db = require('../config/sql');

exports.showNews = function (req, res, next) {
    res.render('news', {'content' :'Nyheds arkiv'})
};