var express = require("express")
var router = express.Router()
var User = require("../models/userModel")
var createAdmin = require("../models/CreateAdminModal")
var Quiz = require("../models/CreateQuizModel")
var bcrypt = require("bcrypt");
var mongoose = require("mongoose")
mongoose.connect("mongodb://quizapp:maaz1234@ds227664.mlab.com:27664/quiz_data");







router.post("/createAdmin", (req, res) => {
    User.find({ email: req.body.email }).exec().
        then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                })
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new createAdmin({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            email: req.body.email,
                            password: hash
                        })
                        user.save().then((success) => {
                            res.status(201).json({
                                message: "User Created"
                            })
                        }).catch((err) => {
                            console.log(err)
                            res.status(500).json({
                                error: err
                            })
                        })
                    }
                })
            }
        })
})




router.post("/SignUp", (req, res) => {
    User.find({ email: req.body.email }).exec().
        then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                })
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    console.log(req.body)
                    if (err) {
                        res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            email: req.body.email,
                            password: hash
                        })
                        user.save().then((success) => {
                            res.status(201).json({
                                message: "User Created"
                            })
                        }).catch((err) => {
                            res.status(500).json({
                                error: err
                            })
                        })
                    }
                })
            }
        })
})



router.post("/SignIn", (req, res) => {
    console.log(req.body.email)
    User.find({ email: req.body.email }).exec().
        then((user) => {
            if (user < 1) {
                res.status(401).json({
                    message: "Auth field"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    res.status(401).json({
                        userId: "Auth field"
                    })
                }
                if (result) {
                    console.log("USER__________________",user[0])
                    console.log(result, "------------------")
                    // res.send(user[0])

                    res.status(200).json({
                        message: "Login Successful",
                        user: user[0]
                    })
                }
                // res.status(401).json({
                //     message:"Auth field"
                // })
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
})





router.post("/AdminSignIn", (req, res) => {
    console.log(req.body.email)
    createAdmin.find({ email: req.body.email }).exec().
        then((user) => {
            if (user < 1) {
                res.status(401).json({
                    message: "Auth field"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    res.status(401).json({
                        userId: "Auth field"
                    })
                }
                if (result) {
                    console.log(result)
                    res.status(200).json({
                        message: "Login Successful",
                    })
                }
                // res.status(401).json({
                //     message:"Auth field"
                // })
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
})

router.post("/createQuiz", (req, res) => {
    const quiz = new Quiz({
        _id: new mongoose.Types.ObjectId(),
        aboutQuiz: req.body.aboutQuiz,
        quizArr: req.body.quizArr,
    })
    console.log(quiz, "QUIZ")
    quiz.save((success) => {
        console.log("Quiz Created Successfuly");
    })
})



router.get("/quizList", (req, res) => {
    // console.log("", res)
    Quiz.find((err, succ) => {
        // console.log(succ)
        if (succ) {
            let arr = []
            for (let i = 0; i < succ.length; i++) {
                const element = succ[i];
                arr.push({ id: element._id, aboutQuiz: element.aboutQuiz })
            }
            res.send(arr)
        }
        else {
            res.send(err)
        }
    })
})







// router.get("/getQuestion", (req, res) => {
//     console.log(req.headers.id,"____________________________")
//     Quiz.findOne({ _id: req.headers.id }, (err, success) => {
//         // console.log("===",success,"===")
//             res.send(success)
//     })
// })



router.get("/getQuestion", (req, res) => {
    console.log(req, "____________________________")
    Quiz.find((err, success) => {
        console.log("===", success, "===")
        res.send(success)
    })
})




module.exports = router