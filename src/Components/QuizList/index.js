import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { Transition } from "react-navigation-fluid-transitions"
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from "axios"
import { QuizListAction, AboutQuizAction } from "../../store/action/action"
import { connect } from "react-redux"



const { width, height } = Dimensions.get("window")



class QuizList extends Component {
    componentDidMount() {
        axios.get("http://192.168.100.20:8000/quizList")
            .then((res) => {
                console.log(res.data)
                this.props.QuizListAction(res.data)
            }).catch((err) => {
                console.log(err, "___________________")
            })
    }

    joinQuiz(data) {
        console.log(data)
        this.props.AboutQuizAction(data)
        this.props.navigation.navigate("QuizDiscription")
    }


    render() {

        console.log(this.props.currentUser.currentUser)

        return (
            <Transition appear='horizontal' disappear='horizontal' >
                <View style={{ flex: 1, backgroundColor: "#fff" }} >
                    <LinearGradient
                        start={{ x: 2, y: 2 }}
                        locations={[0, 1, 1]}
                        colors={['#530bb0', '#d81dc6']}
                        style={styles.header}>
                        <View style={styles.quizHeadingContainet} >
                            <View>
                                <Text style={styles.quizheadingText} >Quiz</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <Image source={require("../../assets/outline_perm_identity_white_18dp.png")} style={{ height: 30, width: 30 }} />
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>

                    <FlatList data={this.props.quiz_List.quizList}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.quizList}>
                                    <View style={styles.quizListContaint} >
                                        <View style={styles.quizListName}>
                                            <Text style={styles.quizListNameText} >{item.aboutQuiz.title}</Text>
                                        </View>
                                        <View style={styles.joinQuizView} >
                                            <TouchableOpacity
                                                onPress={this.joinQuiz.bind(this, item)}
                                                activeOpacity={0.5} style={styles.joinButton} >
                                                <Text style={styles.joinButtonText} >Join</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }} keyExtractor={(item) => item.id} />
                </View>
            </Transition>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 70,
    },
    quizHeadingContainet: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    quizheadingText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "500"
    },
    quizList: {
        height: hp("9%"),
        width: wp("100%"),
        flexDirection: "row",
        justifyContent: "space-between",
        borderLeftWidth: 3,
        borderLeftColor: "#d81dc6",
        marginBottom: 5,
        borderBottomColor: "#d81dc6",
        borderBottomWidth: 1,
    },
    quizListContaint: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    quizListName: {
        flex: 1,
        padding: 10,
        justifyContent: "center"
    },
    quizListNameText: {
        fontSize: 20,
        color: "#d81dc6"
    },
    joinQuizView: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    joinButton: {
        height: hp("3%"),
        width: wp("12%"),
        backgroundColor: "#d81dc6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: width
    },
    joinButtonText: {
        fontSize: wp("3%"),
        color: "#fff", fontWeight: "400"
    }
});




const mapStateToProp = (state) => {
    return ({
        quiz_List: state.root,
        currentUser: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        QuizListAction: (data) => {
            dispatch(QuizListAction(data))
        },
        AboutQuizAction: (data) => {
            dispatch(AboutQuizAction(data))
        },

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(QuizList)
