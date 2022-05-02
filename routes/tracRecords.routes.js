
const trackRecordsController = require('../controllers/trackRecords.controller');
const {authJwt}= require('../midllewares/index');
module.exports=(app)=>{
    app.post("/fits/v1/logs",[authJwt.verifyToken],trackRecordsController.create);
    app.get("/fits/v1/logs",[authJwt.verifyToken],trackRecordsController.findAll);
    app.put("/fits/v1/logs/:id",[authJwt.verifyToken],trackRecordsController.update);
    app.delete("/fits/v1/logs/:id",[authJwt.verifyToken],trackRecordsController.delete);
}