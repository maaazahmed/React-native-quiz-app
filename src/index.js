import {
    SignInComponent,
    SignUpComponent,
    QuizList,
    StartingQuiz,
    QuizDiscription
} from "./Components"
import { FluidNavigator } from "react-navigation-fluid-transitions"
import { createStackNavigator } from "react-navigation"




export default Routes = createStackNavigator({
    QuizList: { screen: QuizList },
    QuizDiscription: { screen: QuizDiscription },
    StartingQuiz: { screen: StartingQuiz },
    SignInComponent: { screen: SignInComponent },
    SignUpComponent: { screen: SignUpComponent },
},
    { navigationOptions: { header: null } },

)



// export default Routes = FluidNavigator({
//     // StartingQuiz: { screen: StartingQuiz },
//     QuizList: { screen: QuizList },
//     SignInComponent: { screen: SignInComponent },
//     SignUpComponent: { screen: SignUpComponent },
// });




