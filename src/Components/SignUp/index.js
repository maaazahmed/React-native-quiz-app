import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
// https://www.google.com/search?q=quiz+image+for+mobile+background&tbm=isch&tbs=rimg:CcXresItywALIjjsLco1_13rNi7RifONhgYJHEleag8a5msAr1JUqNSrGysp39dKxt0MtWveBTyEunFUmbKhj2RZI5yoSCewtyjX_1es2LEfG0_1ZsPctr1KhIJtGJ842GBgkcRyu9k-0eqCvUqEgkSV5qDxrmawBEGyKafCb4IeCoSCSvUlSo1KsbKEZBMcbn9oW8GKhIJynf10rG3Qy0RcWF4F2p6M9sqEgla94FPIS6cVRHNV3sMiqryBCoSCSZsqGPZFkjnEbXFw1UbRMW0&tbo=u&sa=X&ved=2ahUKEwjo98jy8YbfAhURsHEKHYaOC8YQ9C96BAgBEBs&biw=1242&bih=597&dpr=1.1#imgrc=XdB64OnN07EcTM:
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/FontAwesome"



const { width, height } = Dimensions.get("window")
export default class SignUpComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: ""
        }
    }

    render() {
        return (
            <LinearGradient
                start={{ x: 0.9, y: 0.2 }}
                locations={[0, 0.9, 0.8]}
                colors={['#d81dc6', '#530bb0']}
                style={styles.container} >


                <View style={[styles.signUpbuttonView, {}]} >
                    <TouchableOpacity
                         onPress={() =>this.props.navigation.goBack()}
                        activeOpacity={0.7}
                        style={[styles.signUpbutton, {}]} >
                        {/* <View> */}
                        < Icon name="angle-left" style={styles.signInbuttonIcon} color="#fff" />
                        {/* </View> */}
                        <Text style={styles.signUpbuttonText} >Log In</Text>
                    </TouchableOpacity>
                </View>


                <View style={[styles.headingContainer, { justifyContent: "flex-end" }]} >
                    <Text style={styles.headingText} >Sign Up</Text>
                </View>

                <View style={styles.inputAndButtonContainer} >
                    <View style={styles.TextInputContainer} >
                        <View style={styles.lableContainer} >
                            <Text style={styles.lableText} >Username</Text>
                        </View>
                        <View style={[styles.lableContainer, styles.TextInputView]} >
                            <TextInput
                                placeholderTextColor="#c1c1c1"
                                placeholder="Your Name"
                                style={styles.TextInput} />
                        </View>
                    </View>
                    <View style={[styles.TextInputContainer, styles.inptSpasificStyle]} >
                        <View style={styles.lableContainer} >
                            <Text style={styles.lableText} >Email</Text>
                        </View>
                        <View style={[styles.lableContainer, styles.TextInputView]} >
                            <TextInput
                                placeholderTextColor="#c1c1c1"
                                placeholder="Your Email"
                                style={styles.TextInput} />
                        </View>
                    </View>
                    <View style={[styles.TextInputContainer, styles.inptSpasificStyle]} >
                        <View style={styles.lableContainer} >
                            <Text style={styles.lableText} >Password</Text>
                        </View>
                        <View style={[styles.lableContainer, styles.TextInputView]} >
                            <TextInput
                                placeholderTextColor="#c1c1c1"
                                placeholder="Password"
                                style={styles.TextInput} />
                        </View>
                    </View>
                    <View style={[styles.TextInputContainer, styles.inptSpasificStyle]} >
                        <View style={styles.lableContainer} >
                            <Text style={styles.lableText} >Confrem Password</Text>
                        </View>
                        <View style={[styles.lableContainer, styles.TextInputView]} >
                            <TextInput
                                placeholderTextColor="#c1c1c1"
                                placeholder="Confrem Password"
                                style={styles.TextInput} />
                        </View>
                    </View>
                    <View style={styles.signInbuttonView}  >
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.signInbutton} >
                            <Text style={styles.signInbuttonText} >Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.FBandGOOGLEbuttonContainer} >
                    <View style={styles.FBandGOOGLEbuttonContent} >
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.FBandGOOGLEbutton}>
                            < Icon name="facebook-f" style={styles.FBandGOOGLEIcon} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.FBandGOOGLEbutton}>
                            < Icon name="google" style={styles.FBandGOOGLEIcon} color="#fff" />
                        </TouchableOpacity>

                    </View>
                </View>
                {/* <View style={styles.signUpbuttonContaier} >
                    <View style={{ alignItems: "center" }} >
                        <TouchableOpacity activeOpacity={0.5} >
                            <Text style={styles.NotmemberyetText} >Not member yet?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.signInbuttonView]} >
                        <TouchableOpacity
                               onPress={() =>this.props.navigation.goBack()}
                            activeOpacity={0.7}
                            style={[styles.signUpbutton, {}]} >
                            <Text style={styles.signUpbuttonText} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </LinearGradient >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height:hp("100%"),
        // width:wp("100%"),
        // justifyContent: 'center',
        alignItems: 'center',
    },
    headingContainer: {
        height: hp("15%"),
        width: wp("100%"),
        // backgroundColor: "green"
    },
    inputAndButtonContainer: {
        height: hp("55%"),
        width: wp("100%"),
        alignItems: "center",
        // backgroundColor: "red",
        justifyContent: "center"
    },
    FBandGOOGLEbuttonContainer: {
        // height: hp("8%"),
        width: wp("100%"),
        // backgroundColor: "blue",
        justifyContent: "center"
    },
    signUpbuttonContaier: {
        flex: 1,
        // height: hp("35%"),
        // width: wp("100%"),
        // backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: hp("5%")
    },
    headingText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "500",
        alignSelf: "center"
    },
    TextInputContainer: {
        width: wp("70%")
    },
    lableContainer: {
        // paddingLeft: 5,
        width: wp("70%")
    },
    lableText: {
        color: "#fff",
        fontSize: 19,
        fontWeight: "500"
    },
    inptSpasificStyle: {
        marginTop: wp("5%")
    },
    TextInputView: {
        marginTop: hp("-1.5%")
    },
    TextInput: {
        borderBottomColor: "#fff",
        borderBottomWidth: 2,
        color: "#fff",
        fontSize: 17,
        paddingLeft: 0
    },
    signInbuttonView: {
        marginTop: hp("4%")
    },
    signInbutton: {
        height: hp("6%"),
        width: wp("70%"),
        backgroundColor: "#fff",
        borderRadius: width,
        justifyContent: "center"
    },
    signInbuttonText: {
        alignSelf: "center",
        fontSize: wp("4%"),
        color: "#530bb0"
    },
    FBandGOOGLEbuttonContent: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: wp("30%"), alignSelf: "center"
    },
    FBandGOOGLEbutton: {
        height: hp("5%"),
        width: hp("5%"),
        borderColor: "#fff",
        borderRadius: width,
        borderWidth: 1,
        justifyContent: "center",
    },
    FBandGOOGLEIcon: {
        alignSelf: "center",
        fontSize: 20
    },
    NotmemberyetText: {
        fontSize: 17,
        color: "#fff"
    },
    signUpbutton: {
        height: hp("6%"),
        width: wp("70%"),
        borderRadius: width,
        justifyContent: "center",
        borderColor: "#fff",
        borderWidth: 1
    },
    signUpbuttonText: {
        alignSelf: "center",
        fontSize: wp("4%"),
        color: "#fff"
    },



    signUpbuttonView: {
        // marginTop: hp("10%"),
        // backgroundColor: "gray",
        height: hp("10%"),
        alignItems:"center",
        alignSelf:"flex-start",
        justifyContent:"center",
        padding:5

    },

    signUpbutton: {
        height: hp("6%"),
        width: wp("22%"),
        justifyContent: "center",
        flexDirection:"row",
        justifyContent:"space-around",
    },

    signUpbuttonText: {
        alignSelf: "center",
        fontSize: wp("4%"),
        color: "#fff",
        fontWeight: "bold",
    },
    signInbuttonIcon:{
        fontSize: 40,
        alignSelf: "center",

    }


});
