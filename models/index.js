const Sequelize=require('sequelize');
const config=require('../configs/db.config');	

//db connection establishment
const sequelize=new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
    pool:{
        max:config.pool.max,
        min:config.pool.min,
        acquire:config.pool.acquire,
        idle:config.pool.idle
    }
});

const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.Appointment=require("./appointments.model")(sequelize,Sequelize);
db.User=require("./user.model")(sequelize,Sequelize);
db.TrackRecord=require("./track_records.model")(sequelize,Sequelize);
db.Symptoms=require("./symptoms.model")(sequelize,Sequelize);
db.Prescription=require("./prescription.model")(sequelize,Sequelize);
db.Hospital=require("./hospital.model")(sequelize,Sequelize);
db.Doctor=require("./doctor.model")(sequelize,Sequelize);

//Order for the data to be entered into DB
/*
1.User
2.Prescription or 2.Symptoms
*/
//There are many users(There can be both patient and doctor) So there are many users with many prescriptions but one prescription belongs to one user
db.User.hasMany(db.Prescription);

//There are many users(There can be both patient and doctor) So there are many users with many symptoms but one symptom belongs to one user
db.User.hasMany(db.Symptoms);





module.exports=db;