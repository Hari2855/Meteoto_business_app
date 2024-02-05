import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Logoscreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Carscreen')
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../Icons/Images/Logo.png')} style={styles.img} />
        </View>
    )
}

export default Logoscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: scale(72),
        width: scale(150)
    }
})