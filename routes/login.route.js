const { get, post, logout } = require('../controllers/login.controller'); // can call multiple functions

module.exports = function (app) {
    app.get('/login', get);
    app.post('/login', post);
    app.get('/logout', logout)
}