const { admin } = require('../controllers/admin.controller'); // can call multiple functions

module.exports = function (app) {
    app.get('/admin', admin);
}