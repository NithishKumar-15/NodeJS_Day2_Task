import Express  from "express";

//Importing rooms data array
import {RoomsData} from "./Data.js";

const roomsRouter=Express.Router();


//API to create a record in Rooms Data
roomsRouter.post("/",(req,res)=>{
    const data={
        RoomId:Date.now(),
        ...req.body,
        Booked:false
    }
    try{
        RoomsData.push(data);
        res.send({message:"Rooms data added successfully",data:data})
    }catch(e){
        res.status(500).send({message:"Internal Server Error"+e});
    }
})

//API to update the record if the room is booked by customer
roomsRouter.put('/:RoomId',(req,res)=>{
    const updateData=req.body;
    const roomId=req.params.RoomId;
    try{
        const index=RoomsData.findIndex((rooms)=>rooms.RoomId==roomId);
        const oldData=RoomsData.find((rooms)=>rooms.RoomId==roomId);
        if(oldData){
            RoomsData[index]={
                ...oldData,
                Booked:true,
                ...updateData
            }
        }
        res.send({message:"Data updated successfully",...RoomsData[index]});
    }catch(e){
        res.status(500).send({message:"Internal server error"+e});
    }
})

//API to see all the documents in rooms array
roomsRouter.get('/',(req,res)=>{
    try{
        res.send({RoomsData});
    }catch(e){
        res.status(500).send({message:"Internal Server error"});
    }
})


//List all rooms with booked data API
roomsRouter.get('/RoomsBooked',(req,res)=>{
    try{
    const bookedData=RoomsData.filter((val)=>{if(val.Booked){
        return val;
    }});
    res.send({message:"Booked data are",bookedData});
    }catch(e){
        res.status(500).send({message:"Internal server error"+e})
    }
})



export default roomsRouter;