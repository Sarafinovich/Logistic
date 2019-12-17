var user = require('../model/users');

exports.controller_post = function(req, res) {
   //  console.log(req.body.login, req.body.password); // {}, undefined
   //  console.log("POST polychen");
   //  if (user.check_user(req.body.login, req.body.password) === true) {
   //    req.session.userName = req.body.login;
   //    res.redirect(303, '/'); 
   //   }
   //  else {
   //     res.redirect(303, '/registration');
   //  }   

     user.find_user_f(req.body.login, req.body.password)
      .then(function (obj) {
        if (obj.length == 1) {
         res.render('home', { title: 'Express' });
        } 
        if (obj.length == 0){
         res.render('error', {message: "Пользователь не найден."});  //ошибка
        }   
        if (obj.length == 2){
         res.render('error', {message: "Пользователь забудлирован."}); //ошибка
        }     
         //console.log(obj); // 0 1 2  проверка массива! 
      })
      .catch(function (err) {
        console.log(err);
         //logger.log.error(err.message);
        //res.redirect(303, '/error?error=' + err.message);
      });
    };

    exports.controller_registration = function(req, res, next) {
 //   router.get('/registration', function (req, res, next) {
        res.render('authorization', { layout: null });
      };
           /*User.find({}, function (err, cars) {
                 if (err){ reject(err); }
                 else { resolve(cars); }
             }
             ).sort({"login": 1});
         });
     };*/

