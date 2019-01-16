var mongoose = require("mongoose");



const joinedQuiz = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    quizId: { type: String, required: true }
})

var joinedQuizSchema = mongoose.model("joinedQuiz", joinedQuiz)


module.exports = joinedQuizSchema