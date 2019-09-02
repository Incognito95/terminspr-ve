module.exports = function (req, res, next) {
    if (req.session.user === parseInt(req.params.id)) { // converts user into number
        return next();
    }
    res.redirect('/profile/' + req.session.user);
    return;
}