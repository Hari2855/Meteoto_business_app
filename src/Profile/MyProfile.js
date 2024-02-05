import { View, Text, StyleSheet, Pressable, Image,} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Profile')}>
                  <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
              </Pressable>

              <Text style={[styles.text1, { marginLeft: '27%' }]}>MY PROFILE</Text>
      </View>

          <Text style={[styles.text2, { marginTop: moderateScale(30), }]}>Owner Name <Text style={{ color: '#cccccc'}}>(Not Editable)</Text></Text>
          <View style={styles.name}>
              <Text style={[styles.text1, { color: '#000000', fontWeight: '600', marginLeft: moderateScale(20)}]}>Harapreet Singh</Text>
          </View>

          <Text style={[styles.text2, { marginTop: moderateScale(25), }]}>Contact Number <Text style={{ color: '#cccccc' }}>(Primary)</Text></Text>
          <Pressable style={styles.name} onPress={() => { navigation.navigate('Primaryedit')}}>
              <Text style={[styles.text1, { color: '#33CCCC', fontWeight: '600', marginLeft: moderateScale(15) }]}>+91</Text>
              <View style={styles.line}></View>
              <Text style={[styles.text1, { color: '#000000', fontWeight: '600', marginLeft: moderateScale(10) }]}>9136566625</Text>
              <Image source={require('../Icons/Images/Vector2.png')} style={styles.img2}/>
          </Pressable>

          <Text style={[styles.text2, { marginTop: moderateScale(25), }]}>Contact Number <Text style={{ color: '#cccccc' }}>(Alternate)</Text></Text>
          <Pressable style={styles.name} onPress={() => { navigation.navigate('Alteredit') }}>
              <Text style={[styles.text1, { color: '#33CCCC', fontWeight: '600', marginLeft: moderateScale(15) }]}>+91</Text>
              <View style={styles.line}></View>
              <Text style={[styles.text1, { color: '#000000', fontWeight: '600', marginLeft: moderateScale(10) }]}>6534865428</Text>
              <Image source={require('../Icons/Images/Vector2.png')} style={styles.img2} />
          </Pressable>
    </View>
  )
}

export default MyProfile

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
        width: scale(7),
        height: scale(12),
        marginLeft: '50%'
    },
})