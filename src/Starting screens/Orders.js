import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Monthmodel from './Monthmodel'
import Filtermodel from './Filtermodel'

const Orders = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [isModalVisible1, setModalVisible1] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filter, setfilter] = useState('')

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1)
  }

  return (
    <View style={styles.container1}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.text1}>ORDERS</Text>
      </View>
      <Text style={styles.text2}>ALL ORDERS</Text>

      <View style={styles.line}></View>

      <View style={styles.container2}>
        <View style={{width: moderateScale(135), height: verticalScale(24), alignItems: 'center', flexDirection: 'row'}}>
          <Image source={require('../Icons/Images/calendar.png')} style={{width: scale(16), height: scale(16)}}/>
            <Text style={[styles.text3, { marginLeft: moderateScale(5) }]}>Month: {selectedMonth || 'September'}</Text>
        </View>

        <View style={styles.dropdown}>
          <Pressable style={styles.option} onPress={toggleModal}>
              <Text style={styles.text3}>Month</Text>
            <Feather name='chevron-down' size={20} color={'#ffffff'} style={{marginTop: moderateScale(3), marginLeft: moderateScale(3)}}/>
              <Monthmodel isVisible={isModalVisible} closeModal={toggleModal} onMonthSelect={setSelectedMonth} />
          </Pressable>

          <Pressable style={styles.option} onPress={toggleModal1}>
              <Text style={styles.text3}>{filter || 'Filter'}</Text>
            <Feather name='chevron-down' size={20} color={'#ffffff'} style={{ marginTop: moderateScale(3), marginLeft: moderateScale(3) }} />
            <Filtermodel isVisible={isModalVisible1} closeModal={toggleModal1} onSelectFilter={setfilter}/>
          </Pressable>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={styles.invoice}>
        <Text style={[styles.text3, {fontWeight: '600', fontFamily: 'Nunito'}]}>Invoice No. : 123456789872</Text>
        <Image source={require('../Icons/Images/clipboard.png')} style={{width: scale(16), height: scale(16)}}/>
      </View>

      <View style={[styles.invoice, {marginTop: moderateScale(10)}]}>
        <Text style={[styles.text3, { fontWeight: '600', fontFamily: 'Nunito' }]}>Order ID : 123456789872</Text>
        <Image source={require('../Icons/Images/clipboard.png')} style={{ width: scale(16), height: scale(16) }} />
      </View>
      
      <Pressable style={styles.container3} onPress={() => navigation.navigate('Accepted')} >
        <View style={styles.header2}>
          <Text style={styles.text4}>Order Details</Text>
        </View>
        <View style={styles.container4}>
          <View style={{flexDirection: 'column', marginTop: moderateScale(10)}}>
            <Text style={styles.text5}>Part Name:<Text style={{color: '#333333'}}> Alternator</Text></Text>
            <Text style={styles.text5}>Order Date:<Text style={{ color: '#333333' }}> 28/09/2023</Text></Text>
            <Text style={styles.text5}>Bill Amount:<Text style={{ color: '#333333' }}> ₹3000</Text></Text>
            <Text style={styles.text5}>Order Status:<Text style={{ color: '#33CCCC' }}> Accepted</Text></Text>
          </View>
          <Feather name='chevron-right' size={22} color={'#333333'} style={{marginTop: moderateScale(18)}}/>
        </View>
      </Pressable>

        <Pressable style={[styles.container3, { borderTopColor: '#33CCCC', marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Shipped')} >
        <View style={styles.header2}>
          <Text style={styles.text4}>Order Details</Text>
        </View>
        <View style={styles.container4}>
          <View style={{ flexDirection: 'column', marginTop: moderateScale(10) }}>
            <Text style={styles.text5}>Part Name:<Text style={{ color: '#333333' }}> Alternator</Text></Text>
            <Text style={styles.text5}>Order Date:<Text style={{ color: '#333333' }}> 28/09/2023</Text></Text>
            <Text style={styles.text5}>Bill Amount:<Text style={{ color: '#333333' }}> ₹3000</Text></Text>
            <Text style={styles.text5}>Order Status:<Text style={{ color: '#33CCCC' }}> Shipped</Text></Text>
          </View>
          <Feather name='chevron-right' size={22} color={'#333333'} style={{ marginTop: moderateScale(18) }} />
        </View>
      </Pressable>

        <Pressable style={[styles.container3, { borderTopColor: '#6DA007', marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Delivered1')}>
        <View style={styles.header2}>
          <Text style={styles.text4}>Order Details</Text>
        </View>
        <View style={styles.container4}>
          <View style={{ flexDirection: 'column', marginTop: moderateScale(10) }}>
            <Text style={styles.text5}>Part Name:<Text style={{ color: '#333333' }}> Alternator</Text></Text>
            <Text style={styles.text5}>Order Date:<Text style={{ color: '#333333' }}> 28/09/2023</Text></Text>
            <Text style={styles.text5}>Bill Amount:<Text style={{ color: '#333333' }}> ₹3000</Text></Text>
            <Text style={styles.text5}>Order Status:<Text style={{ color: '#6DA007' }}> Delivered</Text></Text>
          </View>
          <Feather name='chevron-right' size={22} color={'#333333'} style={{ marginTop: moderateScale(18) }} />
        </View>
      </Pressable>

        <View style={[styles.line, { marginTop: moderateScale(30) }]}></View>

        <View style={[styles.invoice, {marginTop: moderateScale(40)}]}>
          <Text style={[styles.text3, { fontWeight: '600', fontFamily: 'Nunito' }]}>Invoice No. : 123456789872</Text>
          <Image source={require('../Icons/Images/clipboard.png')} style={{ width: scale(16), height: scale(16) }} />
        </View>

        <View style={[styles.invoice, { marginTop: moderateScale(10) }]}>
          <Text style={[styles.text3, { fontWeight: '600', fontFamily: 'Nunito' }]}>Order ID : 123456789872</Text>
          <Image source={require('../Icons/Images/clipboard.png')} style={{ width: scale(16), height: scale(16) }} />
        </View>

        <Pressable style={[styles.container3, { borderTopColor: '#FF3F00' }]} onPress={() => navigation.navigate('Cancel1')}>
          <View style={styles.header2}>
            <Text style={styles.text4}>Order Details</Text>
          </View>
          <View style={styles.container4}>
            <View style={{ flexDirection: 'column', marginTop: moderateScale(10) }}>
              <Text style={styles.text5}>Part Name:<Text style={{ color: '#333333' }}> Alternator</Text></Text>
              <Text style={styles.text5}>Order Date:<Text style={{ color: '#333333' }}> 28/09/2023</Text></Text>
              <Text style={styles.text5}>Bill Amount:<Text style={{ color: '#333333' }}> ₹3000</Text></Text>
              <Text style={styles.text5}>Order Status:<Text style={{ color: '#FF3F00' }}> Canelled</Text></Text>
            </View>
            <Feather name='chevron-right' size={22} color={'#333333'} style={{ marginTop: moderateScale(18) }} />
          </View>
        </Pressable>

        <Pressable style={[styles.container3, { borderTopColor: '#2F80ED', marginTop: moderateScale(10) }]} onPress={() => navigation.navigate('Returned1')}>
          <View style={styles.header2}>
            <Text style={styles.text4}>Order Details</Text>
          </View>
          <View style={styles.container4}>
            <View style={{ flexDirection: 'column', marginTop: moderateScale(10) }}>
              <Text style={styles.text5}>Part Name:<Text style={{ color: '#333333' }}> Alternator</Text></Text>
              <Text style={styles.text5}>Order Date:<Text style={{ color: '#333333' }}> 28/09/2023</Text></Text>
              <Text style={styles.text5}>Bill Amount:<Text style={{ color: '#333333' }}> ₹3000</Text></Text>
              <Text style={styles.text5}>Order Status:<Text style={{color: '#2F80ED' }}> Returned</Text></Text>
            </View>
            <Feather name='chevron-right' size={22} color={'#333333'} style={{ marginTop: moderateScale(18) }} />
          </View>
        </Pressable>

        <View style={[styles.line, {marginTop: moderateScale(30)}]}></View>
      </ScrollView>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#333333'
  },
  header: {
    width: moderateScale(360),
    height: verticalScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  text1: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Nunito'
  },
  text2: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Nunito Sans',
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10)
  },
  line: {
    width: moderateScale(360),
    height: verticalScale(1.5),
    backgroundColor: '#cccccc',
    marginTop: moderateScale(10)
  },
  container2: {
    width: moderateScale(320),
    height: verticalScale(64),
    alignSelf: 'center',
    marginTop: moderateScale(10),
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text3: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Nunito Sans',
  },
  dropdown: {
    width: moderateScale(82),
    height: verticalScale(64),
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  option: {
    width: moderateScale(90),
    height: verticalScale(24),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#33CCCC',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  invoice: {
    width: moderateScale(305),
    height: verticalScale(24),
    marginTop: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  container3: {
    width: moderateScale(320),
    height: verticalScale(128),
    borderBottomLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    borderTopWidth: moderateScale(5),
    borderTopColor: '#E5B800',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  header2: {
    width: moderateScale(320),
    height: verticalScale(28),
    borderBottomWidth: 1,
    borderBottomColor: '#aeaeae',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text4: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#333333',
    marginLeft: moderateScale(10)
  },
  container4: {
    width: moderateScale(290),
    height: verticalScale(100),
    flexDirection: 'row',
    marginLeft: moderateScale(10),
    justifyContent: 'space-between'
  },
  text5: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#666666',
    marginTop: moderateScale(3)
  },
})