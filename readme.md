Follow this steps to execute the api

Step1:Create a document in an rooms data array using this api
http://localhost:7000/Rooms
Add this format documents
{
            
            "RoomName": "C1",
            "Seats": "4",
            "Amenities": "Ac room",
            "Price": "$7",
            "Date": "12/06/2024",
            "Booked": false
}
{
            
            "RoomName": "C2",
            "Seats": "4",
            "Amenities": "Ac room",
            "Price": "$7",
            "Date": "13/06/2024",
            "Booked": false
}

<------------------------------------------------------->

step2:Create a data in an customer data array using this api
http://localhost:7000/Customer
Add this format data
{
    "CustomerName":"Vijay",
    "RoomName":"C1",
    "Date":"12/06/2024",
    "StartTime":"10am",
    "EndTime":"12pm",
    "TimesOfBooking":1,
    "RoomId":1718791233101
}
If the customer not booked the data assign the room id has null
{
    "CustomerName":"Vijay",
    "RoomName":"C1",
    "Date":"12/06/2024",
    "StartTime":"10am",
    "EndTime":"12pm",
    "TimesOfBooking":1,
    "RoomId":null
}
Note:Add some data with room id which is present in room data array and some room id has null

<------------------------------------------>

step3:After adding the customer data if the person booked room use this api to update the rooms data array
http://localhost:7000/Rooms/1718791233101
http://localhost:7000/Rooms/Here you need to mention the roomID
sample data
{
    "StartTime":"10am", Here the customer mentioned start time
    "EndTime":"12pm"    Here the customer mentioned end time
}

Follow this three steps

API for List all romms booked data 
http://localhost:7000/Rooms/RoomsBooked

API for all customers with booked data
http://localhost:7000/Customer/BookedCustomers

API for how many times has customer has booked the room
http://localhost:7000/Customer/TimesRoomBooked