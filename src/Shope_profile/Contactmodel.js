import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Contactmodel = ({ isVisible, onCancel, onConfirm, }) => {
    return (
        <Modal isVisible={isVisible} backdropOpacity={0.1} animationIn={'fadeInRight'} animationOut={'fadeOutRight'}>
            <View style={styles.modalContent}>
                <Text style={{ fontSize: moderateScale(10),}}>{`Contact meteoto \nfor any changes.`}</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#ffffff',
        width: moderateScale(100),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        bottom: moderateScale(270),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: moderateScale(35)
    },
    modalText: {
        fontSize: moderateScale(16),
        marginBottom: (20),
        color: '#ffffff',
        fontFamily: 'Nunito Sans'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: moderateScale(8),
        marginTop: moderateScale(20)
    },
    modalButton1: {
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButton2: {
        backgroundColor: '#33CCCC',
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito'
    },
});

export default Contactmodel;
