import Express from "express";

//Importing both rooms and customer data array
import { RoomsData, CustomerData } from "./Data.js";

const customerRouter = Express.Router();


//API to create customer record
customerRouter.post('/', (req, res) => {
    const data = req.body;
    let alreadyBooked;//Declare a variable to check weather the room is already booked or not
    //Logic to check weather the room is booked or not
    if (data.RoomId != null) {
        alreadyBooked = RoomsData.find((rooms) => rooms.RoomId === data.RoomId);
    }

    try {
        if (alreadyBooked != undefined) {
            if (alreadyBooked.Booked) {
                res.send({ message: "The room is already booked" })
            }
        }

        else {
            CustomerData.push(data);
            res.send({ message: "Customer data added successful", data });
        }

    } catch (e) {
        res.status(500).send({ message: "internal server error" + e });
    }
})

//API to List all customers with the booked data
customerRouter.get('/BookedCustomers', (req, res) => {
    const customerBooked = CustomerData.filter((val) => {
        if (val.RoomId != null) {
            return val;
        }
    })
    try {
        res.send(customerBooked);
    } catch (e) {
        res.status(500).send({ message: "Internal server error" + e });
    }
})

//API to List how many times the customer has booked the room
customerRouter.get('/TimesRoomBooked', (req, res) => {
    const TimesRoomBooked = CustomerData.filter((val) => {
        if (val.TimesRoomBooked > 0) {
            return val;
        }
    })
    try {
        res.send({ TimesRoomBooked });
    } catch (e) {
        res.status(500).send({ message: "Internal server error" + e.message });
    }
})

export default customerRouter;