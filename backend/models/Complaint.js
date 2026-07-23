const mongoose = require("mongoose");


const complaintSchema = new mongoose.Schema({

    patientName:{
        type:String
    },

    medicineName:{
        type:String
    },

    complaint:{
        type:String
    },

    severity:{
        type:String
    },

    pdf:{
        type:String
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model(
    "Complaint",
    complaintSchema
);