var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required:  true
        },
        name: {
            type: String, 
            required: true
        },
        hash: String,
        salt: String,
        password: String
    }
    );

var User = mongoose.model('users', usersSchema);

//заглушка
exports.check_user = function(login, password) {
   
    return true;
    //if (req.session.userName === "undefined" || req.session.userName == null) { 
      //  res.redirect(303, '/registration'); }
   // else return next();   
  };
  
  exports.find_user = function(){
    return new Promise(function (resolve, reject) {
        user.find({}, function (err, cars) {
            if (err){ reject(err); }
            else { resolve(cars); }
        }
        ).sort({"login": 1});
    });
};

 //проверка пользователя
 exports.find_user_f = function(login,password){
    return new Promise(function (resolve, reject) {
       let params =  {
                  "email": login,//{$gte: params.startdate.toISOString(), $lt: params.finishdate.toISOString()}, //логин
                  "password": password//{$in: [2]} //пароль
              };
        User.find(params, function (err, obj) {
        if (err){ 
            reject(err); 
        }
        else { 
            resolve(obj); 
        }
        }
        )
    });
 };

 exports.user_registration = function(email ,login,password){
    return new Promise(function (resolve, reject) {
        var user = new User();//
        user.email = "dima@gmail.com";
        user.name = "dima";
        user.password = "123";
        user.save(function(err){
            if (err) { 
                reject(err);
            }
            else { 
                resolve(null);
             }
        }
        );
    });
 };

//console.log(Users);

var user = new User();//
user.email = "dima@gmail.com";
user.name = "dima";
user.password = "123";
user.save(function(err){
    if (err) { 
          console.log('error by save user: ' + err.message); }
    else { 
        console.log('user ' + user.email + ' saved')
     }
}
);


    
