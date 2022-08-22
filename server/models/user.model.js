const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
});

const User=new mongoose.model('user',userSchema);

module.exports=User;