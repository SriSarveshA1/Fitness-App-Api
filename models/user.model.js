module.exports=(sequelize,Sequelize)=>{

    const User=sequelize.define("Users",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
       
        userType:{
            type:Sequelize.STRING,//So here we are going to give values like Patient or Doctor 
            allowNull:false
        }

    });
    return User;

}