const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../database/passportjs')(passport)


const studentConfig = require('../models/studentsconfig')

function isAuthUser(userId,sessionId){
    return userId === sessionId ? true : false
}


router.get(process.env.ROUTER_DASHBOARD_STUDENTSTAGE, (req, res) => {
    let Id = req.params.user.toString()
    let Week = "Week " + req.params.week;

    //req.user.studentId
    if (isAuthUser(Id,Id)){
        studentConfig.findOne({ studentId: Id }).then((response) => {
            if (response == undefined || response == null) {
                res.status(404).send("無此用戶")
            }
            User = response.studentName
        }).then(() => {
            res.render(`stagepage/${req.params.page}`, { Id: Id, User: User, Week: Week });
        })
    }else{
        res.status(404).send("權限不足")
    }
    

})
//進入主畫面 學生
router.get(process.env.ROUTER_DASHBOARD_STUDENTMAIN, (req, res) => {
    let Id = req.params.user.toString()
    let User , Week 

    if (isAuthUser(Id, Id)){
        studentConfig.findOne({ studentId: Id }).then((response) => {
            if (response == undefined || response == null) {
                res.status(404).send("無此用戶")
            }
            User = response.studentName
            Week = "Week 3"
        }).then(() => {
            res.render('dashboard/student', { Id: Id, User: User, Week: Week });
            return
        })
    }else{
        res.status(404).send("權限不足")
    }
        
})


module.exports = router;