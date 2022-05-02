module.exports=(sequelize,Sequelize)=>{

    const Appointment =sequelize.define("Appointments",{
       id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
       },
       patientName:{
           type:Sequelize.STRING,
           allowNull:false
       },
       doctorName:{
           type:Sequelize.STRING,
           allowNull:false
       },
       hospitalVisited:{
           type:Sequelize.STRING,
           allowNull:false
       },
       timing:{
           type:Sequelize.STRING,
           allowNull:false
       }

    });
    return Appointment;
}