const Job = require("../models/Job")
const {StatusCodes} = require("http-status-codes")
const { BadRequestError, NotFoundError} = require("../errors")

const getAllJobs = async (req, res) => {
    res.json({user: req.user})
}

const createJob = async (req, res) => {
    res.send("create job")
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