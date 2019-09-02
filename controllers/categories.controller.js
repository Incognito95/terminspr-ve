const db = require('../config/sql');

// create
exports.showCategories = function (req, res, next) {
db.query(`SELECT id, name FROM categories`,(err, results) => {
    if(err) {
        throw err;
    } else {
        console.table(results);
        res.render('categories', {results})

        }
    })

}

exports.showLaptops = function(req, res, next) {
  db.query(`SELECT name, id FROM products WHERE id IN (2,4)`, (err, results) => {
    if(err) {
      throw err;
    } else {
      console.table(results);
      res.render('laptops', {results})
    }
  })
}

exports.showPhones = function(req, res, next) {
  db.query(`SELECT name, id FROM products WHERE id IN (5,6,14)`, (err, results) => {
    if(err) {
      throw err;
    } else {
      console.table(results);
      res.render('phones', {results})
    }
  })
}

exports.showEarphones = function(req, res, next) {
  db.query(`SELECT name, id FROM products WHERE id IN (3)`, (err, results) => {
    if(err) {
      throw err;
    } else {
      console.table(results);
      res.render('earphones', {results})
    }
  })
}

exports.showPencils = function(req, res, next) {
  db.query(`SELECT name, id FROM products WHERE id IN (11)`, (err, results) => {
    if(err) {
      throw err;
    } else {
      console.table(results);
      res.render('pencils', {results})
    }
  })
}

exports.showTablets = function(req, res, next) {
  db.query(`SELECT name, id FROM products WHERE id IN (7,8,9,10)`, (err, results) => {
    if(err) {
      throw err;
    } else {
      console.table(results);
      res.render('tablets', {results})
    }
  })
}

exports.showRemotes = function(req, res, next) {
  db.query(`SELECT name, id FROM products WHERE id IN (13)`, (err, results) => {
    if(err) {
      throw err;
    } else {
      console.table(results);
      res.render('remotes', {results})
    }
  })
}