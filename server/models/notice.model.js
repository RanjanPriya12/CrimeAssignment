const mongoose=require('mongoose');

const noticeSchema=new mongoose.Schema({
    text:{type:String,required:true},
    createdAt:{type:Date(), default:new Date()},
    userId:{
        type:mongoose.Schema.Types.ObjectId,required:true
    }
},
{
    timestamps:true,
    versionKey:false
});

const Notice= new mongoose.model('comment',noticeSchema);

module.exports=Notice;