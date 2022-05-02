const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const db=require("../models/index");
const User=db.User;
const secretKey=require("../configs/secret.config");



exports.signup=(req,res) => {
    
        const userInfo={
          userName:req.body.userName,
          email:req.body.email,
          password:bcrypt.hashSync(req.body.password,8),
          userType:req.body.userType
        }
        User.create(userInfo).then((user) => {
            res.status(201).send("User created successfully");
        })
    
}

exports.signin=(req,res)=>{
    User.findOne(
               {
                   where: {userName: req.body.userName}
               }
           ).then((user) => {
               if(!user)
               { 
                   return res.status(404).send("Username does not exist");
               }
          //After the user name exists 1.password match,2.Token generation and return
               var bool=bcrypt.compareSync(req.body.password,user.password);
               if(!bool)
               {
                return res.status(404).send("password wrond");
               }
               var token=jwt.sign({id:user.id},secretKey.secret,{expiresIn:300000000});
               var obk={
                   id:user.id,
                   userName:user.userName,
                   token:token
               }
               return res.status(200).send(obk);
    });
}