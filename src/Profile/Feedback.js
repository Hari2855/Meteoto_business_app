import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Feedback = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Help')}>
                  <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
              </Pressable>

              <Text style={[styles.text1, { marginLeft: '30%' }]}>FEEDBACK</Text>
          </View>


          <View style={styles.container1}>
              <Image source={require('../Icons/Gif/plant.gif')} style={styles.img2} />
              <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#000000', marginLeft: moderateScale(15) }]}>{`YOUR FEEDBACK WILL \nHELP US TO GROW!`}</Text>
          </View>

          <View style={styles.line}></View>

          <Text style={[styles.text1, {fontSize: moderateScale(16), fontWeight: '600', marginLeft: moderateScale(20), marginTop: moderateScale(20)}]}>Leave your feedback</Text>

          <TextInput style={styles.input12} placeholder='Write here...' placeholderTextColor={'#B8B8B8'} />

          <Text style={{ fontSize: moderateScale(40), fontWeight: '200', color: '#666666', marginTop: moderateScale(50), alignSelf: 'center',}}>{`Your Satisfaction \nis our Destiny.`}</Text>

          <Pressable style={styles.button}>
              <Text style={styles.text4}>SUBMIT</Text>
          </Pressable>
    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    img1: {
        height: scale(24),
        width: scale(24),
        marginLeft: moderateScale(15)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(124),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img2: {
        width: scale(80),
        height: scale(84),
        marginLeft: moderateScale(20)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito',
        color: '#ffffff',
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(40)
    },
    input12: {
        width: moderateScale(320),
        height: verticalScale(120),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingBottom: moderateScale(80),
        paddingLeft: moderateScale(20)

    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        backgroundColor: '#33cccc',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(80),
        bottom: moderateScale(15),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text4: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito'
    },
})