var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./model/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// Установка механизма представления handlebars
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });

//handlebars.handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

// handlebars.handlebars.registerHelper("isSelected", function(value, sel) {
//             return value === sel ? 'selected' : ''; 
//     }
//   );
app.use(require('express-session')
(
{
    resave: false,
    saveUninitialized: false,
    secret: "This is req.session.flash"
}
));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // let error_message = "Пользователь не найден!";  
  // render the error page
  res.status(err.status || 500);
  res.render('error', {message: err.message});
});

module.exports = app;