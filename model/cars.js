
var mongoose = require('mongoose');
var Car = require('../model/cars');

var carsSchema = new mongoose.Schema(
    {
        FIO : {
            type: String,
            minlength: 10,
            maxlength: 300},

        Model:{
            type: String,
            required: true    
        },

        Chassis :{
            type: String,
            required: true,
           minlength: 10,
           maxlength: 20    
        },

        Year: {
            type: Number,
            required:  true,
            min: 2010
        },

        Direction_transportation: {
            type: String
        }});

 var Car = mongoose.model('cars', carsSchema); //var

 exports.find_car = function(){
    return new Promise(function (resolve, reject) {  //
        Car.find({},function(err,cars){
            if (err){reject(err);}
            else {resolve (cars);
        }
        });
    });
};  
  
exports.find_car_id = function(_id){
    return new Promise(function (resolve, reject) {  //
        Car.find({"_id":_id},function(err,car){
            if (err){reject(err);}
            else {resolve (car);
        }
        });
    });
};  

exports.create_car = function(FIO, Model, Chassis, Year,Direction_transportation, Edit) {
    
    var car_N = new Car();
    car_N.FIO = FIO; 
    car_N.Model = Model;
    car_N.Chassis = Chassis;
    car_N.Year = Year;
    car_N.Direction_transportation = Direction_transportation;
    car_N.Edit = Edit;
    
    return new Promise(function (resolve, reject){
        car_N.save(function(err){
        if (err) { 
            reject(err);
        }
        else { 
            resolve(car_N); //null
         }});
    }
    );
};
        
//  var car = new Car();
// car.FIO = "Иванов Иван Петрович";
// car.Model = "H026210 MAN";
// car.Chassis = "WMA06XZZ89W125589";
// car.Year = 2018;
// car.Direction_transportation = "Казахстан";
// car.save(function(err){
//     if (err){
//         console.log('erro by save car:' + err.message);
//     }
//     else{
//         console.log('car ' + car.Car_model + ' saved')
//     }
// });


