const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const checklistModel = require('./Models/checklist')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.post('/add', (res,req) => {
    const userData = req.body.userData
    checklistModel.create({
        object:object
    }).then(results => res.json(results))
    .catch(err => res.json(err))

})

app.listen(3001 ,()=>{
    console.log("Server is running")
})
