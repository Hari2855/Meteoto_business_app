import { View, Text, Pressable, Image, ImageBackground, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const Verification = ({ navigation }) => {
    const [seconds, setSeconds] = useState(30);
    const [state, setstate] = useState(0)
    const [press, setpress] = useState(0)
    const [box1, setbox1] = useState('');
    const [box2, setbox2] = useState('');
    const [box3, setbox3] = useState('');
    const [box4, setbox4] = useState('');

    const areDetailsFilled = () => {
        return box1 && box2 && box3 && box4
    };

    

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
        }, 1000);
        setTimeout(() => {
            clearInterval(timer);
        }, 30000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);

    const Nav = () => {
        if (state == 1) {
            navigation.navigate('Parent')
        }
    }

    return (
        <View style={styles.container1}>
            <ImageBackground source={require('../Icons/Images/Frame.png')} style={styles.imgbgc}>
                <Pressable onPress={() => navigation.navigate('Login')} style={{alignSelf: 'flex-start'}}>
                <Image source={require('../Icons/Images/back.png')} style={styles.img1}/>
                </Pressable>
            </ImageBackground>
            <Text style={styles.text1}>VERIFICATION</Text>
            <View style={styles.boxcontainer}>
                <TextInput
                    ref={box1Ref}
                    placeholder="0"
                    placeholderTextColor="#B8B8B8"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setbox1(text);
                        if (text.length === 1) {
                            box2Ref.current.focus();
                        }
                    }}
                    onPressIn={() => setstate(1)}
                    style={styles.box}
                />
                <TextInput
                    ref={box2Ref}
                    placeholder="0"
                    placeholderTextColor="#B8B8B8"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setbox2(text);
                        if (text.length === 1) {
                            box3Ref.current.focus();
                        }
                    }}
                    style={styles.box}
                />
                <TextInput
                    ref={box3Ref}
                    placeholder="0"
                    placeholderTextColor="#B8B8B8"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setbox3(text);
                        if (text.length === 1) {
                            box4Ref.current.focus();
                        }
                    }}
                    style={styles.box}
                />
                <TextInput
                    ref={box4Ref}
                    placeholder="0"
                    placeholderTextColor="#B8B8B8"
                    keyboardType="numeric"
                    onChangeText={(text) => setbox4(text)}
                    style={styles.box}
                    onPressIn={() => setstate(1)}
                />
            </View>

            <Text style={[styles.text3, { alignSelf: 'center', marginTop: moderateScale(20) }]}>To verify your Mobile Number, we’ve sent</Text>
            <Text style={[styles.text3, { alignSelf: 'center' }]}>One Time Password to 912389XXXX</Text>

            <Pressable style={[styles.box2, { borderColor: seconds == 0 ? '#33CCCC' : '#999999' }]}>
                <Text style={{ fontSize: moderateScale(14), fontWeight: '400', color: seconds == 0 ? '#33CCCC' : '#cccccc' }}>RESEND OTP</Text>
            </Pressable>
            <Text style={styles.text5}>Resend OTP in {seconds}</Text>

            <Pressable style={[styles.btn, { backgroundColor: areDetailsFilled() == false ? 'gray' : '#33CCCC'}]} onPress={Nav}>
                <Text style={styles.text4}>VERIFY</Text>
            </Pressable>
        </View>
    )
}

export default Verification

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333',
    },
    imgbgc: {
        width: moderateScale(360),
        height: verticalScale(262),
        bottom: moderateScale(30),
        alignItems: 'center',
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#ffffff',
        alignSelf: 'center',
        fontFamily: 'Nunito Sans',
        bottom: moderateScale(15)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Nunito Sans',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20)
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        paddingLeft: moderateScale(20),
        borderRadius: moderateScale(8)
    },
    img1: {
        width: scale(50),
        height: scale(50),
        marginTop: moderateScale(30),
        marginLeft: moderateScale(10)
    },
    text3: {
        color: '#c0c0c0',
        fontSize: moderateScale(12),
        fontFamily: 'Nunito Sans',
    },
    input1: {
        height: verticalScale(48),
        width: moderateScale(320),
        borderColor: '#35cccc',
        top: moderateScale(10),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        paddingLeft: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textinput1: {
        fontSize: moderateScale(12),
        color: 'black',
        borderLeftWidth: 1,
        borderColor: '#c0c0c0',
        marginLeft: moderateScale(10),
        padding: 10,
        height: '100%',
        width: '100%'
    },
    btn: {
        height: scale(40),
        width: scale(320),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33CCCC',
        marginTop: '25%',
        alignSelf: 'center'
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    img: {
        width: moderateScale(24),
        height: verticalScale(16),
        alignSelf: 'flex-start',
    },
    boxcontainer: {
        width: moderateScale(276),
        height: verticalScale(56),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(20),
        flexDirection: 'row'
    },
    box: {
        height: verticalScale(56),
        width: moderateScale(60),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        paddingLeft: moderateScale(28),
        fontWeight: '500'
    },
    box2: {
        width: moderateScale(136),
        height: verticalScale(45),
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(50)
    },
    text5: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#666666',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    }
})