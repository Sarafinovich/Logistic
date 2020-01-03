
var mongoose = require('mongoose');
var Customers = require('../model/customers');

var customersSchema = new mongoose.Schema(
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
    });

 var Customers = mongoose.model('customers', customersSchema); //var

 exports.find_customers = function(){
    return new Promise(function (resolve, reject) {  //
        Customers.find({},function(err,customers){
            if (err){reject(err);}
            else {resolve (customers);
        }
        });
    });
};  
  
exports.create_customers = function(Name,Type, UNP, Legal_address, Actual_address, Tel, Person) {
    
    var customer_N = new Customers();
    customer_N.Name = Name; 
    customer_N.Type = Type;
    customer_N.UNP = UNP;
    customer_N.Legal_address = Legal_address;
    customer_N.Actual_address = Actual_address;
    customer_N.Tel = Tel; 
    customer_N.Person = Person;

    return new Promise(function (resolve, reject){
        customer_N.save(function(err){
        if (err) { 
            reject(err);
        }
        else { 
            resolve(customer_N); //null
         }});
    }
    );
};
        



