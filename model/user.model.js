const mongoose = require('mongoose')
const schema=mongoose.Schema;
//initialize thte schema
const userSchema = new schema({
    name: {
        type: String,
        required: [true, "Name is required field"]
    },
    age: {
        type: Number,
    },
    dob: {
        type: String,
        required: [true, "DOB is required"]
    },
    mobile: {
        type:String,
        unique:true
    }
})
//create a model using the schema called userSchema
const userModel=new mongoose.model('user_detail',userSchema)
//export this user model
module.exports=userModel