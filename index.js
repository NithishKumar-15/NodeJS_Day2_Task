import Express  from "express";
//Importing the Roombooking router
import roomsRouter from "./RoomBooking/Rooms.js";
//importing customer booking router
import customerRouter from "./RoomBooking/Customers.js";

const server=Express();
server.use(Express.json());

//using the both customer and room router
server.use('/Rooms',roomsRouter);
server.use('/Customer',customerRouter);
//Port Number
const port=7000;

server.listen(port,()=>{
    
})
