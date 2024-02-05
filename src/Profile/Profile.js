import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Logoutmodel from './Logoutmodel'

const Profile = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const handelsearch = () => {
        toggleModal()
        navigation.navigate('Login')
    }


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Dashboard')}>
                    <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
                </Pressable>

                <Pressable style={styles.logout} onPress={toggleModal}>
                    <Text style={styles.text1}>Logout</Text>
                    <Image source={require('../Icons/Images/logout-icon.png')} style={styles.img2} />
                </Pressable>
                <Logoutmodel isVisible={isModalVisible} onConfirm={handelsearch} onCancel={toggleModal} navigation={navigation} />
            </View>

            <ImageBackground source={require('../Icons/Images/bg-img.png')} style={styles.imgb1}>
                <ImageBackground source={require('../Icons/Images/img-overlay.png')} style={styles.imgb1}>
                    <Pressable style={styles.ring}>
                        <View style={styles.label}>
                            <Text style={{bottom: moderateScale(3)}}>1</Text>
                        </View>
                        <Image source={require('../Icons/Images/bell-notification.png')} style={styles.img3}/>
                    </Pressable>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Text style={styles.text2}>Harapreet Car Autoparts & Supplier</Text>
                </ScrollView>
                    <Text style={styles.text3}>Garage ID: 12345</Text>
                </ImageBackground>
            </ImageBackground>

            <View style={styles.line1}></View>
            
            <Pressable style={[styles.container1, { marginTop: moderateScale(25) }]} onPress={() => navigation.navigate('MyProfile')}>
                <Image source={require('../Icons/Images/user.png')} style={styles.img4}/>
                <Text style={styles.text4}>My Profile</Text>
                <Image source={require('../Icons/Images/Vector2.png')} style={styles.img5}/>
            </Pressable>

            <Pressable style={[styles.container1, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Shopeprofile')}>
                <Image source={require('../Icons/Images/shop.png')} style={styles.img4} />
                <Text style={styles.text4}>Shop Profile</Text>
                <Image source={require('../Icons/Images/Vector2.png')} style={[styles.img5, {marginLeft: '40%'}]} />
            </Pressable>

            <Pressable style={[styles.container1, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Bank')}>
                <Image source={require('../Icons/Images/bank.png')} style={styles.img4} />
                <Text style={styles.text4}>Bank Details</Text>
                <Image source={require('../Icons/Images/Vector2.png')} style={[styles.img5, { marginLeft: '39%' }]} />
            </Pressable>

            <Pressable style={[styles.container1, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Profit')}>
                <Image source={require('../Icons/Images/profit.png')} style={styles.img4} />
                <Text style={styles.text4}>Profit Share Details</Text>
                <Image source={require('../Icons/Images/Vector2.png')} style={[styles.img5, { marginLeft: '23%' }]} />
            </Pressable>

            <View style={[styles.line1, {marginTop: moderateScale(20)}]}></View>

            <Pressable style={[styles.container1, { marginTop: moderateScale(20) }]} onPress={() => navigation.navigate('Setting')}>
                <Image source={require('../Icons/Images/setting.png')} style={styles.img4} />
                <Text style={styles.text4}>Settings</Text>
                <Image source={require('../Icons/Images/Vector2.png')} style={[styles.img5, { marginLeft: '47%' }]} />
            </Pressable>

            <Pressable style={[styles.container1, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Help')}>
                <Image source={require('../Icons/Images/help.png')} style={styles.img4} />
                <Text style={styles.text4}>Help & Support</Text>
                <Image source={require('../Icons/Images/Vector2.png')} style={[styles.img5, { marginLeft: '31%' }]} />
            </Pressable>

            <Image source={require('../Icons/Images/logo2.png')} style={styles.img6}/>
        </ScrollView>
    )
}

export default Profile

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
        justifyContent: 'space-between'
    },
    img1: {
        height: scale(24),
        width: scale(24),
        marginLeft: moderateScale(15)
    },
    logout: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: moderateScale(15)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito Sans'
    },
    img2: {
        width: scale(48),
        height: scale(48)
    },
    imgb1: {
        width: moderateScale(360),
        height: verticalScale(332),
        alignItems: 'center',
        flexDirection: 'column',
    },
    ring: {
        height: scale(32),
        width: scale(32),
        borderWidth: 1,
        borderRadius: scale(16),
        borderColor: '#ffffff',
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: moderateScale(20),
        marginTop: moderateScale(30)
    },
    img3: {
        width: scale(20),
        height: scale(20),
        bottom: moderateScale(6)
    },
    label: {
        height: scale(12),
        width: scale(12),
        borderRadius: scale(10),
        backgroundColor: '#e5b800',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: moderateScale(2),
        left: moderateScale(10)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito Sans',
        alignSelf: 'flex-end',
        bottom: moderateScale(25)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '600',
        color: '#ffffff',
        fontFamily: 'Nunito',
        bottom: moderateScale(20)
    },
    line1: {
        width: scale(360),
        height: scale(1),
        backgroundColor: '#474747'
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(60),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img4: {
        height: scale(32),
        width: scale(32),
        marginLeft: moderateScale(15)
    },
    text4: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        color: '#333333',
        fontFamily: 'Nunito Sans',
        marginLeft: moderateScale(25)
    },
    img5: {
        width: scale(7), 
        height: scale(12),
        marginLeft: '45%'
    },
    img6: {
        width: moderateScale(110),
        height: verticalScale(28),
        marginTop: moderateScale(80),
        alignSelf: 'center',
        bottom: moderateScale(20)
    }
})