import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
import { Transition } from "react-navigation-fluid-transitions"
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from "react-redux"
import TimerMachine from 'react-timer-machine'
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import PercentageCircle from 'react-native-percentage-circle';
import axios from "axios"




const { width, height } = Dimensions.get("window")
class StartingQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            option_1: false,
            option_2: false,
            option_3: false,
            option_4: false,
            selectedOption: "",
            counter: 0,
            slideLeft: new Animated.Value(0),
            opacity: new Animated.Value(0),
            opacity2: new Animated.Value(0),
            zIndex: new Animated.Value(0),
            minuts: this.props.quiz_Discription.aboutQuiz.aboutQuiz.time,
            markofaQuistion: 0,
            incrementerMarcks: this.props.quiz_Discription.aboutQuiz.aboutQuiz.markofaQuistion,
            secondTime: 0,
            score: 0,
            isResultGenerating: false
        }
    }



    getSecond() {
        return ("0" + this.state.secondTime % 60).slice(-2)
    }

    getMinuts() {
        return Math.floor(this.state.secondTime / 60)
    }



    componentWillMount() {
        this.incrementer = setInterval(() => {
            this.setState({
                secondTime: this.state.secondTime + 1
            })
        }, 1000)
        // console.log(Math.floor((this.state.markofaQuistion * 100) / this.props.quiz_Discription.aboutQuiz.aboutQuiz.totalMarks),"MMaz")
    }

    selectOption(option, selectedOption) {
        if (option === "option_1") {
            this.setState({
                option_1: true,
                option_2: false,
                option_3: false,
                option_4: false,
            })
        }
        if (option === "option_2") {
            this.setState({
                option_1: false,
                option_2: true,
                option_3: false,
                option_4: false,
            })
        }
        if (option === "option_3") {
            this.setState({
                option_1: false,
                option_2: false,
                option_3: true,
                option_4: false,
            })
        }
        if (option === "option_4") {
            this.setState({
                option_1: false,
                option_2: false,
                option_3: false,
                option_4: true,
            })
        }
        this.setState({
            selectedOption: selectedOption
        })
    }

    nextQuiz() {
        const currentUser = this.props.currentUser.currentUser;
        const currentQuiz = this.props.quiz_Discription.aboutQuiz

        const joinedObj = {
            userId: currentUser._id,
            email: currentUser.email,
            username: currentUser.email,
            quizId: currentQuiz.id
        }



        const { counter, slideLeft, opacity, selectedOption, markofaQuistion, incrementerMarcks } = this.state
        const quiz = this.props.quiz_Question.quizQuestions
        if (quiz.length - 1 > counter) {
            Animated.parallel([
                Animated.timing(slideLeft, {
                    toValue: 1,
                    duration: 500
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500
                })
            ]).start(() => {
                this.setState({
                    counter: counter + 1,
                    slideLeft: new Animated.Value(0),
                    opacity: new Animated.Value(0),
                })
            })
        }
        // console.log(quiz[counter].correctOption, selectedOption)
        // console.log(Number((markofaQuistion + (incrementerMarcks) * 100) / this.props.quiz_Discription.aboutQuiz.aboutQuiz.totalMarks).toFixed(2))
        if (quiz[counter].correctOption === selectedOption) {
            this.setState({
                // score: this.state.score + 1,
                // score: Number(((markofaQuistion + incrementerMarcks) * 100) / this.props.quiz_Discription.aboutQuiz.aboutQuiz.totalMarks).toFixed(2),
                markofaQuistion: markofaQuistion + Number(incrementerMarcks),
                // markofaQuistion: Number((markofaQuistion + (incrementerMarcks) * 100) / this.props.quiz_Discription.aboutQuiz.aboutQuiz.totalMarks).toFixed(2),
            })
        }

        this.setState({
            selectedOption: "",
            option_1: false,
            option_2: false,
            option_3: false,
            option_4: false,
        })

        if (quiz.length - 1 == counter) {
            this.setState({
                isResultGenerating: true
            })
            setTimeout(() => {
                // this.setState({
                //     isResultGenerating: false
                // })
                const opacity1 = Animated.timing(this.state.opacity, {
                    toValue: 0.2,
                    duration: 300
                })
                const opacity2 = Animated.timing(this.state.opacity2, {
                    toValue: 1,
                    duration: 300,
                })
                Animated.sequence([
                    opacity1,
                    opacity2,
                ]).start()
                Animated.timing(this.state.zIndex, {
                    toValue: 1,
                    duration: 100,
                }).start(() => {
                  console.log(joinedObj)
                    axios.post("http://192.168.100.20:8000/joingedQuestions",joinedObj)
                        .then((res) => {
                            console.log(res)
                        }).catch((err) => {
                            console.log(err, "___________________")
                        })

                })
            }, 3000)
        }
        // console.log(markofaQuistion)
        // console.log("Score", (markofaQuistion * 100) / this.props.quiz_Discription.aboutQuiz.aboutQuiz.totalMarks)
    }


    render() {
        const quiz = this.props.quiz_Question.quizQuestions;
        const {
            option_1,
            option_2,
            option_3,
            option_4,
            counter,
            // minuts,
            // secondTime,
            isResultGenerating,
            markofaQuistion
        } = this.state;
        let score = Number(((markofaQuistion * 100) / this.props.quiz_Discription.aboutQuiz.aboutQuiz.totalMarks).toFixed(2))
        const passScore = Number(this.props.quiz_Discription.aboutQuiz.aboutQuiz.passingMarks)

        let left = this.state.slideLeft.interpolate({
            inputRange: [0, 0.2, 0.4, 1],
            outputRange: [0, -1000, 1000, 0]
        })

        let opacity = this.state.opacity.interpolate({
            inputRange: [0, 0.2, 0.3, .5, 1],
            outputRange: [1, 0, 0, 0, 1]
        })

        let opacity2 = this.state.opacity2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

        let zIndex = this.state.zIndex.interpolate({
            inputRange: [0, 1],
            outputRange: [-1, 1]
        })


        // const quiz_Discription = this.props.quiz_Discription.aboutQuiz.aboutQuiz
        // console.log(this.getMinuts() === minuts)
        // console.log("Score",this.state.score)



        return (
            <Transition appear='horizontal' disappear='horizontal' >
                <LinearGradient
                    start={{ x: 0.9, y: 0.2 }}
                    locations={[0, 0.9, 0.8]}
                    colors={['#d81dc6', '#530bb0']}
                    style={styles.container} >
                    {(isResultGenerating) ?
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                            {/* <View> */}
                            <DoubleBounce size={20} color="#ffffff" />
                            <Text style={{ color: "#fff", fontSize: 17 }} >
                                Result generating...
                                </Text>
                            {/* </View> */}
                        </View>
                        :
                        <Animated.View style={{ flex: 1, position: "absolute", left, opacity, width: wp("100%") }} >
                            <View style={styles.content} >
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: hp("5%") }}  >
                                    {/* <Text>
                                    {this.state.markofaQuistion}
                                </Text> */}
                                    <View style={{ padding: 3, justifyContent: "center", alignItems: "center", height: "100%" }} >
                                        <Text style={{ color: "#fff", fontWeight: "500", fontSize: wp("3") }} >{this.getMinuts()}:{this.getSecond()}</Text>
                                    </View>
                                    <View style={{ padding: 3, justifyContent: "center", alignItems: "center", height: "100%" }} >
                                        <Text style={{ color: "#fff", fontWeight: "500", fontSize: wp("3") }} >{counter + 1}</Text>
                                    </View>

                                </View>
                                <View style={styles.discriptionContainer} >
                                    <View>
                                        <Text style={styles.discriptionText} >{quiz[counter].question}</Text>
                                    </View>
                                </View>
                                <View style={styles.LineView} />
                                <TouchableOpacity
                                    onPress={this.selectOption.bind(this, "option_1", quiz[counter].option_1)}
                                    style={[styles.aboutDiscrs, option_1 ? styles.activeOption : null]} >
                                    <Text style={[styles.discriptionTextTitle2, option_1 ? styles.activeOptionText : null]} >{quiz[counter].option_1}</Text>
                                </TouchableOpacity>
                                <View style={styles.LineView} />

                                <TouchableOpacity onPress={this.selectOption.bind(this, "option_2", quiz[counter].option_2)}
                                    style={[styles.aboutDiscrs, option_2 ? styles.activeOption : null]} >
                                    <Text style={[styles.discriptionTextTitle2, option_2 ? styles.activeOptionText : null]} >{quiz[counter].option_2}</Text>
                                </TouchableOpacity>
                                <View style={styles.LineView} />

                                <TouchableOpacity onPress={this.selectOption.bind(this, "option_3", quiz[counter].option_3)}
                                    style={[styles.aboutDiscrs, option_3 ? styles.activeOption : null]} >
                                    <Text style={[styles.discriptionTextTitle2, option_3 ? styles.activeOptionText : null]} >{quiz[counter].option_3}</Text>
                                </TouchableOpacity>
                                <View style={styles.LineView} />

                                <TouchableOpacity onPress={this.selectOption.bind(this, "option_4", quiz[counter].option_4)}
                                    style={[styles.aboutDiscrs, option_4 ? styles.activeOption : null]} >
                                    <Text style={[styles.discriptionTextTitle2, option_4 ? styles.activeOptionText : null]} >{quiz[counter].option_4}</Text>
                                </TouchableOpacity>
                                <View style={styles.LineView} />
                            </View>

                            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }} >
                                <TouchableOpacity
                                    onPress={this.nextQuiz.bind(this)}
                                    style={{
                                        backgroundColor: "#d81dc6",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: wp("2%"),
                                        width: wp("70%"),
                                    }} >
                                    <Text style={{ color: "#fff" }} >NEXT</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    }
                    <Animated.View style={{ backgroundColor: "#fff", position: "absolute", top: hp("10%"), bottom: hp("10%"), left: wp("5%"), right: wp("5%"), opacity: opacity2, zIndex, borderRadius: 4, justifyContent: "center", alignItems: "center" }} >
                        {console.log({ color: (passScore < score) ? "#d81dc6" : "red", fontSize: 17 })}
                        <PercentageCircle
                            radius={90}
                            percent={score}
                            borderWidth={10}
                            textStyle={{ color: "#d81dc6", fontSize: 17 }}
                            color={"#d81dc6"}>
                        </PercentageCircle>
                        <View style={{ marginTop: wp("10%") }} >
                            {(passScore < score) ?
                                <Text style={{ fontSize: 20, color: "#d81dc6" }}>
                                    You have been pass
                                </Text>
                                :
                                <Text style={{ fontSize: 20, color: "red" }} >
                                    You have been Fail
                                </Text>}
                        </View>
                    </Animated.View>
                </LinearGradient>
            </Transition>
        )
    }
}

// https://github.com/oblador/react-native-animatable



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:"center"

    },

    content: {
        // flex: 1,
        height: hp("70%"),
        margin: 10,
        // backgroundColor:"green",
        // justifyContent: "center"
    },
    discriptionContainer: {
        backgroundColor: "#fff",
        padding: wp("2%"),
        // minHeight:hp("10%"),
        // justifyContent:"flex-end"
    },
    discriptionText: {
        color: "#d81dc6",
        fontSize: 15,
        textAlign: "center",
    },
    LineView: {
        width: wp("35%"),
        height: 1,
        margin: 10,
        backgroundColor: "#fff",
        alignSelf: "center"
    },
    aboutDiscrs: {
        backgroundColor: "#fff",
        padding: wp("1.5%"),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    discriptionTextTitle: {
        color: "#d81dc6",
        fontSize: 17,
        textAlign: "center",
        fontWeight: "400"
    },
    discriptionTextTitle2: {
        color: "#d81dc6",
        fontSize: 17,
        textAlign: "center"
    },
    activeOption: {
        padding: wp("1.1%"),
        borderColor: "#530bb0",
        // borderColor: "#fff",
        borderWidth: 2,
        // backgroundColor: "#d81dc6"
        backgroundColor: "#fff"
    },
    activeOptionText: { color: "#530bb0", fontWeight: "400" }
})



const mapStateToProp = (state) => {
    return ({
        quiz_Question: state.root,
        quiz_Discription: state.root,
        currentUser: state.root,

    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        // QuizListAction: (data) => {
        //     dispatch(QuizListAction(data))
        // },
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(StartingQuiz)
