import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Changessaved = ({ isVisible, onCancel, onConfirm, }) => {
    return (
        <Modal isVisible={isVisible} backdropOpacity={0.1} animationIn={'fadeIn'} animationOut={'fadeOut'}>
            <View style={styles.modalContent}>
                <Image source={require('../Icons/Images/icon.png')} style={styles.img}/>
                <Text style={styles.modalText}>CHANGES ARE SAVED!</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#99CC33',
        width: moderateScale(280),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        marginBottom: '205%',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    modalText: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito',
        left: moderateScale(30)
    },
    img: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(40)
    }
});

export default Changessaved;
