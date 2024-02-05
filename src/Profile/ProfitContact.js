import { View, Text, StyleSheet, Pressable, Image, } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Profitcontact = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Profit')}>
                    <Image source={require('../Icons/Images/chevron-left.png')} style={styles.img1} />
                </Pressable>

                <Text style={[styles.text1, { marginLeft: '27%' }]}>MY PROFILE</Text>
            </View>

            <View style={styles.container1}>
                <Image source={require('../Icons/Gif/smile.gif')} style={styles.img2} />
                <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#000000', marginLeft: moderateScale(15) }]}>{`Contact us for any \nSupport`}</Text>
            </View>

            <View style={styles.line}></View>

            <Text style={[styles.text1, { fontSize: moderateScale(16), fontFamily: 'Nunito Sans', marginTop: moderateScale(20), marginLeft: moderateScale(20) }]}>CONTACT VIA</Text>

            <Pressable style={styles.container2}>
                <Image source={require('../Icons/Images/mail.png')} style={styles.img3} />
                <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#333333', marginLeft: moderateScale(20), fontWeight: '600' }]}>Mail us</Text>
                <Image source={require('../Icons/Images/Vector1.png')} style={styles.img4} />
            </Pressable>

            <Pressable style={[styles.container2, { marginTop: moderateScale(20) }]}>
                <Image source={require('../Icons/Images/Call.png')} style={styles.img3} />
                <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#333333', marginLeft: moderateScale(20), fontWeight: '600' }]}>Call us</Text>
                <Image source={require('../Icons/Images/Vector1.png')} style={styles.img4} />
            </Pressable>

            <Pressable style={[styles.container2, { marginTop: moderateScale(20) }]}>
                <Image source={require('../Icons/Images/Website.png')} style={styles.img3} />
                <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#333333', marginLeft: moderateScale(20), fontWeight: '600' }]}>Website</Text>
                <Image source={require('../Icons/Images/Vector1.png')} style={[styles.img4, { marginLeft: '51%' }]} />
            </Pressable>

            <Text style={styles.text2}>{`Quality Service is our Goal.`}</Text>
        </View>
    )
}

export default Profitcontact

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
        height: verticalScale(124),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img2: {
        width: scale(80),
        height: scale(84),
        marginLeft: moderateScale(20)
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(40)
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
        marginLeft: '55%'
    },
    text2: {
        fontSize: moderateScale(40),
        fontWeight: '200',
        color: '#666666',
        alignSelf: 'center',
        marginTop: moderateScale(30)
    }
})