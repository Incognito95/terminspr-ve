const db = require('../config/sql');

module.exports = async function (req, res, next) {
    try {
        const rolesSQL = `
        SELECT name, admin FROM roles
        `;
        
        const [rows] = await db.query(userSQL, {
            id: req.session.user
        });
        if(rows[0].level >= 50) {
            return next();
        }
        res.redirect('/');
        return;

    } catch (error) {
        console.log(error);
        res.redirect('/');
        return;
    }
};