const express=require('express');
const router=express.Router();
const User=require('../models/user.model');

router.post('/',body('username').trim().not().isEmpty().withMessage("username should not be empty")
.isLength({min:8,max:20})
.withMessage("length should be more than 8 cahracters and max 20")
.custom((value)=>{
 const checkuser=/([a-z].*[0-9])|([0-9].*[a-z])/
 if(!value.match(checkuser)){
    throw new Error("user name must contain  alphanumeric")
 }
 return true
}),
async(req,res)=>{
//to check catch the erorrs
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}

    const crime=await User.create(req.body)
    return res.status(201).send(crime)
});

module.exports=router;