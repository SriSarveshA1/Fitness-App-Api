const db=require("../models/index");
const Prescription=db.Prescription;

exports.create=(req, res)=>{
    const data={
        doctorName:req.body.doctorName,
        description:req.body.description,
        UserId:req.body.UserId
    };
    Prescription.create(data).then((data)=>{
        res.status(201).send(data);
    }).catch((err)=>{
        res.status(500).send({message:err.message});
    })
}

exports.findAll=(req,res)=>{
    Prescription.findAll().then((datas)=>{
        res.status(200).send(datas);
    }).catch((err)=>{
        res.status(500).send({message:err.message});
    })
}

exports.update=(req, res)=>{
    const data={
        doctorName:req.body.doctorName,
        description:req.body.description,
        UserId:req.body.UserId
    };
    Prescription.update(data,{
        where: {id: req.params.id},
        returning: true
    }
    ).then(()=>{
        Prescription.findByPk(req.params.id).then((data)=>{
            res.status(200).send(data);
        })
    }).catch(err=>{
        res.status(500).send({message:err.message});
    })
}

exports.delete=(req, res)=>{
    Prescription.destroy({where: {id: req.params.id}}).then(()=>{
        res.status(200).send({message:"Data is deleted successfully"})
    }).catch((err)=>{
        res.status(500).send({message:err.message})
    })
}