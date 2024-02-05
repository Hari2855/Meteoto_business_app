import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Offline3 = () => {
  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Image source={require('../Icons/Images/logo1.png')} style={styles.img1} />
          </View>

          <Image source={require("../Icons/Images/face.png")} style={styles.img2} />
          <Text style={styles.text1}>OOPS!</Text>
          <Text style={[styles.text1, { fontSize: moderateScale(16), fontWeight: '300', color: '#afafaf', marginTop: moderateScale(10) }]}>You’re Offline!</Text>
      </View>
  )
}

export default Offline3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img1: {
        width: scale(100),
        height: scale(24),
        marginLeft: moderateScale(10)
    },
    img2: {
        height: verticalScale(120),
        width: moderateScale(127),
        alignSelf: 'center',
        marginTop: '50%'
    },
    text1: {
        fontSize: moderateScale(20),
        fontFamily: 'Nunito Sans',
        marginTop: moderateScale(20),
        alignSelf: 'center',
        color: '#ffffff',
        fontWeight: '300'
    }
})