var mongoose = require('mongoose');
var users = require('./users');
var Schema = mongoose.Schema;

var addressSchema= new Schema({
  userid:{type:Schema.Types.ObjectId,ref:'users',required:true},
  addresstype:{type:String,default:"Residence"},
  city:{type:String},
  state:{type:String},
  country:{type:String},
  pincode:{type:Number,required:true}
},{collection:'address'});
 
AddressModel = mongoose.model('Address',addressSchema);

module.exports={AddressModel};