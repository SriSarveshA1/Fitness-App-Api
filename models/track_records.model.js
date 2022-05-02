module.exports=(sequelize,Sequelize)=>{

    const TrackRecords=sequelize.define("TrackRecords",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        HospitalVisited:{
            type:Sequelize.STRING,
            allowNull:false
        },
        doctorServed:{
            type:Sequelize.STRING,
            allowNull:false
        },
        visitPurpose:{
            type:Sequelize.STRING,
            allowNull:false
        },
        height:{
            type:Sequelize.INTEGER
        },
        weight:{
            type:Sequelize.INTEGER
        }
    });
return TrackRecords;

}