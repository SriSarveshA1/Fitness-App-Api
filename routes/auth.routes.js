const authController = require('../controllers/auth.controller');
const {  verifySignup,verifySignin}= require('../midllewares/index');
module.exports=(app)=>{
    app.post("/fits/v1/signup",[verifySignup.checkDuplicateUser_email_or_password],authController.signup);
    app.post("/fits/v1/signin",[verifySignin.Check_empty_mail_password],authController.signin);
}