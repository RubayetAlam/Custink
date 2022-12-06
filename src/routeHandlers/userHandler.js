const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
// const dotenv=require('dotenv');
const express=require('express');
const router=express.Router();
const userSchema=require('../schemas/userSchema');
const User=new mongoose.model("User",userSchema);

//SignUp
router.post('/signup',async(req,res)=>{
    try{
    const hashedPassword=await bcrypt.hash(req.body.password,10);
    const newUser=new User({
        name:req.body.name,
        userName: req.body.userName,
        password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
    message: "sign-up  is successful...",
})
}catch{
    res.status(500).json({
        message: "sign-up failed!",
    })
}

});
//LogIn
router.post('/signin',async(req,res)=>{
    try{
    const user= await User.find({userName:req.body.userName});

    if(user && user.lenght>0){
        const isValidPassword=await bcrypt.compare(req.body.password, user[0].password);

        if(isValidPassword){
            //generate web token
            const token=jwt.sign({
                userName:user[0].userName,
                userId: user[0]._id,
            },process.env.JWT_SECRET,{
                expiresIn:'1h'
            });

            res.status(200).json({
                "access_token":token,
                "message":"Login Successfull!"
            })

        }else{
            res.status(401).json({
                "error": "Authentication failed!",
            })
        }
    }else{
        res.status(401).json({
            "error": "Authentication failed!",
        })
    }
}catch{
    res.status(401).json({
        "error": "Authentication failed!",
    })
}
});

module.exports=router;
