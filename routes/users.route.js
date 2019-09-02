const { showUsers, updateUser, showUser} = require('../controllers/users.controller'); // can call multiple functions
const db = require('../config/sql');


module.exports = function (app) {
    app.get('/admin/users', showUsers);
    app.get('/admin/edituser/:id', showUser)
    app.post('/admin/edituser/:id', updateUser);
}