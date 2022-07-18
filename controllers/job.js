
const getAllJobs = async (req, res) => {
    res.send("get all job")
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