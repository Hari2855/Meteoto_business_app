import { View, Text, Pressable, Image, ImageBackground, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Login = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    
    const areDetailsFilled = () => {
        return phoneNumber.length === 10;
    };

    const handlePhoneNumberChange = (input) => {
        setPhoneNumber(input);
        if (input.length !== 10) {
            setPhoneNumberError('Please enter a 10-digit mobile number');
        } else {
            setPhoneNumberError('');
        }
    };

    const handleLoginPress = () => {
        if (areDetailsFilled()) {
            navigation.navigate('Verification');
        } else {
            setPhoneNumberError('Please enter a 10-digit mobile number');
        }
    };
    return (
        <View style={styles.container1}>
            <ImageBackground source={require('../Icons/Images/Frame.png')} style={styles.imgbgc}>
            </ImageBackground>
            <Text style={styles.text1}>LOGIN</Text>

            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text2}>Mobile Number</Text>
                <View style={styles.input1}>
                    <Text style={styles.text3}>+91</Text>
                    <TextInput placeholder='971xxxxxxx' placeholderTextColor={'#c0c0c0'} onChangeText={handlePhoneNumberChange} keyboardType='numeric' style={styles.textinput1} />
                </View>
                {phoneNumberError !== '' && <Text style={styles.errorText}>{phoneNumberError}</Text>}
            </View>

            <Text style={[styles.text3, { marginLeft: moderateScale(20),marginTop: moderateScale(15) }]}>{`Enter your registered Mobile Number to receive OTP \nfor login`}</Text>

            <Pressable style={[styles.btn, { backgroundColor: areDetailsFilled() == false ? 'gray' : '#33CCCC' }]} 
            onPress={handleLoginPress}
            >
                <Text style={styles.text4}>LOGIN</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333',
    },
    imgbgc: {
        width: moderateScale(360),
        height: verticalScale(262),
        bottom: moderateScale(30)
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#ffffff',
        alignSelf: 'center',
        fontFamily: 'Nunito Sans',
        bottom: moderateScale(10)
    },
    errorText: {
        color: '#ffffff',
        fontSize: moderateScale(15),
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
        marginLeft: moderateScale(20),
        top: moderateScale(80),
        backgroundColor: 'red',
        width: moderateScale(320),
        borderRadius: moderateScale(5),
        paddingLeft: moderateScale(30)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        color: '#ffffff',
        fontFamily: 'Nunito Sans',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingLeft: moderateScale(20),
        borderRadius: moderateScale(8)
    },
    text3: {
        color: '#c0c0c0',
        fontSize: moderateScale(12),
        fontFamily: 'Nunito Sans',
    },
    input1: {
        height: verticalScale(48),
        width: moderateScale(320),
        borderColor: '#35cccc',
        top: moderateScale(10),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        paddingLeft: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textinput1: {
        fontSize: moderateScale(12),
        color: 'black',
        borderLeftWidth: 1,
        borderColor: '#c0c0c0',
        marginLeft: moderateScale(10),
        padding: 10,
        height: '100%',
        width: '100%'
    },
    btn: {
        height: scale(40),
        width: scale(320),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33CCCC',
        marginTop: '55%',
        alignSelf: 'center'
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
})