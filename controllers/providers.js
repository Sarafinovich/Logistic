
const db_providers = require('../model/providers');

exports.find_providers =  function(req, res){
  db_providers.find_providers() 
    .then(function (arr) {
        res.render('providers', {ddd: arr});
    })
    .catch(function (err) {
        logger.log.error(err.message);
        res.redirect(303, '/error?error=' + err.message);
    });
}

exports.add_providers =  function(req, res){
      res.render('create_providers', {});
   
}

exports.save_providers =  function(req, res){
  db_providers.create_providers(req.body.Name, req.body.Type, req.body.UNP, req.body.Legal_address, req.body.Actual_address, req.body.Tel, req.body.Person, req.body.Payment)
   .then(function (provider_N) {
    exports.find_providers(req,res);
  })
  .catch(function (err) {
    console.log(err);
  });
}
