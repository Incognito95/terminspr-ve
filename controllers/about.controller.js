const db = require('../config/sql');

exports.about = function (req, res, next) {
    db.query(`SELECT about_text FROM description`, function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.render('about',{ results });
        }
        
    });
};