const { showCategories, showLaptops, showPhones, showEarphones, showPencils, showTablets, showRemotes } = require('../controllers/categories.controller'); // can call multiple functions
const isAuthorized = require('../middleware/is-authenticated');
const isEmployee = require('../middleware/is-employee');

module.exports = function (app) {
    app.get('/admin/categories', showCategories);
    app.get('/admin/laptops', showLaptops)
    app.get('/admin/phones', showPhones)
    app.get('/admin/earphones', showEarphones)
    app.get('/admin/pencils', showPencils)
    app.get('/admin/tablets', showTablets)
    app.get('/admin/remotes', showRemotes)
};