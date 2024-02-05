import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, Image, Switch } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Changessaved from './Changessaved';

const Setting = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

              <Text style={[styles.text1, { marginLeft: '30%' }]}>SETTINGS</Text>
          </View>

          <View style={styles.box}>
              <Image source={require('../Icons/Images/Bell.png')} style={styles.img} />
              <Text style={styles.text2}>Notification</Text>

              <Switch
                  trackColor={{ false: 'gray', true: '#33CCCC' }}
                  thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  marginLeft={'35%'}
              />
          </View>

          <Pressable style={styles.button} onPress={toggleModal}>
              <Text style={styles.text3}>SAVE CHANGES</Text>
          </Pressable>
          <Changessaved isVisible={isModalVisible} onCancel={toggleModal} />
    </View>
  )
}

export default Setting

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
    box: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(10),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(20)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        color: '#333333',
        marginLeft: moderateScale(20)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: '70%'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
})