const mongoose =require('mongoose');;

const schema = mongoose.Schema({
    role_id:{type:mongoose.Schema.Types.ObjectId,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,required:true},
},{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});

class UserRoles extends mongoose.model{

}
userSchema.loadClass(UserRoles);
module.exports = mongoose.model('user_roles',schema);