// import React, { Component } from 'react';
// import { StyleSheet, View, Text, Dimensions, Image, FlatList, TouchableOpacity , Button} from 'react-native';
// import { Transition } from "react-navigation-fluid-transitions"
// import LinearGradient from 'react-native-linear-gradient';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';




// const { width, height } = Dimensions.get("window")



// const test = [
//     {
//         Question: "1Which element use in create main heading",
//         option_1: "<div/>",
//         option_2: "<P/>",
//         option_3: "<h1/>",
//         option_4: "None of thees"
//     },
//     {
//         Question: "2Which element use in create main heading",
//         option_1: "<div/>",
//         option_2: "<P/>",
//         option_3: "<h1/>",
//         option_4: "None of thees"
//     },
//     {
//         Question: "2Which element use in create main heading",
//         option_1: "<div/>",
//         option_2: "<P/>",
//         option_3: "<h1/>",
//         option_4: "None of thees"
//     },
//     {
//         Question: "Which element use in create main heading",
//         option_1: "<div/>",
//         option_2: "<P/>",
//         option_3: "<h1/>",
//         option_4: "None of thees"
//     },
//     {
//         Question: "Which element use in create main heading",
//         option_1: "<div/>",
//         option_2: "<P/>",
//         option_3: "<h1/>",
//         option_4: "None of thees"
//     },
//     {
//         Question: "Which element use in create main heading",
//         option_1: "<div/>",
//         option_2: "<P/>",
//         option_3: "<h1/>",
//         option_4: "None of thees"
//     },


// ]



// export default class StartingQuiz extends Component {

//     constructor() {
//         super()
//         this.state = {
//             counter: 0,
//             Question: test[0],
//             option_1: test[0],
//             option_2: test[0],
//             option_3: test[0],
//             option_4: test[0],
//         }
//     }

//     next() {


//     }




//     render() {
//         return (
//             <Transition appear='horizontal' disappear='horizontal' >
//                 <View style={{ flex: 1 }} >
//                     <LinearGradient
//                         start={{ x: 2, y: 2 }}
//                         locations={[0, 1, 1]}
//                         colors={['#530bb0', '#d81dc6']}
//                         style={styles.container}>
//                         <View style={{ flex: 1, padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
//                             <View>
//                                 <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }} >Question:3</Text>
//                             </View>
//                             <TouchableOpacity activeOpacity={0.5} >
//                                 <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }} >50:02</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </LinearGradient>
//                     <View style={{ backgroundColor: "green", }} >
//                         <View>
//                             <Text>sssssssssssssssssssss</Text>
//                         </View>
//                         <View  >
//                             <View style={{ flexDirection: "row" }} >
//                                 <View>
//                                     <Radio
//                                         color={"#d81dc6"}
//                                         selectedColor={"#d81dc6"}
//                                         selected={false}
//                                     />
//                                 </View>
//                                 <View ><Text> option 1</Text></View>
//                             </View>
//                             <View style={{ flexDirection: "row" }} >
//                                 <View>
//                                     <Radio
//                                         color={"#d81dc6"}
//                                         selectedColor={"#d81dc6"}
//                                         selected={false}
//                                     />
//                                 </View>
//                                 <View ><Text> option 1</Text></View>
//                             </View>
//                         </View>
//                     </View>
//                     <Button title="click" onPress={this.next.bind(this)} />
//                 </View>
//             </Transition >
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // backgroundColor: "green",
//         height: 70,
//     },

// });


// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Dimensions,
//     Image,
//     FlatList,
//     TouchableOpacity,
// } from 'react-native';
// import { Transition } from "react-navigation-fluid-transitions"
// import LinearGradient from 'react-native-linear-gradient';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';



// class StartingQuiz extends Component {
//     render() {
//         return (
//             <Transition appear='horizontal' disappear='horizontal' >
//                 <LinearGradient
//                     start={{ x: 0.9, y: 0.2 }}
//                     locations={[0, 0.9, 0.8]}
//                     colors={['#d81dc6', '#530bb0']}
//                     style={styles.container} >
//                     <View style={{ backgroundColor: "#fff" }} >
//                     </View>
//                 </LinearGradient>
//             </Transition>
//         )
//     }
// }


// export default StartingQuiz



// const styles = StyleSheet.create({
//     container:{
//         flex:1,      
//     }
// })

















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


class StartingQuiz extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
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

                        <TouchableOpacity style={styles.aboutDiscrs} >
                            {/* <Text style={styles.discriptionTextTitle} >Total Marks</Text> */}
                            <Text style={styles.discriptionTextTitle2} >{totalMarks}</Text>
                        </TouchableOpacity>
                        <View style={styles.LineView} />

                        <View style={styles.aboutDiscrs} >
                            {/* <Text style={styles.discriptionTextTitle} >Questions</Text> */}
                            <Text style={styles.discriptionTextTitle2} >{numberOfQuestion}</Text>
                        </View>
                        <View style={styles.LineView} />
                        <View style={styles.aboutDiscrs} >
                            {/* <Text style={styles.discriptionTextTitle} >Time</Text> */}
                            <Text style={styles.discriptionTextTitle2} >{time}</Text>
                        </View>
                        <View style={styles.LineView} />
                        <View style={styles.aboutDiscrs} >
                            {/* <Text style={styles.discriptionTextTitle} >Passing Marks</Text> */}
                            <Text style={styles.discriptionTextTitle2} >{passingMarks}</Text>
                        </View>
                        <View style={styles.LineView} />
                    </View>
                    <View style={{justifyContent:"center", alignItems:"center", flex:1}} >
                        <TouchableOpacity style={{backgroundColor:"#d81dc6", justifyContent:"center", alignItems:"center", padding:wp("1.5%"), width:wp("40%")}} >
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


export default connect(mapStateToProp, mapDispatchToProp)(StartingQuiz)
