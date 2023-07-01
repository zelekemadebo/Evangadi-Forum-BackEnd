require('dotenv').config();
const pool = require("./server/config/database");
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT;

const userRouter = require("./server/api/users/user.router");
const questionsRouter = require("./server/api/questions/questions.router");
const answersRouter = require("./server/api/answers/answers.router");

app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/answers", answersRouter);


app.listen(port,()=>console.log(`Listening at http://localhost:${port}`));







