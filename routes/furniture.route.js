const { showFurniture } = require('../controllers/furniture.controller'); // can call multiple functions


module.exports = function (app) {
    app.get('/furniture', showFurniture);
}