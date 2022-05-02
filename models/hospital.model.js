module.exports=(sequelize,Sequelize)=>{

    const Hospital=sequelize.define("Hospitals",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        location:{
            type:Sequelize.STRING,
            allowNull:false
        },
        specialization:{
            type:Sequelize.STRING,
            allowNull:false
        }

    });
    return Hospital;

}