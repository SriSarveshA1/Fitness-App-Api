const config=require('../configs/secret.config')
const jwt=require('jsonwebtoken');

//so here we are going to take the token from the request header and we use jwtwebtoken to verify the token(we do expiry check and whether the token is correct) we also need secret data that we used to do this token 
const verifyToken=(req,res,next) => {
           //we get token from the headers 
          var token=req.headers['x-access-token'];
          if(!token)
          {
              //token is not passed
              return res.status(403).send({message:"There is no token provided to verify"});
          }
        jwt.verify(token,config.secret,(err,decodedKey) => {
            if(err)
            {
              //if any error occurs we try to send the message as invalid token when we try to validate
              res.status(401).send({message:"Invalid token"});
              return;
            }
            //decodedKey has info of the user(particular infor using which we created token)
            req.userId=decodedKey.id;
            next();
        });
    }


module.exports={
       verifyToken
} 