const db=require("../models/index");
const Symptoms=db.Symptoms;
exports.create=(req,res) => {
    const data={
        description:req.body.description,
        UserId:req.body.UserId
    };
    Symptoms.create(data).then((data)=>{
        res.status(201).send(data);
    }).catch((err)=>{ 
        res.status(500).send({message: err.message});
    })
}
exports.findAll=(req,res) => {
    Symptoms.findAll().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{ 
        res.status(500).send({message: err.message});
    })
}
exports.update=(req,res) => {
    const data={
        description:req.body.description,
        UserId:req.body.UserId
    };
    Symptoms.update(
        data,{
            where:{
                id:req.params.id
            },
            returning:true
        }
        ).then(()=>{
        Symptoms.findByPk(req.params.id).then((data)=>{
            res.status(200).send(data);
        }).catch((err)=>{
            res.status(500).send({message: err.message});
        })
    })
}
exports.delete=(req,res)=>{
    Symptoms.destroy({where: {id: req.params.id}}).then(()=>{
        res.status(200).send({message:"Data is deleted"});
    }).catch((err)=>{
        res.status(500).send({message:"Error deleting data"});  
    })
}