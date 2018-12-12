import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    quizList:[],
    aboutQuiz:{}
}




export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ABOUT_QUIZ:
            return ({
                ...state,
                aboutQuiz: action.payload
            })
     
            case ActionTypes.QUIZE_LIST:
            // console.log(action.payload)
            return ({
                ...state,
                quizList: action.payload
            })
     
        default:
            return state;
    }

}

