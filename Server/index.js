var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors");
var app = express()
var router = require("./app/Router/User")






app.set("port", process.env.PORT || 8000)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: "5000kb" }))
app.use(cors())
app.use("/", router);
app.use("/SignIn", router);
app.use("/quizList", router);
app.use("/createAdmin", router);
app.use("/getQuestion", router);
app.use("/joingedQuestions", router);


app.listen(app.get("port"), (err, succ) => {
    console.log(`Server is runing on port ${app.get("port")}`)
})
