require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(cookieParser('keyboar cat'));

// middleware
app.use(express.static(__dirname + '/public'));

module.exports = function(app) {
    fs.reddirSync(__dirname, { withFileTypes: true}).forEach(file => {
        if(file.name !== path.basename(__filename)) {
            require(path.join(__dirname, file.name))(app);
        }
    })
}

require('./config/parser')(app);
require('./config/locals')(app);
require('./config/views')(app);

// get routes
require('./routes/home.route')(app);
require('./routes/news.route')(app);
require('./routes/furniture.route')(app);
require('./routes/contact.route')(app);


// connecting to the server
require('./server/server')(app);