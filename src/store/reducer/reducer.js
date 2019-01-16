import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    quizList: [],
    aboutQuiz: {},
    quizQuestions: [],
    currentUser: {}
}




export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ABOUT_QUIZ:
            return ({
                ...state,
                aboutQuiz: action.payload
            })
        case ActionTypes.QUIZE_LIST:
            return ({
                ...state,
                quizList: action.payload
            })
        case ActionTypes.QUIZE_QUESTION:
            return ({
                ...state,
                quizQuestions: action.payload
            })
        case ActionTypes.CURRENT_USER_KEY:
            return ({
                ...state,
                currentUser: action.payload
            })

        default:
            return state;
    }

}

