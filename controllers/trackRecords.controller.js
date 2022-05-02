const db=require("../models/index");
const TrackRecord=db.TrackRecord;

exports.create=(req,res)=>{
    const tracKRecord={
        userName:req.body.userName,
    
    HospitalVisited:req.body.HospitalVisited,
    doctorServed:req.body.doctorServed,
    visitPurpose:req.body.visitPurpose,
    height:req.body.height,
    weight:req.body.weight
    }
    TrackRecord.create(tracKRecord).then((data)=>{
        res.status(201).send(data);
    }).catch((err)=>{
        res.status(500).send({message: err.message});
    })
}

exports.findAll=(req, res) => {
    TrackRecord.findAll().then((datas)=>{
        res.status(200).send(datas);
    }).catch((err)=>{
        res.status(500).send({message: err.message});
    })
}

exports.update=(req, res) => {
    const tracKRecord={
    userName:req.body.userName, 
    HospitalVisited:req.body.HospitalVisited,
    doctorServed:req.body.doctorServed,
    visitPurpose:req.body.visitPurpose,
    height:req.body.height,
    weight:req.body.weight
    }

    TrackRecord.update(tracKRecord,{
        where:{
            id:req.params.id
        },
        returning:true
    }).then(()=>{
        TrackRecord.findOne({where:{id:req.params.id}}).then((data)=>{res.status(200).send(data)});
    }).catch((err)=>{
        res.status(500).send({message:err.message});
    })
}
exports.delete=(req, res) => {
    TrackRecord.destroy({where:{id:req.params.id}}).then(()=>{
       res.status(200).send({message:"Deleted Successfully"});
    }).catch((err)=>{
        res.status(500).send({message:err.message});
    })
}