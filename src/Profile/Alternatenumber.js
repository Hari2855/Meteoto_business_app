import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Otpmodel from './Otpmodel'

const Alternatenumber = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('MyProfile')}>
          <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
        </Pressable>

        <Text style={[styles.text1, { marginLeft: '27%' }]}>MY PROFILE</Text>
      </View>

      <Text style={[styles.text2, { marginTop: moderateScale(30), }]}>E D I T  N U M B E R</Text>

      <Text style={[styles.text2, { marginTop: moderateScale(15), }]}>Contact Number <Text style={{ color: '#cccccc' }}>(Secondary)</Text></Text>
      <View style={styles.input1}>
        <Text style={styles.text3}>+91</Text>
        <TextInput placeholder='9136566625' placeholderTextColor={'#000000'} keyboardType='numeric' style={styles.textinput1} />
        <Image source={require('../Icons/Images/edit.png')} style={styles.img2} />
      </View>

      <Pressable style={styles.button} onPress={toggleModal}>
        <Text style={[styles.text1]}>VERIFY NUMBER</Text>
        <Otpmodel isVisible={isModalVisible} onCancel={toggleModal} />
      </Pressable>
    </View>
  )
}

export default Alternatenumber

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
  customTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  img1: {
    height: scale(24),
    width: scale(24),
    marginLeft: moderateScale(15)
  },
  text1: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    fontFamily: 'Nunito',
    color: '#ffffff',
  },
  text2: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Nunito Sans',
    marginLeft: moderateScale(20)
  },
  name: {
    width: moderateScale(320),
    height: verticalScale(48),
    borderRadius: moderateScale(10),
    backgroundColor: '#ffffff',
    marginTop: moderateScale(10),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  line: {
    width: moderateScale(1),
    height: verticalScale(48),
    backgroundColor: '#dbdbdb',
    marginLeft: moderateScale(10)
  },
  img2: {
    width: scale(16),
    height: scale(16),
    right: moderateScale(70)
  },
  button: {
    width: moderateScale(320),
    height: verticalScale(40),
    borderRadius: moderateScale(5),
    backgroundColor: '#33CCCC',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '125%'
  },
  text3: {
    color: '#33CCCC',
    fontSize: moderateScale(12),
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
  },
  input1: {
    height: verticalScale(48),
    width: moderateScale(320),
    borderColor: '#35cccc',
    top: moderateScale(15),
    borderRadius: moderateScale(8),
    backgroundColor: '#ffffff',
    paddingLeft: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textinput1: {
    fontSize: moderateScale(12),
    color: 'black',
    borderLeftWidth: 1,
    borderColor: '#dbdbdb',
    marginLeft: moderateScale(10),
    padding: 10,
    height: '100%',
    width: '100%'
  },
})