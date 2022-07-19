const Job = require("../models/Job")
const {StatusCodes} = require("http-status-codes")
const { BadRequestError, NotFoundError} = require("../errors")

const getAllJobs = async (req, res) => {
    res.json({user: req.user})
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.createJob(req.body)
    res.status(StatusCodes.CREATED).json({job})
    
}

const getJob = async (req, res) => {
    res.send("Get a job")
}

const updateJob = async (req, res) => {
    res.send("Update a job")
}

const deleteJob = async (req, res) => {
    res.send("Delete a job")
}

module.exports = {
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob,
}