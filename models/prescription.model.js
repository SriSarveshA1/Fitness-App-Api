module.exports=(sequelize,Sequelize)=>{

const Prescription=sequelize.define("Prescription",{
          id:{
              type:Sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true
          },
         
          doctorName:{ //So in a hospital there may be many prescriptions sheets with various UserId's and all have doctor name in it.
              type:Sequelize.STRING,
              allowNull:false
          },
          
          description:{
              type:Sequelize.STRING,
              allowNull:false
          }
         //So we will set up a relationship with prescription and UserId in such a way that users have many prescriptions (but a single prescription belongs to a single user)

       
       })

return Prescription;
}