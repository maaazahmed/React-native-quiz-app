
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Transition } from "react-navigation-fluid-transitions"
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';
import { connect } from "react-redux"


class QuizDiscription extends Component {

    start_Quiz(){
        this.props.navigation.navigate("StartingQuiz")
    }



    render() {
        console.log(this.props.quiz_Discrp.aboutQuiz.aboutQuiz)
        const {
            discription,
            markofaQuistion,
            numberOfQuestion,
            passingMarks,
            time,
            title,
            totalMarks,
        } = this.props.quiz_Discrp.aboutQuiz.aboutQuiz;


        return (
            <Transition appear='horizontal' disappear='horizontal' >
                <LinearGradient
                    start={{ x: 0.9, y: 0.2 }}
                    locations={[0, 0.9, 0.8]}
                    colors={['#d81dc6', '#530bb0']}
                    style={styles.container} >
                    <View style={styles.content} >
                        <View style={styles.discriptionContainer} >
                            <Text style={styles.discriptionText} >{discription}</Text>
                        </View>
                        <View style={styles.LineView} />

                        <View style={styles.aboutDiscrs} >
                            <Text style={styles.discriptionTextTitle} >Total Marks</Text>
                            <Text style={styles.discriptionTextTitle2} >{totalMarks}</Text>
                        </View>
                        <View style={styles.LineView} />

                        <View style={styles.aboutDiscrs} >
                            <Text style={styles.discriptionTextTitle} >Questions</Text>
                            <Text style={styles.discriptionTextTitle2} >{numberOfQuestion}</Text>
                        </View>
                        <View style={styles.LineView} />
                        <View style={styles.aboutDiscrs} >
                            <Text style={styles.discriptionTextTitle} >Time</Text>
                            <Text style={styles.discriptionTextTitle2} >{time}</Text>
                        </View>
                        <View style={styles.LineView} />
                        <View style={styles.aboutDiscrs} >
                            <Text style={styles.discriptionTextTitle} >Passing Marks</Text>
                            <Text style={styles.discriptionTextTitle2} >{passingMarks}</Text>
                        </View>
                        <View style={styles.LineView} />
                    </View>
                    <View style={{justifyContent:"center", alignItems:"center", flex:1}} >
                        <TouchableOpacity onPress={this.start_Quiz.bind(this)} style={{backgroundColor:"#d81dc6", justifyContent:"center", alignItems:"center", padding:wp("1.5%"), width:wp("40%")}} >
                          <Text style={{color:"#fff"}} >START</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </Transition>
        )
    }
}

// https://github.com/oblador/react-native-animatable



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        // flex: 1,
        height:hp("70%"),
        margin: 10,
        // backgroundColor:"green",
        justifyContent:"center"
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
    }
})



const mapStateToProp = (state) => {
    return ({
        quiz_Discrp: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        // QuizListAction: (data) => {
        //     dispatch(QuizListAction(data))
        // },
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(QuizDiscription)
