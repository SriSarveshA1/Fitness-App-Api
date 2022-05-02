module.exports=(sequelize,Sequelize)=>{
    const Symptoms=sequelize.define("Symptoms",{
          id:{
              type:Sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true
          },
         
          description:{
              type:Sequelize.STRING,
              allowNull:false
          }



    });

return Symptoms;

}