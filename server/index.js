const express=require('express');
const app=express();
const cors=require('cors');
const connectDB=require('./configs/db');
const { unserController } = require('./controllers/user.controller');
const { noticeController } = require('./controllers/notice.controller');

app.use(express.json());
app.use(cors());

app.use('/users',unserController);
app.use('/notice',noticeController);


const port=process.env.PORT || 8080;

app.listen(port,async()=>{
    try {
        await connectDB();
    } catch (error) {
        console.log('error',error.message);
    }
    console.log(`app is running at port ${port}`)
})