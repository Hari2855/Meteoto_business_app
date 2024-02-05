import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'


const Wrongotpmodel = ({ isVisible, onCancel, onConfirm, }) => {
    const [box1, setbox1] = useState('');
    const [box2, setbox2] = useState('');
    const [box3, setbox3] = useState('');
    const [box4, setbox4] = useState('');


    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const toggleModal1 = () => {
        if (toggleModal === false) {
            setModalVisible1(!isModalVisible1)
        }
    }

    const areDetailsFilled = () => {
        return box1 && box2 && box3 && box4
    };

    // useEffect(() => {
    //     if (isModalVisible) {
    //         const timer = setTimeout(() => {
    //             closeModal();
    //         }, 3000);
    //         return () => {
    //             clearTimeout(timer);
    //         };
    //     }
    // }, [isModalVisible]);


    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5} animationIn={'fadeIn'} animationOut={'fadeOut'}>
            <View style={styles.modalContent}>
                <View style={styles.container1}>
                    <Text style={[styles.text1, { marginTop: moderateScale(5) }]}>ENTER OTP</Text>
                </View>

                <View style={styles.container2}>
                    <TextInput style={styles.input} placeholder='8' ref={box1Ref} placeholderTextColor={"#333333"} inputMode='numeric' onChangeText={(text) => {
                        setbox1(text);
                        if (text.length === 1) {
                            box2Ref.current.focus();
                        }
                    }}></TextInput>
                    <TextInput style={styles.input} placeholder='5' ref={box2Ref} placeholderTextColor={"#333333"} inputMode='numeric' onChangeText={(text) => {
                        setbox2(text);
                        if (text.length === 1) {
                            box3Ref.current.focus();
                        }
                    }}></TextInput>
                    <TextInput style={styles.input} placeholder='4' ref={box3Ref} placeholderTextColor={"#333333"} inputMode='numeric' onChangeText={(text) => {
                        setbox3(text);
                        if (text.length === 1) {
                            box4Ref.current.focus();
                        }
                    }}></TextInput>
                    <TextInput style={styles.input} placeholder='9' ref={box4Ref} placeholderTextColor={"#333333"} inputMode='numeric' onChangeText={(text) => setbox4(text)}></TextInput>
                </View>

                <Text style={[styles.text1, { color: '#FF3F00', fontWeight: '600', marginTop: moderateScale(20), alignSelf: 'center' }]}>OTP Incorrect!</Text>

                <Pressable style={[styles.button, { backgroundColor: areDetailsFilled() == false ? '#999999' : '#33CCCC' }]}>
                    <Text style={[styles.text1, { color: '#ffffff' }]}>VERIFY</Text>
                </Pressable>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#ffffff',
        // padding: moderateScale(20),
        width: moderateScale(320),
        height: verticalScale(240),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(30)
    },
    container1: {
        width: moderateScale(190),
        height: verticalScale(40),
        // borderWidth: 1,
        // borderColor: 'red',
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Nunito'
    },
    cancel: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '50%'
    },
    container2: {
        width: moderateScale(276),
        height: verticalScale(56),
        marginTop: moderateScale(10),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: moderateScale(60),
        height: verticalScale(56),
        borderWidth: 2,
        borderColor: '#FF3F00',
        borderRadius: moderateScale(10),
        paddingLeft: moderateScale(25)
    },
    button: {
        width: moderateScale(136),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        marginTop: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Wrongotpmodel;
