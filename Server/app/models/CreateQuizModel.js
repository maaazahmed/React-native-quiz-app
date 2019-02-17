var mongoose = require("mongoose");

const quiz = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    aboutQuiz: { type: Object, required: true },
    quizArr: { type: Object, required: true },
    joinedQuiz: { type: Object, required: false }
})

var quizSchema = mongoose.model("Quize", quiz)
module.exports = quizSchema

