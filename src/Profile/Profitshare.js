import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Profitshare = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
        </Pressable>

        <Text style={[styles.text1, { marginLeft: '20%' }]}>PROFIT SHARE DETAILS</Text>
      </View>

      <View style={styles.container1}>
        <View style={styles.containe2}>
          <Image source={require('../Icons/Images/profit.png')} style={styles.img2}/>
          <Text style={[styles.text1, {fontSize: moderateScale(16), fontWeight: '600', color: '#333333', marginLeft: moderateScale(20)}]}>meteoto profit share details</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
        <View style={styles.partition}>
          <View style={styles.box1}>
            <Text style={[styles.text1, {color: '#000000', fontFamily: 'Nunito Sans'}]}>Brand</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>Amaron Battery Compant</Text>
          </ScrollView>
          
        </View>
        <View style={[styles.partition, {borderRightWidth: 0}]}>
          <View style={styles.box1}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans' }]}>% Porfit Share</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10) }]}>10</Text>
          </ScrollView>

        </View>
        </View>

        <Text style={[styles.text1, { color: '#a8a8a8', marginTop: moderateScale(10), alignSelf: 'flex-end'}]}>(Not Editable)</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.containe3}>
        <Text style={[styles.text1, {color: '#000000', fontWeight: '600'}]}>{`As a vendor, you have discussed about profit \nsharing with meteoto. In case, you want some \nchanges contact `}</Text>
      </View>
      <Pressable style={{marginLeft: '41%', bottom: moderateScale(39)}} onPress={() => navigation.navigate('Profitc')}>
        <Text style={[styles.text1, { color: '#f18b40', fontWeight: '600'}]}>meteoto.</Text>
      </Pressable>
    </View>
  )
}

export default Profitshare

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
    height: verticalScale(396),
    borderRadius: moderateScale(8),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(20)
  },
  containe2: {
    width: moderateScale(320),
    height: verticalScale(50),
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    alignItems: 'center',
    flexDirection: 'row'
  },
  img2: {
    width: scale(32),
    height: scale(32),
    marginLeft: moderateScale(30)
  },
  partition: {
    width: moderateScale(160),
    height: verticalScale(346),
    borderRightWidth: 1,
    borderRightColor: '#c7c7c7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1: {
    width: moderateScale(160),
    height: verticalScale(40),
    borderBottomWidth: 0.5,
    borderBottomColor: '#9b9b9b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    width: moderateScale(360),
    height: verticalScale(1),
    borderWidth: 1,
    borderColor: '#464646',
    marginTop: moderateScale(50)
  },
  containe3: {
    width: moderateScale(320),
    height: verticalScale(84),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center'
  }
})