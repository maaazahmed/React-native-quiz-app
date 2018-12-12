import ActionTypes from "../constant/constant"
import axios from "axios"


export const AboutQuizAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.ABOUT_QUIZ,
            payload: data
        })
    }
}


// export const QuizListAction = (data) => {
//     console.log(data)
//     return dispatch => {
//         dispatch({
//             type: ActionTypes.QUIZE_LIST,
//             payload: (data)
//         })
//     }
// }



export const QuizListAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.QUIZE_LIST,
            payload: data

        })
    }

}


