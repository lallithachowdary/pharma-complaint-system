const fs = require("fs");

const pdfParse = require("pdf-parse");

const Groq = require("groq-sdk");

const Complaint = require("../models/Complaint");



const groq = new Groq({

apiKey:process.env.GROQ_API_KEY

});





exports.uploadComplaint = async(req,res)=>{


try{


if(!req.file){

return res.status(400).json({

message:"PDF not uploaded"

});

}



const dataBuffer =
fs.readFileSync(req.file.path);



const pdfData =
await pdfParse(dataBuffer);



const text = pdfData.text;




const response =
await groq.chat.completions.create({

messages:[

{
role:"system",

content:
"You extract pharma complaints from documents. Return JSON only."
},


{
role:"user",

content:
`
Extract complaint details:

${text}

Return:

{
patientName:"",
medicineName:"",
complaint:"",
severity:""
}

`
}

],


model:"llama-3.1-8b-instant"

});




let result =
response.choices[0].message.content;



result=result.replace(
/```json|```/g,
""
);



const complaintData =
JSON.parse(result);




const complaint =
new Complaint({

patientName:
complaintData.patientName,


medicineName:
complaintData.medicineName,


complaint:
complaintData.complaint,


severity:
complaintData.severity,


pdf:req.file.filename

});



await complaint.save();



res.json({

message:"Complaint uploaded successfully",

complaint

});



}

catch(error){


console.log(error);


res.status(500).json({

message:"Upload failed",

error:error.message

});


}


};





exports.getComplaints = async(req,res)=>{


try{


const data =
await Complaint.find()
.sort({
createdAt:-1
});


res.json(data);


}
catch(err){

res.status(500).json(err);

}


};