const db = require('../config/sql');

const { compareSync } = require('bcryptjs');

exports.get = function (req, res, next) {
    res.render('login', { // title and content variable that gets sent to our route
    "title": "",
    "content": ""
})};

exports.post = async function (req, res, next) {
    try {
        const profileSQL = `INSERT INTO users
        SET email = :email`;
        const userSQL = `INSERT INTO users
        SET username = :username, password = :password, fk_profile = :fk`;

        const hashedPassword = hashsync(req.fields.password, 10);
        
        // execute sql sentence
        const profile = await db.query(profileSQL, {email: req.fields.email });
        const user = await db.query(userSQL, {
            password: hashedPassword,
            username: req.fields.username,
            fk: profile [0].insertId
        });

        res.send('You are now registered as a user. Congratulations!');
    } catch(error) {
        if(error.code === "ER_DUP_ENTRY") {
            return res.send('This user already exists!');
        }
    }

}; // exports login


exports.logout = function (req, res, next) {
    // deleting variables
    delete req.session.isLoggedIn;
    delete req.session.user;
    delete req.app.locals.isLoggedIn;
    res.redirect('/login');
};