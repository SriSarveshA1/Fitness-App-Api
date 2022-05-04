const express = require('express');
const app = express();
const serverConfig = require('./configs/server.config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db=require('./models/index');
db.sequelize.sync({force:true}).then(()=>{
        console.log("table/schema is created");
        //inside this we can write any functions that perform default creation of some values to the models we created so as we pass in json the values of the rows we need to create we can create array and do model.bulkcreate() also
    }).catch(err => console.log(err));


require("./routes/auth.routes")(app);
require("./routes/tracRecords.routes")(app);
require("./routes/symptoms.routes")(app);
const PORT=serverConfig.PORT||8000;
app.listen(PORT,()=>{
    console.log("Server listening on port "+PORT);
})