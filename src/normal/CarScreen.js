import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Carscreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../Icons/Images/car.gif')} style={styles.img} />
            <Image source={require('../Icons/Images/Logo.png')} style={styles.img1} />
        </View>
    )
}

export default Carscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: moderateScale(360),
        height: verticalScale(398),
    },
    img1: {
        height: scale(72),
        width: scale(150),
        bottom: moderateScale(210),
        marginLeft: moderateScale(15)
    }
})