import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Changessaved from './Changessaved'

const Editaddress = ({navigation}) => {
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
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Shopeprofile')}>
                    <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
                </Pressable>

                <Text style={[styles.text1, { marginLeft: '27%' }]}>MY PROFILE</Text>
            </View>

            <Text style={[styles.text2, { marginTop: moderateScale(20), }]}>E D I T   D E T A I L S</Text>

            <Text style={[styles.text2, { marginTop: moderateScale(15), }]}>Garage Address</Text>
            <View style={styles.input1}>
                <TextInput placeholder='Indrapuri, Sector-A' placeholderTextColor={'#000000'} style={styles.textinput1} />
                <Image source={require('../Icons/Images/edit.png')} style={styles.img2} />
            </View>

            <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={[styles.text1]}>SAVE CHANGES</Text>
                <Changessaved isVisible={isModalVisible} onCancel={toggleModal}/>
            </Pressable>
        </View>
    )
}

export default Editaddress

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
    customTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        width: scale(16),
        height: scale(16),
        right: moderateScale(45)
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '130%'
    },
    text3: {
        color: '#33CCCC',
        fontSize: moderateScale(12),
        fontWeight: '600',
        fontFamily: 'Nunito Sans',
    },
    input1: {
        height: verticalScale(48),
        width: moderateScale(320),
        top: moderateScale(15),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        paddingLeft: moderateScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textinput1: {
        fontSize: moderateScale(12),
        color: 'black',
        marginLeft: moderateScale(10),
        height: '100%',
        width: '100%'
    },
})