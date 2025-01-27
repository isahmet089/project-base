const mongoose =require('mongoose');;

const schema = mongoose.Schema({
   is_active:{type:Boolean,default:true},
   created_by:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
   }
},{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});

class Categories extends mongoose.model{

}
schema.loadClass(Categories);
module.exports = mongoose.model('categories',schema);