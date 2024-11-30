const { default: mongoose } = require('mongoose')
const checklist = require('mongoose')

const checklist = new mongoose.Schema({
    applicantObj : Object
})

const UserObjModel = mongoose.model("applicant", applicantSchema)
module.exports = UserObjModel 