module.exports=(sequelize,Sequelize)=>{

const Prescription=sequelize.define("Prescription",{
          id:{
              type:Sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true
          },
         
          doctorName:{
              type:Sequelize.STRING,
              allowNull:false
          },
          
          description:{
              type:Sequelize.STRING,
              allowNull:false
          }
 
       
       })

return Prescription;
}