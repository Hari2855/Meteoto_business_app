import { View, Text, StyleSheet, Pressable, Image, } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Help = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Profile')}>
                  <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
              </Pressable>

              <Text style={[styles.text1, { marginLeft: '25%' }]}>HELP & SUPPORT</Text>
          </View>

          <Pressable style={styles.container2} onPress={() => navigation.navigate('Contact1')}>
              <Image source={require('../Icons/Images/contact.png')} style={styles.img3} />
              <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#333333', marginLeft: moderateScale(20), fontWeight: '600' }]}>Contact us</Text>
              <Image source={require('../Icons/Images/Vector1.png')} style={styles.img4} />
          </Pressable>

          <Pressable style={styles.container2} onPress={() => navigation.navigate('Feedback')}>
              <Image source={require('../Icons/Gif/Message.gif')} style={styles.img3} />
              <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#333333', marginLeft: moderateScale(20), fontWeight: '600' }]}>Your Feedback</Text>
              <Image source={require('../Icons/Images/Vector1.png')} style={[styles.img4, {marginLeft: '35%'}]} />
          </Pressable>
    </View>
  )
}

export default Help

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
    container2: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(15),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img3: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(10)
    },
    img4: {
        width: moderateScale(7),
        height: verticalScale(12),
        tintColor: '#9a9a9a',
        marginLeft: '45%'
    },
})