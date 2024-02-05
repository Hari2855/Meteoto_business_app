import { View, Text, StyleSheet, Pressable, Image,} from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Contactmodel from './Contactmodel'

const Shopeprofile = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    useEffect(() => {
        if (isModalVisible) {
            const timer = setTimeout(() => {
                closeModal();
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible]);

  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Profile')}>
                  <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
              </Pressable>

              <Text style={[styles.text1, { marginLeft: '27%' }]}>SHOPE PROFILE</Text>
          </View>

          <View style={styles.container1}>
            <Text style={[styles.text1, {fontFamily: 'Nunito Sans'}]}>NOT EDITABLE</Text>
            <Pressable onPress={toggleModal}>
                  <Image source={require('../Icons/Images/alert-circle.png')} style={styles.img2}/>
                  <Contactmodel isVisible={isModalVisible} onCancel={toggleModal}/>
            </Pressable>
          </View>

          <Text style={[styles.text1, {marginLeft: moderateScale(17), marginTop: moderateScale(15)}]}>Shope Name</Text>
          <View style={styles.container2}>
              <Text style={[styles.text1, {fontWeight: '600', color: '#333333'}]}>Harapreet Garage & Autoparts</Text>
          </View>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(20) }]}>Shop GST Number</Text>
          <View style={styles.container2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>123456789789841</Text>
          </View>

          <View style={styles.line1}></View>

          <Text style={[styles.text1, { fontFamily: 'Nunito Sans', marginTop: moderateScale(20), marginLeft: moderateScale(17) }]}>EDITABLE</Text>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(15) }]}>Shope Address</Text>
          <Pressable style={styles.container2} onPress={() => navigation.navigate('Editaddress')}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>Indrapuri, Sector-A</Text>
              <Image source={require('../Icons/Images/Vector1.png')} style={styles.img3}/>
          </Pressable>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(15) }]}>Shop Contact Number</Text>
          <Pressable style={styles.container2} onPress={() => navigation.navigate('Editnumber')}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>9136566625 / 0755 235689</Text>
              <Image source={require('../Icons/Images/Vector1.png')} style={[styles.img3, {marginLeft: '37.5%'}]} />
          </Pressable>
    </View>
  )
}

export default Shopeprofile

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
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito',
        color: '#ffffff',
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(24),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    img2: {
        width: scale(24),
        height: scale(24),
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: moderateScale(15)
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(20)
    },
    img3: {
        width: moderateScale(7),
        height: verticalScale(12),
        tintColor: '#999999',
        marginLeft: '55%'
    }
})