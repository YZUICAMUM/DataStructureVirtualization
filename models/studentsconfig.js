const mongoose =require('mongoose');

const studentsConfig = new mongoose.Schema({
    studentId:{
        type:'string',
        required:true,
    },
    studentPassword:{
        type:'string',
        required:true,
    },
    studentName:{
        type:'string',
        required:true,
    },
    studentEmail:{
        type:'string',
        required:true,
    },
    studentDetail:{
        type:'array',
        required:false
    }
})

module.exports = mongoose.model('student',studentsConfig)