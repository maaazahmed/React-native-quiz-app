import {
    SignInComponent,
    SignUpComponent,
    QuizList,
    StartingQuiz,
    QuizDiscription,
    SplashScreen
} from "./Components"
import { FluidNavigator } from "react-navigation-fluid-transitions"
import { createStackNavigator } from "react-navigation"




// export default Routes = createStackNavigator({
//     SignInComponent: { screen: SignInComponent },
//     QuizList: { screen: QuizList },
//     QuizDiscription: { screen: QuizDiscription },
//     StartingQuiz: { screen: StartingQuiz },
//     SignUpComponent: { screen: SignUpComponent },
// },
//     { navigationOptions: { header: null } },

// )



// export default Routes = FluidNavigator({
//     SignInComponent: { screen: SignInComponent },
//     QuizList: { screen: QuizList },
//     QuizDiscription: { screen: QuizDiscription },
//     StartingQuiz: { screen: StartingQuiz },
//     SignUpComponent: { screen: SignUpComponent },
// });
























import React, { Component } from 'react'
import {
    Animated,
    Easing
} from 'react-native'


const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 650,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { position, layout, scene, index, scenes } = sceneProps
            const toIndex = index
            const thisSceneIndex = scene.index
            const height = layout.initHeight
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                outputRange: [width, 0, 0]
            })

            // Since we want the card to take the same amount of time
            // to animate downwards no matter if it's 3rd on the stack
            // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
            const translateY = position.interpolate({
                inputRange: [0, thisSceneIndex],
                outputRange: [height, 0]
            })

            const slideFromRight = { transform: [{ translateX }] }
            const slideFromBottom = { transform: [{ translateY }] }

            const lastSceneIndex = scenes[scenes.length - 1].index

            // Test whether we're skipping back more than one screen
            if (lastSceneIndex - toIndex > 1) {
                // Do not transoform the screen being navigated to
                if (scene.index === toIndex) return
                // Hide all screens in between
                if (scene.index !== lastSceneIndex) return { opacity: 0 }
                // Slide top screen down
                return slideFromBottom
            }
            return slideFromRight
        },
    }
}



// const transitionConfig = () => ({
//     transitionSpec: {
//       duration: 750,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: sceneProps => {
//       const { layout, position, scene, scenes } = sceneProps
//       const { index } = scene
  
//       const height = layout.initHeight
//       const width = layout.initWidth
  
//       const translateY = position.interpolate({
//         inputRange: [index - 1, index, index + 1],
//         outputRange: [height, 0, 0],
//       })
  
//       const translateX = position.interpolate({
//         inputRange: [index - 1, index, index + 1],
//         outputRange: [width, 0, 0],
//       })
  
//       const opacity = position.interpolate({
//         inputRange: [index - 1, index, index + 1],
//         outputRange: [0, 1, 1],
//       })
  
//       if (scenes[sceneProps.index].route.routeName === 'Home') return {  opacity }
//       else return { transform: [{  translateY }] }
//     },
//   })








export default Routes = createStackNavigator({
    QuizList: {
        screen: QuizList,
        navigationOptions: {
            header: null
        }
    },
    SignInComponent: {
        screen: SignInComponent,
        navigationOptions: {
            header: null
        }
    },
    QuizDiscription: {
        screen: QuizDiscription,
        navigationOptions: {
            header: null
        }
    },
    StartingQuiz: {
        screen: StartingQuiz,
        navigationOptions: {
            header: null
        }
    },
    SignUpComponent: {
        screen: SignUpComponent,
        navigationOptions: {
            header: null
        }
    },
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
}, {
        initialRouteName: "SplashScreen",
        transitionConfig,
    })




