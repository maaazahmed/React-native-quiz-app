import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux"
import {currentUserAction} from "../../store/action/action"




class SplashScreen extends Component {
    componentDidMount(){
        AsyncStorage.getItem("currentUser", (fail, success) => {
            if (success === null) {
                // console.log(fail, "FAIL")
                this.props.navigation.navigate("SignInComponent")
            }
            else {
                // console.log(JSON.parse(success), "SplashScreen")
                console.log(success,"-----------")
                this.props.currentUserAction(JSON.parse(success))
                this.props.navigation.navigate("QuizList")
            }
        })
    }
    render() {
        return (
            <LinearGradient
                start={{ x: 0.9, y: 0.2 }}
                locations={[0, 0.9, 0.8]}
                colors={['#d81dc6', '#530bb0']}
                style={[styles.container, {}]} >
                <Text style={{ fontSize: 20, color: "#fff" }}>Splash Screen</Text>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


const mapStateToProp = (state) => {
    return ({
        // quiz_Question: state.root,
        // quiz_Discription: state.root,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        currentUserAction: (data) => {
            dispatch(currentUserAction(data))
        },
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(SplashScreen)
