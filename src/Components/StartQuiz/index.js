import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, FlatList, TouchableOpacity , Button} from 'react-native';
import { Transition } from "react-navigation-fluid-transitions"
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';




const { width, height } = Dimensions.get("window")

// yarn add react-native-progress-circle

// 

const test = [
    {
        Question: "1Which element use in create main heading",
        option_1: "<div/>",
        option_2: "<P/>",
        option_3: "<h1/>",
        option_4: "None of thees"
    },
    {
        Question: "2Which element use in create main heading",
        option_1: "<div/>",
        option_2: "<P/>",
        option_3: "<h1/>",
        option_4: "None of thees"
    },
    {
        Question: "2Which element use in create main heading",
        option_1: "<div/>",
        option_2: "<P/>",
        option_3: "<h1/>",
        option_4: "None of thees"
    },
    {
        Question: "Which element use in create main heading",
        option_1: "<div/>",
        option_2: "<P/>",
        option_3: "<h1/>",
        option_4: "None of thees"
    },
    {
        Question: "Which element use in create main heading",
        option_1: "<div/>",
        option_2: "<P/>",
        option_3: "<h1/>",
        option_4: "None of thees"
    },
    {
        Question: "Which element use in create main heading",
        option_1: "<div/>",
        option_2: "<P/>",
        option_3: "<h1/>",
        option_4: "None of thees"
    },


]



export default class StartingQuiz extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
            Question: test[0],
            option_1: test[0],
            option_2: test[0],
            option_3: test[0],
            option_4: test[0],
        }
    }

    next() {
      
      
    }




    render() {
        return (
            <Transition appear='horizontal' disappear='horizontal' >
                <View style={{ flex: 1 }} >
                    <LinearGradient
                        start={{ x: 2, y: 2 }}
                        locations={[0, 1, 1]}
                        colors={['#530bb0', '#d81dc6']}
                        style={styles.container}>
                        <View style={{ flex: 1, padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                            <View>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }} >Question:3</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }} >50:02</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <View style={{ backgroundColor: "green", }} >
                        <View>
                            <Text>sssssssssssssssssssss</Text>
                        </View>
                        <View  >
                            <View style={{ flexDirection: "row" }} >
                                <View>
                                    <Radio
                                        color={"#d81dc6"}
                                        selectedColor={"#d81dc6"}
                                        selected={false}
                                    />
                                </View>
                                <View ><Text> option 1</Text></View>
                            </View>
                            <View style={{ flexDirection: "row" }} >
                                <View>
                                    <Radio
                                        color={"#d81dc6"}
                                        selectedColor={"#d81dc6"}
                                        selected={false}
                                    />
                                </View>
                                <View ><Text> option 1</Text></View>
                            </View>
                        </View>
                    </View>
                    <Button title="click" onPress={this.next.bind(this)} />
                </View>
            </Transition >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "green",
        height: 70,
    },
});
