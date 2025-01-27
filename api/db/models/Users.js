const mongoose =require('mongoose');;

const schema = mongoose.Schema({
    first_name: String,
    last_name:String,
    email: {type:String,required:true},
    password: {type:String,required:true},
    is_active: {type:Boolean,default:true},
    phone_number:String
},{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});

class Users extends mongoose.model{

}
userSchema.loadClass(Users);
module.exports = mongoose.model('Users',schema);