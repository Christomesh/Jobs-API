require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")


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



//extra package
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())


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