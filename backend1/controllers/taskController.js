const task=require('../models/task');

exports.createTask=async(req,res)=>{
    try{
        const newtask=await task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status||"pending",
            user:req.body.id,
        });
        res.status(201).json({message:"Task created successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
};