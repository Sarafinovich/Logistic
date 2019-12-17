var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var user = require('../model/users.js');
var contr = require('../controllers/index.js');

//const mongo = require('../model/db');

function IsAuthorize(req, res, next) {
  if (req.session.userName === "undefined" || req.session.userName == null) {
    res.redirect(303, '/authorization');
  }
  else return next();
}

/* GET home page. */
router.get('/', IsAuthorize, function (req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/authorization', contr.controller_registration); 
/*router.get('/registration', function (req, res, next) {
  res.render('registration', { layout: null });
});*/

router.post('/user_registation', contr.controller_post); //перенесено //chekc_registr

/*router.post('/user_registation', function (req, res, ) {
  console.log(req.body.login, req.body.password); // {}, undefined
  console.log("POST polychen");
  
  if (user.check_user(req.body.login, req.body.password) === true) {
    req.session.userName = req.body.login;
    res.redirect(303, '/'); 
   }
  else {
     res.redirect(303, '/registration');
  }   
  }); */

router.get("/", function (req, res) {
  res.send('home', { title: 'Express' });
});

module.exports = router;
