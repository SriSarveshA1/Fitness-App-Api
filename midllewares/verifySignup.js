const db=require('../models/index');

//const Role=db.Role;
const User=db.User;


const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

const validateuserName=(userName) => {
    return userName.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/);
}
const validatePassword=(password)=>{
    return password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/);
}
const checkDuplicateUser_email_or_password=(req, res, next) => {
   
   //var Duplicate_userName=false;
    //so we need to check whether the user with provided userName already exits 
    if(!req.body.userName)
    {
        return res.status(400).send({message: "Enter the valid userName"})
    }
    else{   
        /*  
        if(!validateuserName(req.body.userName))
        {
            return res.status(400).send({message: "Enter the valid userName 1.Only contains alphanumeric characters, underscore and dot.2.Underscore and dot can't be at the end or start of a userName (e.g _userName / userName_ / .userName / userName.).3.Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).4.Number of characters must be between 8 to 20."})
        }
        */
    }
    if(!req.body.password) {
        return res.status(400).send({message: "Password is not provided"});
    }
    else{
        if(!validatePassword(req.body.password))
        {
            return res.status(400).send({message: "password is not valid:: Minimum eight characters, at least one letter and one number"});
        }
    }
    if(!req.body.email)
    {
        return res.status(400).send({message: "ENter the valid email"})
    }
    else{
      if(!validateEmail(req.body.email))
      {
        return res.status(400).send({message: "Email is not formatted"});
      }
    }
    User.findOne({where:{userName: req.body.userName}}).then((user) => {
       
        if(user)
        {
        //console.log("gopal 1");
         //Duplicate_userName=true;
         res.status(400).send({message:"The user with given userName is already present"});
         return;
        }
        else{        
            User.findOne({
                where: {
                  email: req.body.email,
                },
              }).then((user) => {
                if (user) {
                  res.status(400).send({
                    message: "Failed!email already exists",
                  });
                  return;
                }
                else{
                   next();
                }
              });
            
        
        }
    }).catch((err) => { return res.status(400).send({message:"error while checking duplicate userName"})});
   
}
module.exports ={
    checkDuplicateUser_email_or_password
}



