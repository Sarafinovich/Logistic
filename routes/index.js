var express = require('express');
var router = express.Router();


var contr = require('../controllers/index.js');
var contr_a = require('../controllers/cars');
var customer = require('../controllers/customers');
var provider = require('../controllers/providers');
var services = require('../controllers/services');


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

router.get('/registration', contr.controller_registration); 
router.get('/authorization', contr.controller_authorization);
router.get('/add_auto',IsAuthorize, contr_a.add_car); 
router.get('/add_customers', IsAuthorize, customer.add_customers);
router.get('/add_providers', IsAuthorize, provider.add_providers);
router.get('/add_services', IsAuthorize, services.add_services);


router.post('/user_authorization', contr.controller_post); //перенесено //chekc_registr
router.post('/user_registation', contr.user_registration); 
router.post('/save_car', contr_a.save_car); 
router.post('/save_customers', customer.save_customers);
router.post('/save_providers', provider.save_providers);
router.post('/delete_car', contr_a.delete_car);

router.post('/delete_services', services.delete_services); 
router.post('/save_services', services.save_services); 


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

// router.get("/", function (req, res) {
//   res.send('home', { title: 'Express' });
// });


// router.get("/", function(req,res){
//   res.send('create_auto');
// })

module.exports = router;
