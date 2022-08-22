const mongoose=require('mongoose');

const connectDB=()=>{
    return mongoose.connect(`mongodb+srv://priya:priya@cluster0.pyyptln.mongodb.net/crime?retryWrites=true&w=majority`)
}

module.exports=connectDB;