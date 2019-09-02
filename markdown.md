``````````````
const db = require('../config/sql'); // connecting to the database

exports.signup = function (req, res, next) {
    res.render('signup', { // title and content variable that gets sent to our route
    "title": "Signup"
})};

// asynchronous function by writing async in front of function
exports.post = async function(req, res, next) {
    try {
        const profileSQL = `INSERT INTO profiles
        SET email = :email`; // name given placeholder
        const usersSQL = `INSERT INTO usrs 
        SET username = :username, password = :password, fk_profile = :fk`;

        const profile = await db.query(profileSQL, { email: req.fields.email });
        console.log(profile);
        // user object is being created
        const user = await db.query(userSQL, { 
            password: req.fields.password,
            username: req.fields.username,
            fk: profile[0].insertId
        });
        
        res.send('You have now created a user account. congratulations! :-)');

} catch (error) {
    if(error.code === "ER_DUP_ENTRY") {
        return res.send('This user already exists');
    }
    res.send('error!');
}


}; // exports closing bracket











   /*
   db.query(`INSERT INTO profiles SET email = ?`, [req.fields.email], function(err, result) { // ? is a placeholder for a variable that we don't know yet
    // req.fields.name is pointing to input field in form and attribute called name
    if(err) {
        res.end();
        return;
    }  
    db.query(`INSERT INTO users SET username = ?, password = ?, fk_profile = ?`, 
    [req.fields.username, req.fields.password, result.insertId], function(err, result) {
        if(err) {
            console.log(err);
            res.end();
            return;
        }
        console.log(result);
        res.end();
        });
    });
    */
    `````````




