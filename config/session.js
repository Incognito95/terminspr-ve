const session = require('express-session');
const flash = require('express-flash');

// send messages 
// from one route to another route in the back end
app.use(flash());

module.exports = function(app) {
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));
};
