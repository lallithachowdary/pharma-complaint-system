const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const complaintRoutes = require("./routes/complaintRoutes");


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());


app.use("/uploads", express.static("uploads"));


app.use("/api/complaints", complaintRoutes);



mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
});


app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
});