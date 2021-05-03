const express = require('express');
const router = express.Router();

var Student = require('../model/studentSchema');

//router.get('/forms',(req,res)=>{
  //  res.send({type:"get"})
//})


//get all student data
router.get('/student', async (req, res) => {
    try {
        var studentobj = await Student.find();
        res.json(studentobj );
    } catch (err) {
        console.log(err);
    }
})
//get data by student id
router.get('/student/:studentId', async (req, res) => {
    try {
        //var studentobj = await Student.find({studentId}).sort({ "studentId": 1 });
        var studentobj = await Student.find({studentId:req.params.studentId});
        res.json(studentobj );
    } catch (err) {
        console.log(err);
    }
})

//post
router.post('/student', async (req, res) => {
    try {
        const studentobj = new Student(req.body);
        await studentobj.save()
        res.status(200).json({ studentobj })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//patch
router.patch("/student/:studentId",async (req,res)=>{
    const id=req.params.studentId
    try {

        const updateStudent=await Student.findOneAndUpdate({studentId:req.params.studentId},req.body,{new:true});
        res.status(400).json({updateStudent})
        res.send(updateStudent)
    } catch (error) {
            res.status(400).send()
    }
})


//delete
router.delete("/student/:studentId" ,  (req , res )=>{
    Student.deleteOne({studentId:req.params.studentId}).then((result)=>{
       res.status(200).json(result) 

    }).catch((err)=>{
        console.warn(err);
    })
    
})
module.exports = router;