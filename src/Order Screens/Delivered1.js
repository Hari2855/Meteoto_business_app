import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Copymodel from './Copaymodel'

const Delivered1 = ({ navigation }) => {
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
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible]);


    return (
        <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Pressable style={{ right: moderateScale(50) }} onPress={() => navigation.navigate('Orders')}>
                    <Feather name='chevron-left' size={17} color={'#ffffff'} />
                </Pressable>
                <Text style={styles.text1}>ORDERS</Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10) }]}>Invoice No : <Text style={{ color: '#333333' }}>123456789872</Text></Text>
                    <Pressable style={{ marginLeft: '42%' }} onPress={toggleModal}>
                        <Image source={require('../Icons/Images/clipboard.png')} style={styles.img} />
                        <Copymodel isVisible={isModalVisible} closeModal={toggleModal} />
                    </Pressable>
                </View>

                <View style={styles.container4}>
                    <Text style={styles.text3}>Booking Details</Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Booking Date: <Text style={{ color: '#333333', fontWeight: '600' }}>28/09/23</Text></Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Delivery Date: <Text style={{ color: '#333333', fontWeight: '600' }}>28/09/23</Text></Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Deliver To: <Text style={{ color: '#F08F15', fontWeight: '600' }}>meteoto</Text></Text>
                </View>

                <View style={[styles.container4, { height: verticalScale(103) }]}>
                    <Text style={styles.text3}>Car Details</Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Model: <Text style={{ color: '#333333', fontWeight: '600' }}>Hyundai Verna XE</Text></Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Fuel type: <Text style={{ color: '#333333', fontWeight: '600' }}>Petrol</Text></Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Manufacturing Year: <Text style={{ color: '#333333', fontWeight: '600' }}>2020</Text></Text>
                </View>

                <View style={[styles.container4, { height: verticalScale(145), borderStyle: 'dashed', borderColor: '#333333' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text3}>Order Details</Text>
                    </View>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Part Name: <Text style={{ color: '#333333', fontWeight: '600' }}>Alternator</Text></Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Brand: <Text style={{ color: '#333333', fontWeight: '600' }}>Hyundai</Text></Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Part Type: <Text style={{ color: '#333333', fontWeight: '600' }}>OEM</Text></Text>
                    <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Price: <Text style={{ color: '#333333', fontWeight: '600' }}>₹3000</Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text2, { marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Quantity: <Text style={{ color: '#333333', fontWeight: '600' }}>02</Text></Text>
                    </View>
                </View>
                <Text style={[styles.text2, { color: '#333333', fontWeight: '700', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Billing Amount: <Text style={{ color: '#333333', fontWeight: '700' }}>₹6000</Text><Text style={{ color: '#666666', fontWeight: '500' }}> (GST Included)</Text></Text>
            </View>

            <View style={styles.line}></View>

            <View style={styles.container5}>
                <View style={[styles.container4, { height: verticalScale(108) }]}>
                    <Text style={styles.text3}>Order Status</Text>
                    <View style={{ flexDirection: 'row', marginLeft: moderateScale(10), marginTop: moderateScale(10) }}>
                        <Text style={styles.text2}>Order ID: 123456789456</Text>
                        <Pressable onPress={toggleModal}>
                            <Image source={require('../Icons/Images/clipboard.png')} style={[styles.img, { marginLeft: moderateScale(10) }]} />
                        </Pressable>
                        <Image source={require('../Icons/Gif/Truck.gif')} style={styles.img1} />
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: moderateScale(10), bottom: moderateScale(40) }}>
                        <Text style={styles.text2}>Order ID: 123456789456</Text>
                        <Pressable onPress={toggleModal}>
                            <Image source={require('../Icons/Images/clipboard.png')} style={[styles.img, { marginLeft: moderateScale(10) }]} />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.container6}>
                    <View style={{ height: verticalScale(192), width: moderateScale(16) }}>
                        <View style={styles.circle}>
                            <View style={{ height: scale(8), width: scale(8), borderRadius: scale(5), backgroundColor: '#99CC33' }}></View>
                        </View>
                        <View style={styles.line1}></View>


                        <View style={styles.circle}>
                            <View style={{ height: scale(8), width: scale(8), borderRadius: scale(5), backgroundColor: '#99CC33' }}></View>
                        </View>
                        <View style={styles.line1}></View>


                        <View style={styles.circle}>
                            <View style={{ height: scale(8), width: scale(8), borderRadius: scale(5), backgroundColor: '#99CC33' }}></View>
                        </View>
                        <View style={styles.line1}></View>


                        <View style={styles.circle}>
                            <View style={{ height: scale(8), width: scale(8), borderRadius: scale(5), backgroundColor: '#99CC33' }}></View>
                        </View>
                        <View style={styles.line1}></View>

                        <View style={styles.circle}>
                            <View style={{ height: scale(8), width: scale(8), borderRadius: scale(5), backgroundColor: '#4bae4f', alignItems: 'center', justifyContent: 'center' }}>
                                <Feather name='check' color={'#ffffff'} size={7} />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.text2, { color: '#333333', marginLeft: moderateScale(25) }]}>Order Received</Text>
                        <Text style={[styles.text2, { color: '#333333', marginLeft: moderateScale(25), marginTop: moderateScale(30) }]}>Ready to Ship</Text>
                        <Text style={[styles.text2, { color: '#333333', marginLeft: moderateScale(25), marginTop: moderateScale(30) }]}>Order In Transit</Text>
                        <Text style={[styles.text2, { color: '#333333', marginLeft: moderateScale(25), marginTop: moderateScale(30) }]}>Out For Delivery</Text>
                        <Text style={[styles.text2, { color: '#333333', marginLeft: moderateScale(25), marginTop: moderateScale(30) }]}>Delivered</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Delivered1

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito',
        marginRight: '25%'
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(420),
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        borderTopWidth: moderateScale(5),
        borderTopColor: '#6DA007'
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(36),
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '600',
        color: '#666666',
        fontFamily: 'Nunito'
    },
    img: {
        height: scale(16),
        width: scale(16),
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(100),
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        flexDirection: 'column'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
        color: '#000000',
        marginTop: moderateScale(12),
        marginLeft: moderateScale(10)
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15)
    },
    container5: {
        width: moderateScale(320),
        height: verticalScale(332),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(30),
        alignSelf: 'center',
        bottom: moderateScale(10)
    },
    img1: {
        width: scale(80),
        height: scale(68),
        bottom: moderateScale(25),
        marginLeft: moderateScale(30)
    },
    container6: {
        width: moderateScale(129),
        height: verticalScale(192),
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10),
        flexDirection: 'row'
    },
    circle: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line1: {
        height: scale(30),
        width: scale(2),
        backgroundColor: '#99CC33',
        alignSelf: 'center',
        // marginLeft: moderateScale(2)
    }
})