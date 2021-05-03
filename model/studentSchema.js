const mongoose = require("mongoose");

const studentSchema=new mongoose.Schema({
    studentId:{
        type:Number,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('student',studentSchema)