const prescriptionController=require("../controllers/prescription.controller");
const {authJwt}= require('../midllewares/index');
module.exports=(app)=>{

    app.post("/fits/v1/prescription",[authJwt.verifyToken],prescriptionController.create);
    app.get("/fits/v1/prescription",[authJwt.verifyToken],prescriptionController.findAll);
    app.put("/fits/v1/prescription/:id",[authJwt.verifyToken],prescriptionController.update);
    app.delete("/fits/v1/prescription/:id",[authJwt.verifyToken],prescriptionController.delete);
}