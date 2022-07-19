require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();

//DB
const connectDB = require("./db/connect")
const authenticateUser = require("./middlewares/authentication")
// routes
const authRouter = require("./routes/auth")
const jobsRouter = require("./routes/job")


// error handler -> middleware
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");

app.use(express.json());

//extra package

// routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", authenticateUser, jobsRouter)

// use middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>
            console.log(`Server is listening on port ${port}...`)
        );

    } catch (error) {
        console.log(error)
    }
};

start();