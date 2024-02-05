import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Durationmodel from './Durationmodel'

const Payment = ({navigation}) => {
  const [color, setcolor] = useState(0)
  const [isModalVisible, setModalVisible] = useState(false)


  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <ScrollView contentContainerStyle={styles.container1} nestedScrollEnabled={true}>
      <View style={styles.header}>
        <Text style={styles.text1}>PAYMENTS</Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.container3}>
          <Image source={require('../Icons/Gif/pay.gif')} style={styles.img}/>
          <Text style={styles.text2}>Revenue Details</Text>
          <Pressable style={styles.dropdown} onPress={toggleModal}>
            <Text style={[styles.text2, { color: '#333333', marginLeft: moderateScale(0)}]}>Select Duration</Text>
            <Feather name='chevron-down' size={20} color={'#666666'} style={{ marginTop: moderateScale(3)}} />
            <Durationmodel isVisible={isModalVisible} closeModal={toggleModal} navigation={navigation}/>
          </Pressable>
        </View>

        <View style={styles.container4}>
          <Text style={[styles.text1, {color: '#333333', fontWeight: '600', marginLeft: moderateScale(20), marginTop: moderateScale(5)}]}>Month: September</Text>
          <Text style={[styles.text1, { color: '#333333', fontWeight: '600', marginLeft: moderateScale(20), marginTop: moderateScale(5) }]}>Duration: 01 - 15</Text>
        </View>

        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={styles.text3}>Total Selling Amount</Text>
            <Text style={styles.text3}>₹20,00,000</Text>
          </View>
          <View style={styles.container6}>
            <Text style={styles.text3}>Returned Parts Amount</Text>
            <Text style={[styles.text3, { color: '#FF3F00'}]}>- ₹2,00,000</Text>
          </View>
        </View>

        <View style={styles.container7}>
          <View style={styles.container6}>
            <Text style={[styles.text3, { fontWeight: '600', color: '#333333' }]}>Total Revenue</Text>
            <Text style={[styles.text3, {fontWeight: '600', color: '#6DA007'}]}>₹18,00,000</Text>
          </View>
        </View>

        <Text style={[styles.text3, { color: '#666666', marginTop: moderateScale(10), alignSelf: 'flex-end', marginRight: moderateScale(10) }]}>Last Payment Date: 15/09/2023</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.container8}>
        <Pressable style={[styles.container9, { backgroundColor: color == 0 ? '#33CCCC' : '#333333' }]} onPress={() => setcolor(0)}>
          <Text style={styles.text4}>Delivered Parts</Text>
        </Pressable>
        <Pressable style={[styles.container10, { backgroundColor: color == 1 ? '#33CCCC' : '#333333' }]} onPress={() => setcolor(1)}>
          <Text style={styles.text4}>Returned Parts</Text>
        </Pressable>
      </View>

      {color === 0 ? <View>
        <View style={styles.scroll1}>
          <Pressable style={styles.order} onPress={() => navigation.navigate('Delivered')}>
            <View style={styles.circle1}>
              <View style={styles.circle2}>
                <Text style={{color: '#000000', fontSize: moderateScale(25),bottom: moderateScale(3)}}>A</Text>
              </View>
            </View>

            <View style={styles.container11}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={styles.text5}>Alternator: Global-X (Aftermarket)</Text>
              </ScrollView>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={[styles.text5, {fontWeight: '600', color: '#666666'}]}>Invoice No. : 1234564565465</Text>
              </ScrollView>

              <Text style={[styles.text5, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito' }]}>Quantity: 02</Text>
            </View>

            <View style={styles.container12}>
              <Text style={[styles.text5, { color: '#6DA007'}]}>+ ₹3,000</Text>
              <Feather name='chevron-right' size={23} color={'#333333'} style={{ alignSelf: 'center', marginTop: moderateScale(15) }} />
            </View>
          </Pressable>

          <Pressable style={[styles.order, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Delivered')}>
            <View style={styles.circle1}>
              <View style={styles.circle2}>
                <Text style={{ color: '#000000', fontSize: moderateScale(25), bottom: moderateScale(3) }}>A</Text>
              </View>
            </View>

            <View style={styles.container11}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={styles.text5}>Alternator: Global-X (OEM)</Text>
              </ScrollView>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={[styles.text5, { fontWeight: '600', color: '#666666' }]}>Invoice No. : 1234564565465</Text>
              </ScrollView>

              <Text style={[styles.text5, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito' }]}>Quantity: 02</Text>
            </View>

            <View style={styles.container12}>
              <Text style={[styles.text5, { color: '#6DA007' }]}>+ ₹3,000</Text>
              <Feather name='chevron-right' size={23} color={'#333333'} style={{ alignSelf: 'center', marginTop: moderateScale(15) }} />
            </View>
          </Pressable>

          <Pressable style={[styles.order, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Delivered')}>
            <View style={styles.circle1}>
              <View style={styles.circle2}>
                <Text style={{ color: '#000000', fontSize: moderateScale(25), bottom: moderateScale(3) }}>A</Text>
              </View>
            </View>

            <View style={styles.container11}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={styles.text5}>Alternator: Global-X (OEM)</Text>
              </ScrollView>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={[styles.text5, { fontWeight: '600', color: '#666666' }]}>Invoice No. : 1234564565465</Text>
              </ScrollView>

              <Text style={[styles.text5, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito' }]}>Quantity: 02</Text>
            </View>

            <View style={styles.container12}>
              <Text style={[styles.text5, { color: '#6DA007' }]}>+ ₹3,000</Text>
              <Feather name='chevron-right' size={23} color={'#333333'} style={{ alignSelf: 'center', marginTop: moderateScale(15) }} />
            </View>
          </Pressable>
        </View>
        </View> :
        <View style={styles.scroll1}>
          <Pressable style={styles.order} onPress={() => navigation.navigate('Returned')}>
            <View style={[styles.circle1, { borderColor: '#FF3F00' }]}>
              <View style={styles.circle2}>
                <Text style={{ color: '#000000', fontSize: moderateScale(25), bottom: moderateScale(3) }}>A</Text>
              </View>
            </View>

            <View style={styles.container11}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={styles.text5}>Alternator: Global-X (Aftermarket)</Text>
              </ScrollView>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={[styles.text5, { fontWeight: '600', color: '#666666' }]}>Invoice No. : 1234564565465</Text>
              </ScrollView>

              <Text style={[styles.text5, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito' }]}>Quantity: 02</Text>
            </View>

            <View style={styles.container12}>
              <Text style={[styles.text5, { color: '#FF3F00' }]}>+ ₹3,000</Text>
              <Feather name='chevron-right' size={23} color={'#333333'} style={{ alignSelf: 'center', marginTop: moderateScale(15) }} />
            </View>
          </Pressable>

          <Pressable style={[styles.order, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Returned')}>
            <View style={[styles.circle1, {borderColor: '#FF3F00'}]}>
              <View style={styles.circle2}>
                <Text style={{ color: '#000000', fontSize: moderateScale(25), bottom: moderateScale(3) }}>A</Text>
              </View>
            </View>

            <View style={styles.container11}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={styles.text5}>Alternator: Global-X (OEM)</Text>
              </ScrollView>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={[styles.text5, { fontWeight: '600', color: '#666666' }]}>Invoice No. : 1234564565465</Text>
              </ScrollView>

              <Text style={[styles.text5, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito' }]}>Quantity: 02</Text>
            </View>

            <View style={styles.container12}>
              <Text style={[styles.text5, { color: '#FF3F00' }]}>+ ₹3,000</Text>
              <Feather name='chevron-right' size={23} color={'#333333'} style={{ alignSelf: 'center', marginTop: moderateScale(15) }} />
            </View>
          </Pressable>

          <Pressable style={[styles.order, { marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Returned')}>
            <View style={[styles.circle1, { borderColor: '#FF3F00' }]}>
              <View style={styles.circle2}>
                <Text style={{ color: '#000000', fontSize: moderateScale(25), bottom: moderateScale(3) }}>A</Text>
              </View>
            </View>

            <View style={styles.container11}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={styles.text5}>Alternator: Global-X (OEM)</Text>
              </ScrollView>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={[styles.text5, { fontWeight: '600', color: '#666666' }]}>Invoice No. : 1234564565465</Text>
              </ScrollView>

              <Text style={[styles.text5, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito' }]}>Quantity: 02</Text>
            </View>

            <View style={styles.container12}>
              <Text style={[styles.text5, { color: '#FF3F00' }]}>+ ₹3,000</Text>
              <Feather name='chevron-right' size={23} color={'#333333'} style={{ alignSelf: 'center', marginTop: moderateScale(15) }} />
            </View>
          </Pressable>
        </View>}
    </ScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#333333'
  },
  header: {
    width: moderateScale(360),
    height: verticalScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Nunito'
  },
  container2: {
    width: moderateScale(320),
    height: verticalScale(228),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(20)
  },
  container3: {
    width: moderateScale(320),
    height: verticalScale(48),
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    alignItems: 'center',
    flexDirection: 'row'
  },
  img: {
    width: scale(24),
    height: scale(24),
    marginLeft: moderateScale(20)
  },
  text2: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#33CCCC',
    fontFamily: 'Nunito Sans',
    marginLeft: moderateScale(10)
  },
  dropdown: {
    width: moderateScale(138),
    height: verticalScale(24),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#666666',
    marginLeft: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  container4: {
    width: moderateScale(320),
    height: verticalScale(44),
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
    flexDirection: 'column'
  },
  container5: {
    width: moderateScale(320),
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
    borderStyle: 'dashed',
    height: verticalScale(60),
    alignItems: 'center'
  },
  container6: {
    width: moderateScale(296),
    height: verticalScale(16),
    alignItems: 'center',
    marginTop: moderateScale(10),
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  text3: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Nunito',
    marginLeft: moderateScale(8)
  },
  container7: {
    width: moderateScale(320),
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
    height: verticalScale(40),
    alignItems: 'center'
  },
  line: {
    width: moderateScale(360),
    height: verticalScale(1),
    backgroundColor: '#4D4D4D',
    marginTop: moderateScale(20)
  },

  container8: {
    width: moderateScale(248),
    height: verticalScale(48),
    // borderWidth: 1,
    // borderColor: '#938F99',
    marginTop: moderateScale(30),
    alignSelf: 'center',
    flexDirection: 'row'
  },
  container9: {
    height: verticalScale(48),
    width: moderateScale(124),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#938F99',
    borderTopLeftRadius: moderateScale(30),
    borderBottomLeftRadius: moderateScale(30)
  },
  container10: {
    height: verticalScale(48),
    width: moderateScale(124),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#938F99',
    borderTopRightRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30)
  },
  text4: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Nunito Sans'
  },
  scroll1: {
    height: verticalScale(276), 
    width: moderateScale(320), 
    alignSelf: 'center',
    marginTop: moderateScale(30)
  },
  order: {
    width: moderateScale(320),
    height: verticalScale(84),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row'
  },
  circle1: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(30),
    borderWidth: 1,
    borderColor: '#6DA007',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(10)
  },
  circle2: {
    height: scale(32),
    width: scale(32),
    borderRadius: scale(20),
    borderWidth: 1.5,
    borderColor: '#33CCCC',
    alignItems: 'center',
  },
  container11: {
    width: moderateScale(158),
    height: verticalScale(54),
    marginLeft: moderateScale(10)
  },
  text5: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#333333',
    fontFamily: 'Nunito Sans'
  },
  container12: {
    width: moderateScale(53),
    height: verticalScale(54),
    marginLeft: moderateScale(25)
  }
})