import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Requestmodel from './Requesrmodel'

const Dashboard = ({navigation}) => {
  const [isOnline, setIsOnline] = useState(true);
  const [first, setfirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setthird] = useState(0)
  const [four, setfour] = useState(0)
  const translateY = new Animated.Value(0);
  const [isModelvisible, setModelvisible] = useState(false)

  const toggleOnlineStatus = () => {
    setIsOnline((prevState) => !prevState);
  };

  const toggmodel = () => {
    setModelvisible(!isModelvisible)
  }

  // useEffect(() => {
  //   Animated.timing(translateY, {
  //     toValue: isOnline ? 0 : -50, // Adjust the value to control the text movement.
  //     duration: 300, // Animation duration in milliseconds.
  //     useNativeDriver: false, // This must be set to false for translateY animation to work.
  //   }).start();
  // }, [isOnline]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={toggmodel}>
        <Image source={require('../Icons/Images/logo1.png')} style={styles.img1}/>
        <Requestmodel isVisible={isModelvisible} onCancel={toggmodel}/>
        </Pressable>

        <Pressable style={styles.iconcontainer} onPress={toggleOnlineStatus}>
          <Text style={[styles.Text1, isOnline ? null : { color: '#FF3F00' }]}>
            {isOnline ? 'Online' : 'Offline'}
          </Text>
          <Image
            source={isOnline ? require('../Icons/Images/Switch.png') : require('../Icons/Images/Switch2.png')}
            style={styles.switchImage}
          />
        </Pressable>

        <Pressable style={styles.imgcontainer} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../Icons/Images/profile.png')} style={styles.img2}/>
          <View style={styles.label}>
            <Text style={{
              color: '#000000', bottom: moderateScale(2), fontSize: moderateScale(10), fontWeight: '700', fontFamily: 'Nunito Sans'}}>1</Text>
          </View>
        </Pressable>
      </View>

      <View>
      <ScrollView contentContainerStyle={styles.time} horizontal={true} showsHorizontalScrollIndicator={false}>
        <Pressable style={[styles.box4, { backgroundColor: first == 1 ? '#33CCCC' : '#333333' }]} onPress={() => { return setfirst(first === 1 ? 0 : 1), setSecond(0), setthird(0), setfour(0)}}>
          {first == 0 ? <View>
            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>Today</Text>
          </View> :
            <Text style={styles.text3}>Today  X</Text>}
        </Pressable>

          <Pressable style={[styles.box4, { backgroundColor: second == 1 ? '#33CCCC' : '#333333' }]} onPress={() => { return setSecond(second === 1 ? 0 : 1), setfirst(0), setthird(0), setfour(0) }}>
          {second == 0 ? <View>
            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>This Week</Text>
          </View> :
            <Text style={styles.text3}>This Week  X</Text>}
        </Pressable>

          <Pressable style={[styles.box4, { backgroundColor: third == 1 ? '#33CCCC' : '#333333' }]} onPress={() => { return setthird(third === 1 ? 0 : 1), setfirst(0), setSecond(0), setfour(0) }}>
          {third == 0 ? <View>
            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>This Month</Text>
          </View> :
            <Text style={styles.text3}>This Month  X</Text>}
        </Pressable>

          <Pressable style={[styles.box4, { backgroundColor: four == 1 ? '#33CCCC' : '#333333' }]} onPress={() => { return setfour(four === 1 ? 0 : 1), setfirst(0), setSecond(0), setthird(0) }}>
          {four == 0 ? <View>
            <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>Last Month</Text>
          </View> :
            <Text style={styles.text3}>Last Month  X</Text>}
        </Pressable>
      </ScrollView>
      </View>

      {first == 0 | 1 && second == 0? <View>
      <View style={[styles.container2, { marginTop: moderateScale(20) }]}>
          <Pressable style={styles.container3}>
          <Text style={styles.Text2}>01</Text>
          <Text style={[styles.Text3, {marginTop: moderateScale(20)}]}>O R D E R</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>R E Q U E S T S</Text>
        </Pressable>

        <Pressable style={styles.container3}>
          <Text style={styles.Text2}>03</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>R E Q U E S T S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>A C C E P T E D</Text>
        </Pressable>
      </View>

      <View style={[styles.container2, { marginTop: moderateScale(12) }]}>
        <Pressable style={styles.container3}>
          <Text style={styles.Text2}>01</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>R E Q U E S T S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>D E N I E D</Text>
        </Pressable>

        <Pressable style={styles.container3}>
          <Text style={[styles.Text2, { color: '#FF3F00' }]}>01</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>O R D E R S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>C A N C E L L E D</Text>
        </Pressable>
      </View>

      <View style={[styles.container2, { marginTop: moderateScale(12) }]}>
        <Pressable style={styles.container3}>
          <Text style={styles.Text2}>01</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>O R D E R</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>R E T U R N E D</Text>
        </Pressable>

        <Pressable style={styles.container3}>
          <Text style={[styles.Text2, { color: '#6DA007' }]}>01</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>R E Q U E S T S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>D E L I V E R E D</Text>
        </Pressable>
      </View>
      </View> :

      <View>
      <View style={[styles.container2, { marginTop: moderateScale(20) }]}>
        <Pressable style={styles.container3}>
          <Text style={styles.Text2}>01</Text>
          <Text style={[styles.Text3, {marginTop: moderateScale(20)}]}>O R D E R</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>R E Q U E S T S</Text>
        </Pressable>

        <Pressable style={styles.container3}>
          <Text style={styles.Text2}>03</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>R E Q U E S T S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>A C C E P T E D</Text>
        </Pressable>
      </View>

      <View style={[styles.container2, { marginTop: moderateScale(12) }]}>
        <Pressable style={styles.container3}>
          <Text style={styles.Text2}>01</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>R E Q U E S T S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>D E N I E D</Text>
        </Pressable>

        <Pressable style={styles.container3}>
          <Text style={[styles.Text2, { color: '#FF3F00' }]}>01</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>O R D E R S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>C A N C E L L E D</Text>
        </Pressable>
      </View>

      <View style={[styles.container2, { marginTop: moderateScale(12) }]}>
        <Pressable style={styles.container3}>
          <Text style={[styles.Text2, { color: '#6DA007' }]}>01</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(20) }]}>R E Q U E S T S</Text>
          <Text style={[styles.Text3, { marginTop: moderateScale(5) }]}>D E L I V E R E D</Text>
        </Pressable>
      </View>
      </View>
}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
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
  Text1: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#e1ffb0',
    fontFamily: 'Nunito Sans',
    marginTop: moderateScale(5)
  },
  iconcontainer: {
    flexDirection: 'row',
    marginLeft: moderateScale(80),
    marginTop: moderateScale(10)
  },
  switchImage: {
    width: scale(52), 
    height: scale(32), 
    marginLeft: moderateScale(6)
  },
  imgcontainer: {
    width: scale(32),
    height: scale(32),
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: scale(20),
    marginLeft: moderateScale(20),
    marginTop: moderateScale(8)
  },
  img2: {
    width: scale(28),
    height: scale(28),
    borderRadius: scale(15),
  },
  label: {
    width: scale(12), 
    height: scale(12), 
    borderRadius: scale(10), 
    backgroundColor: '#e5b800',
    marginLeft: moderateScale(18),
    bottom: moderateScale(33),
    justifyContent: 'center',
    alignItems: 'center'
  },
  box4: {
    width: moderateScale(100),
    height: verticalScale(24),
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(13)
  },
  text3: {
    color: '#ffffff',
    fontSize: moderateScale(12),
    fontWeight: '500'
  },
  time: {
    marginTop: moderateScale(15),
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(24),
  },
  container2: {
    width: moderateScale(320),
    height: verticalScale(152),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  container3: {
    height: verticalScale(152),
    width: moderateScale(152),
    borderRadius: moderateScale(42),
    backgroundColor: '#ffffff',
    elevation: 10,
    alignItems: 'center',
    flexDirection: 'column'
  },
  Text2: {
    fontSize: moderateScale(40),
    fontWeight: '400',
    color: '#33CCCC',
    fontFamily: 'Nunito Sans',
    marginTop: moderateScale(30)
  },
  Text3: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#333333',
    fontFamily: 'Nunito Sans'
  }
})