const { home } = require('../controllers/home.controller'); // can call multiple functions

module.exports = function (app) {
    app.get('/', home);
}