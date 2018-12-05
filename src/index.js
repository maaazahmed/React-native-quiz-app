import {
    SignInComponent,
    SignUpComponent
} from "./Components"
import {FluidNavigator} from "react-navigation-fluid-transitions"
// import { createStackNavigator } from "react-navigation"


// const NavigationConfig = () => {
//     return {
//         screenInterploator: (screenProps) => {
//             const position = screenProps.position;
//             const screen = screenProps.screen;
//             const index = screen.index

//             return FadeTransition(index, position)
//         }
//     }
// }

// export default Routes = createStackNavigator({
    // SignInComponent: { screen: SignInComponent },
    // SignUpComponent: { screen: SignUpComponent },
// },
//     { navigationOptions: { header: null } },

// )



export default Routs = FluidNavigator({
    SignInComponent: { screen: SignInComponent },
    SignUpComponent: { screen: SignUpComponent },
  });




