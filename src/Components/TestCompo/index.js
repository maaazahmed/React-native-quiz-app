











// import React from 'react';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import LinearGradient from 'react-native-linear-gradient';


// const styles = StyleSheet.create({
//     mainContent: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     image: {
//         width: 320,
//         height: 320,
//     },
//     text: {
//         color: 'rgba(255, 255, 255, 0.8)',
//         backgroundColor: 'transparent',
//         textAlign: 'center',
//         paddingHorizontal: 16,
//     },
//     title: {
//         fontSize: 22,
//         color: 'white',
//         backgroundColor: 'transparent',
//         textAlign: 'center',
//         marginBottom: 16,
//     }
// });

// const slides = [
//     {
//         // key: 'somethun',
//         title: 'Quick setup, good defaults',
//         // text: 'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
//         // icon: 'ios-images-outline',
//         colors: ['#63E2FF', '#B066FE'],
//     },
//     {
//         // key: 'somethun1',
//         title: 'Super customizable',
//         // text: 'The component is also super customizable, so you can adapt it to cover your needs and wants.',
//         // icon: 'ios-options-outline',
//         colors: ['#A3A1FF', '#3A3897'],
//     },
//     {
//         // key: 'somethun2',
//         title: 'No need to buy me beer 1',
//         // text: 'Usage is all free',
//         // icon: 'ios-beer-outline',
//         colors: ['#29ABE2', '#4F00BC'],
//     },
//     {
//         // key: 'somethun2',
//         title: 'No need to buy me beer 2',
//         // text: 'Usage is all free',
//         // icon: 'ios-beer-outline',
//         colors: ['#29ABE2', '#4F00BC'],
//     }, {
//         // key: 'somethun2',
//         title: 'No need to buy me beer 3',
//         // text: 'Usage is all free',
//         // icon: 'ios-beer-outline',
//         colors: ['#29ABE2', '#4F00BC'],
//     },
// ];

// export default class YourView extends React.Component {
//     _renderItem = props => (
//         <LinearGradient
//             start={{ x: 0.9, y: 0.2 }}
//             locations={[0, 0.9, 0.8]}
//             colors={props.colors}
//             style={{ flex: 1, backgroundColor: props.colors[0] }}>
//             <View>
//                 <Text style={styles.title}>{props.title}</Text>
//                 {/* <Text style={styles.text}>{props.text}</Text> */}
//             </View>
//         </LinearGradient>
//     );

//     render() {
//         return (
//             <View style={{ flex: 1 }} >
//                 <AppIntroSlider
//                     hidePagination={false}
//                     slides={slides}
//                     renderItem={this._renderItem}
//                     bottomButton
//                 />
//             </View>

//         );
//     }
// }
















// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     Animated,
//     Dimensions,
//     Easing
// } from 'react-native';
// import h1 from "./1.jpg"
// import h2 from "./2.jpg"
// import h3 from "./3.jpg"



// const { width, height } = Dimensions.get("window")



// var imgArr = [h1, h2, h3]
// export default class ImageSlider extends Component {
//     constructor() {
//         super()
//         this.state = {
//             XPosition: null,
//             YPosition: null,
//             rotate: new Animated.Value(0),
//             index: 0

//         }
//     }




//     onPress(eve) {
//         this.setState({
//             XPosition: eve.nativeEvent.locationX,
//             YPosition: eve.nativeEvent.locationY
//         })
//     }
//     onMove(eve) {
//         const { locationX, locationY } = eve.nativeEvent
//         const { XPosition, YPosition } = this.state
//         let imgPos = new Animated.Value(1.5 * (locationX - XPosition) / width)
//         if (1.5 * (locationX - XPosition) / width > 1) {
//             this.setState({
//                 index: (this.state.index + 1) % 5,
//                 XPosition: locationX,
//                 YPosition: locationY
//             })
//         }
//         if (1.5 * (locationX - XPosition) / width < -1) {
//             this.setState({
//                 index: (this.state.index - 1 + 5) % 5,
//                 XPosition: locationX,
//                 YPosition: locationY
//             })
//         }
//         this.setState({ rotate: imgPos })

//     }

//     onRelease(eve) {
//         Animated.timing(this.state.rotate, {
//             toValue: 0,
//             duration: 500,
//             easing: Easing.bounce
//         }).start()

//     }


//     render() {

//         let rotate = this.state.rotate.interpolate({
//             inputRange: [-1, 1],
//             outputRange: ["-40deg", "40deg"]
//         })

//         let opacity = this.state.rotate.interpolate({
//             inputRange: [-1, 0, 1],
//             outputRange: [0, 1, 0]
//         })

//         return (
//             <View style={{ flex: 1, backgroundColor: "lightblue", justifyContent: "center", alignItems: "center", }}
//                 onStartShouldSetResponder={() => true}
//                 onMoveShouldSetResponder={() => true}
//                 onResponderGrant={this.onPress.bind(this)}
//                 onResponderMove={this.onMove.bind(this)}
//                 onResponderRelease={this.onRelease.bind(this)}>
//                 <Animated.Image
//                     source={imgArr[this.state.index]}
//                     style={{ height: "90%", width: "90%", opacity, transform: [{ rotate }] }} />
//             </View>
//         )
//     }
// }


import React, { Component } from "react";
import { View, TouchableOpacity, Text, Button } from "react-native"

class StopWatch extends Component {
    constructor() {
        super()
        this.state = {
            secondTime: 60
        }
    }

    getSecond() {
        return ("0" + this.state.secondTime % 60).slice(-2)
    }

    getMinuts() {
        return Math.floor(this.state.secondTime / 60)
    }

    startTime() {
        this.incrementer = setInterval(() => {
            this.setState({
                secondTime: this.state.secondTime - 1
            })
        }, 1000)
    }


    stopTime() {
        clearInterval(this.incrementer)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "green" }} >
                <Text style={{ fontSize: 25 }} >{this.getMinuts()}:{this.getSecond()}</Text>

                <TouchableOpacity style={{ height: 60, backgroundColor: "red" }} onPress={this.startTime.bind(this)} >
                    <Text>Start</Text>
                </TouchableOpacity>

                <Text>AND</Text>

                <TouchableOpacity style={{ height: 60, backgroundColor: "red" }} onPress={this.stopTime.bind(this)} >
                    <Text>Stop</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


export default StopWatch




