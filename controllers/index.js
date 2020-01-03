var user = require('../model/users');
var regist = require('../routes/registration');

exports.controller_post = function (req, res) {

  user.find_user_f(req.body.login)
    .then(function (obj) {
      if (obj.length == 1) {
        if (obj[0].validPassword(req.body.password)) {
          req.session.userName = req.body.login;
          res.render('home', { title: 'Express' })
        } //проверка пароля){}

        else
          res.render('error', { message: "Неверный логин или пароль" });
      }
      if (obj.length == 0) {
        res.render('error', { message: "Пользователь не найден." });  //ошибка
      }
      if (obj.length == 2) {
        res.render('error', { message: "Пользователь забудлирован." }); //ошибка
      }
      //console.log(obj); // 0 1 2  проверка массива! 
    })
    .catch(function (err) {
      console.log(err);
      //logger.log.error(err.message);
      //res.redirect(303, '/error?error=' + err.message);
    });
};

//создание пользователя
exports.user_registration = function (req, res) {
  user.user_registration_create(req.body.email, req.body.login, req.body.password)
    .then(function (user_N) {
      res.render('home', { title: 'Express' })
    })
    .catch(function (err) {
      console.log(err);
    });
};


exports.controller_authorization = function (req, res, next) {
  res.render('authorization', { layout: null });
};

exports.controller_registration = function (req, res, next) {
  res.render('registration', { layout: null });
};

