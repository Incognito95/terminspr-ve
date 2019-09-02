const { contact } = require('../controllers/contact.controller'); // can call multiple functions

module.exports = function (app) {
    app.get('/contact', contact);
}