
var mongoose = require('mongoose');
var Providers = require('../model/providers');

var providersSchema = new mongoose.Schema(
    {
        Name : {
            type: String,
            minlength: 10,
            maxlength: 300},

         Type:{
            type: String,
            required: true    
        },

        UNP :{
            type: String,
            required: true,
           minlength: 7,
           maxlength: 20    
        },

        Legal_address: {
            type: String,
            required:  true,
            min: 500
        },

        Actual_address: {
            type: String
        }, 
        
        Tel: {
            type: Number
        }, 
        Person: {
            type: String
        },
        Payment: {
            type: String
        }

    });

 var Providers = mongoose.model('providers', providersSchema); //var

 exports.find_providers = function(){
    return new Promise(function (resolve, reject) {  //
        Providers.find({},function(err,providers){
            if (err){reject(err);}
            else {resolve (providers);
        }
        });
    });
};  
  
exports.create_providers = function(Name,Type, UNP, Legal_address, Actual_address, Tel, Person, Payment) {
    
    var providers_N = new Providers();
    providers_N.Name = Name; 
    providers_N.Type = Type;
    providers_N.UNP = UNP;
    providers_N.Legal_address = Legal_address;
    providers_N.Actual_address = Actual_address;
    providers_N.Tel = Tel; 
    providers_N.Person = Person;
    providers_N.Payment = Payment;

    return new Promise(function (resolve, reject){
        providers_N.save(function(err){
        if (err) { 
            reject(err);
        }
        else { 
            resolve(providers_N); //null
         }});
    }
    );
};
        



