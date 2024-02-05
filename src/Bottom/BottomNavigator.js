import { View, Text, StyleSheet, Image, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Dashboard from '../Starting screens/Dashboard'
import Orders from '../Starting screens/Orders'
import Payment from '../Starting screens/Payment'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'

enableScreens();
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <View style={styles.container}>
      {/* {selectedTab === 0 ? <Dashboard /> : null}
      {selectedTab === 1 ? <Orders /> : null}
      {selectedTab === 2 ? <Payment /> : null}
      <View style={styles.bottomNav}>
        <Pressable
          style={styles.bottomNav2}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require('../Icons/Images/grid-even.png')}
            style={[
              styles.img,
              { tintColor: selectedTab === 0 ? '#33CCCC' : '#ffffff' },
            ]}
          />
          <Text
            style={[
              styles.Text,
              { color: selectedTab === 0 ? '#33CCCC' : '#ffffff' },
            ]}
          >
            Dashboard
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectedTab === 0 ? '#33CCCC' : '#333333' },
            ]}
          ></View>
        </Pressable>

        <Pressable style={styles.bottomNav2} onPress={() => setSelectedTab(1)}>
          <Image
            source={require('../Icons/Images/state-layer.png')}
            style={[
              styles.img1,
              { tintColor: selectedTab === 1 ? '#33CCCC' : '#ffffff' },
            ]}
          />
          <Text
            style={[
              styles.Text,
              { color: selectedTab === 1 ? '#33CCCC' : '#ffffff' },
            ]}
          >
            Orders
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectedTab === 1 ? '#33CCCC' : '#333333', top: moderateScale(16) },
            ]}
          ></View>
        </Pressable>

        <Pressable style={styles.bottomNav2} onPress={() => setSelectedTab(2)}>
          <Image
            source={require('../Icons/Images/icon-container.png')}
            style={[
              styles.img,
              { tintColor: selectedTab === 2 ? '#33CCCC' : '#ffffff' },
            ]}
          />
          <Text
            style={[
              styles.Text,
              { color: selectedTab === 2 ? '#33CCCC' : '#ffffff' },
            ]}
          >
            Payment
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectedTab === 2 ? '#33CCCC' : '#333333', right: moderateScale(5) },
            ]}
          ></View>
        </Pressable>
      </View> */}

      <Bottom.Navigator animationEnabled={true}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#333333', height: verticalScale(80), borderTopWidth: 0, alignItems: 'center'},
          tabBarLabelStyle: { fontSize: moderateScale(12), fontWeight: '500', marginBottom: moderateScale(15) },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;
            let lineColor;

            if (route.name === 'Dashboard') {
              iconName = require('../Icons/Images/grid-even.png');
            } else if (route.name === 'Orders') {
              iconName = require('../Icons/Images/state-layer.png');
            } else if (route.name === 'Payment') {
              iconName = require('../Icons/Images/icon-container.png');
            }

            iconColor = focused ? '#33CCCC' : '#ffffff';
            lineColor = focused ? '#33CCCC' : '#333333';

            return (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={iconName}
                  style={[
                    styles.img,
                    { tintColor: iconColor},
                  ]}
                />
                {focused && (
                  <View
                    style={[
                      styles.line,
                      { backgroundColor: lineColor },
                    ]}
                  />
                )}
              </View>
            );
          },


          tabBarActiveTintColor: '#33CCCC',
          tabBarInactiveTintColor: '#ffffff',
          tabBarHideOnKeyboard: true,
        })}
      >
        <Bottom.Screen name="Dashboard" component={Dashboard}/>
        <Bottom.Screen name="Orders" component={Orders} />
        <Bottom.Screen name="Payment" component={Payment} />
      </Bottom.Navigator>


    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    width: moderateScale(360),
    height: verticalScale(80),
    backgroundColor: '#333333',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomNav2: {
    width: moderateScale(109),
    height: verticalScale(80),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  img: {
    width: scale(24),
    height: scale(24),
    marginTop: moderateScale(10)
  },
  img1: {
    width: scale(30),
    height: scale(30),
    tintColor: '#ffffff',
  },
  Text: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#ffffff',
    top: moderateScale(10),
  },
  line: {
    width: moderateScale(100),
    height: verticalScale(3),
    backgroundColor: '#ffffff',
    top: moderateScale(38),
  },

})
