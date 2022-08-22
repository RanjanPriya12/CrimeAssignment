const express=require('express');
const router=express.Router();
const Notice=require('../models/notice.model');



router.post("/", body('notice').trim().not().isEmpty()
.withMessage("notice not should be empty")
.isLength({min:10,max:100})
.withMessage("notice should be min of 10 and max of 100"),

   async(req,res)=>{
  // to catch the erorrs in validation
  const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
   const userNotice=await Notice.create(req.body)
   return res.status(201).send(userNotice)
});

// crud to get all the notices
router.get('/userPosts',async(req,res)=>{
    const userNotice=await Notice.find().lean().exec()
    return res.status(201).send(userNotice)
});

module.exports=router;