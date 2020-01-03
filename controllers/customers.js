
const db_customers = require('../model/customers');

exports.find_customers =  function(req, res){
  db_customers.find_customers() 
    .then(function (arr) {
        res.render('customers', {ddd: arr});
    })
    .catch(function (err) {
        logger.log.error(err.message);
        res.redirect(303, '/error?error=' + err.message);
    });
}

exports.add_customers =  function(req, res){
      res.render('create_customers', {});
   
}

exports.save_customers =  function(req, res){
  db_customers.create_customers(req.body.Name, req.body.Type, req.body.UNP, req.body.Legal_address, req.body.Actual_address, req.body.Tel, req.body.Person)
   .then(function (customer_N) {
    exports.find_customers(req,res);
  })
  .catch(function (err) {
    console.log(err);
  });
}
