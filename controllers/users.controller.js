const db = require('../config/sql');

// show users
exports.showUsers = function (req, res, next) {
    db.query('SELECT user, email, id FROM users', function (err, results) {
        if (err) {
            console.log(err)
            res.end();
            return;
        } else {
            console.table(results);
            res.render('users', { results })
        }
    })
}

// show one user
exports.showUser = function(req, res, next) {
    console.log(db.query)
    db.query(`SELECT user, email, id, profile_image FROM users WHERE id = ?`,[req.params.id], function(err, results) {
        if(err) {
            console.log(err)
            res.end();
            return;
        }
        console.table(results[0]);
        res.render('edituser', {result: results[0]})
    })
}


// update user
exports.updateUser = function(req, res, next) {
    db.query(`INSERT INTO users (user, email)
            VALUES('kennethp', 'kennethp@kennethp.com')`, function(err, results) {
            if(err) {
                console.log(err)
                res.end();
                return;
            } else {
                console.table(results);
                res.redirect('/users');
        }
    })
}
