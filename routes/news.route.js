const { showNews } = require('../controllers/news.controller'); // can call multiple functions


module.exports = function (app) {
    app.get('/news', showNews);
}