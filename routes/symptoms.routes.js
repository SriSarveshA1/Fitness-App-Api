const symptomsController= require('../controllers/symptoms.controller');
const {authJwt}= require('../midllewares/index');
module.exports=(app)=>{
    app.post("/fits/v1/symptoms",[authJwt.verifyToken],symptomsController.create);
    app.get('/fits/v1/symptoms',[authJwt.verifyToken],symptomsController.findAll);
    app.put('/fits/v1/symptoms/:id',[authJwt.verifyToken],symptomsController.update);
    app.delete('/fits/v1/symptoms/:id',[authJwt.verifyToken],symptomsController.delete);
}