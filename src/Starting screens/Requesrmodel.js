import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale, moderateVerticalScale } from 'react-native-size-matters'
import Reasonmodel from './Reasonmodel';

const Requestmodel = ({ isVisible, onCancel, onConfirm, }) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    return (
        <Modal isVisible={isVisible} backdropOpacity={0.1} animationIn={'fadeIn'} animationOut={'fadeOut'}>
            <Pressable style={styles.modalContent}>
                <Text style={[styles.text1, {bottom: moderateScale(20)}]}>NEW REQUEST</Text>
                <View style={styles.container}>
                    <View style={styles.car}>
                        <Image source={require('../Icons/Images/Verna.png')} style={styles.img}/>
                    </View>
                    <View style={styles.details}>
                        <Text style={[styles.text1, {fontSize: moderateScale(12), color: '#333333'}]}>HYUNDAI VERNA</Text>
                        <Text style={[styles.text1, {fontSize: moderateScale(12), color: '#666666', fontWeight: '600' }]}>Verna SX Turbo DT</Text>
                        <Text style={[styles.text1, {fontSize: moderateScale(12), color: '#666666', fontWeight: '600' }]}>Petrol</Text>
                        <Text style={[styles.text1, {fontSize: moderateScale(12), color: '#666666', fontWeight: '600' }]}>2020</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container3}>
                        <Text style={[styles.text1, { fontSize: moderateScale(12), color: '#333333', marginLeft: moderateScale(10)}]}>Part(s) Requested</Text>
                        <Text style={[styles.text1, {fontSize: moderateScale(12), color: '#333333', marginLeft: '30%' }]}>No. of Part(s): 05</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                        <View style={styles.container4}>
                            <View style={styles.container5}>
                              <View style={styles.img2}>
                                    <Image source={require("../Icons/Images/Alternator.png")} style={{width: scale(28), height: scale(28)}} />
                              </View>
                            </View>
                            <Text style={[styles.text1, {color: '#333333', alignSelf: 'center', marginLeft: moderateScale(20)}]}>Alternator</Text>
                            <Text style={[styles.text1, {fontSize: moderateScale(12), color: '#666666', alignSelf: 'center', marginLeft: moderateScale(60) }]}>Quantity: 02</Text>
                        </View>

                        <View style={[styles.container4, {marginTop: moderateScale(10)}]}>
                            <View style={styles.container5}>
                                <View style={styles.img2}>
                                    <Image source={require("../Icons/Images/Alternator.png")} style={{ width: scale(28), height: scale(28) }} />
                                </View>
                            </View>
                            <Text style={[styles.text1, { color: '#333333', alignSelf: 'center', marginLeft: moderateScale(20) }]}>Alternator</Text>
                            <Text style={[styles.text1, { fontSize: moderateScale(12), color: '#666666', alignSelf: 'center', marginLeft: moderateScale(60) }]}>Quantity: 02</Text>
                        </View>

                        <View style={[styles.container4, { marginTop: moderateScale(10) }]}>
                            <View style={styles.container5}>
                                <View style={styles.img2}>
                                    <Image source={require("../Icons/Images/Alternator.png")} style={{ width: scale(28), height: scale(28) }} />
                                </View>
                            </View>
                            <Text style={[styles.text1, { color: '#333333', alignSelf: 'center', marginLeft: moderateScale(20) }]}>Alternator</Text>
                            <Text style={[styles.text1, { fontSize: moderateScale(12), color: '#666666', alignSelf: 'center', marginLeft: moderateScale(60) }]}>Quantity: 02</Text>
                        </View>

                        <View style={[styles.container4, { marginTop: moderateScale(20), bottom: moderateScale(10)}]}>
                            <View style={styles.container5}>
                                <View style={styles.img2}>
                                    <Image source={require("../Icons/Images/Alternator.png")} style={{ width: scale(28), height: scale(28) }} />
                                </View>
                            </View>
                            <Text style={[styles.text1, { color: '#333333', alignSelf: 'center', marginLeft: moderateScale(20) }]}>Alternator</Text>
                            <Text style={[styles.text1, { fontSize: moderateScale(12), color: '#666666', alignSelf: 'center', marginLeft: moderateScale(60) }]}>Quantity: 02</Text>
                        </View>
                    </ScrollView>
                    <View style={styles.container6}>
                        <Pressable style={styles.button} onPress={toggleModal}>
                            <Text style={[styles.text1, {fontSize: moderateScale(12), color: '#ffffff'}]}>DENY</Text>
                            <Reasonmodel isVisible={isModalVisible} closeModal={toggleModal}/>
                        </Pressable>
                        <Pressable style={[styles.button, { backgroundColor: '#6DA007'}]} onPress={onCancel}>
                            <Text style={[styles.text1, { fontSize: moderateScale(12), color: '#ffffff' }]}>ACCEPT</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        height: verticalScale(590),
        width: moderateScale(320),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#E5B800',
        fontFamily: 'Nunito Sans'
    },
    container: {
        width: moderateScale(320),
        height: verticalScale(108),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    car: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(60),
        borderWidth: 2,
        borderColor: '#f08f15',
        marginLeft: moderateScale(16),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(30)
    },
    img: {
        height: scale(52),
        width: scale(52)
    },
    details: {
        width: scale(140),
        height: verticalScale(80),
        marginLeft: moderateScale(10)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(430),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        top: moderateScale(10)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(52),
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        alignItems: 'center',
        flexDirection: 'row'
    },
    scroll: {
        width: moderateScale(304),
        marginTop: moderateScale(10),
        alignSelf: 'center'
    },
    container4: {
        width: moderateScale(304),
        height: verticalScale(60),
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: moderateScale(5),
        flexDirection: 'row'
    },
    container5: {
        width: moderateScale(60),
        height: verticalScale(59),
        borderRightWidth: 1,
        borderRightColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img2: {
        width: scale(32),
        height: scale(32),
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    container6: {
        width: moderateScale(292),
        height: verticalScale(40),
        alignSelf: 'center',
        bottom: moderateScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: moderateScale(136),
        height: verticalScale(40),
        backgroundColor: '#FF3F00',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Requestmodel;
