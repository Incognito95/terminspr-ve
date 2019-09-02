const { upload } = require('../controllers/upload.controller'); // can call multiple functions
const db = require('../config/sql'); // connection to database
const fs = require('fs'); // filesync

module.exports = function (app) {
    app.get('/upload', upload);

    // recieve form
    app.post('/upload', (req, res, next) => {
    // regex
    if(!/image/.test(req.files.image.type)) {
        return res.send('The uploaded file is not an image');
    }
    try {
        const uploadDir = './public/images/';
        // reading file into currently location
        const data = fs.readFileSync(req.files.image.path);
        const newFileName = Date.now() + '_' + req.files.image.name;
        // write the file into the right location
        fs.writeFileSync(uploadDir + newFileName, data);
        res.redirect('/images/' + newFileName)
    } catch (error) {
        return next(error);
    }

})};