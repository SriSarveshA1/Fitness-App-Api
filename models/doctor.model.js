module.exports=(sequelize,Sequelize)=>{

    const Doctor=sequelize.define("Doctors",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        age:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        specialization:{
            type:Sequelize.STRING,
            allowNull:false
        },
        yearsOfService:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
        
    });
  return Doctor;

}