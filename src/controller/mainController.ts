import {Application,Request,Response,NextFunction}from "express";
import modelMain from "../model/modelMain"

// ADD item Controller

const addItem = async(req:Request,res:Response,next:NextFunction) =>{

    const newu = new modelMain({
        name:req.body.item
    })
    newu.save().then( (dataa)=>{
   
        res.status(200).json({"message":"Item added succesfully"})

    }).catch((err)=>{

        console.log(err)
        res.status(500).json({"message":"Server error"})
    })
}

// Delete item controller

const deleteItem = (req:Request,res:Response,next:NextFunction)=>{

    modelMain.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            console.log(err);
            res.status(500).json({"message":"Something went wrong"})
        }
        else{
            res.status(200).json({"message":"Item deleted succesfully"})
        }
    })

}

const updateOne = (req:Request,res:Response,next:NextFunction) =>{

    modelMain.updateOne({_id:req.params.id},{name:req.body.item},null,(err,result)=>{
        if(err){
            console.log(err);
            res.sendStatus(500).json({"message":"Something went wrong"})
        }
        else{
            res.status(200).json({"message":"Item updated succesfully"});
        }
    })

}

const deleteAll = (req:Request,res:Response,next:NextFunction)=>{

    modelMain.deleteMany({},{},(err)=>{
        if(err){
            console.log(err);
            res.status(500).json({"message":"Something went wrong"});
        }
        else{
            res.status(200).json({"message":"deleteAll succesfull"});
        }
    })

}

const getAll = (req:Request,res:Response,next:NextFunction) => {

    modelMain.find({},{},{},(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).json({"message":"Something went wrong"})
        }
        else{
            res.status(200).json(result);
        }
    })

}

export default  {
    addItem,
    deleteItem,
    updateOne,
    deleteAll,
    getAll
}