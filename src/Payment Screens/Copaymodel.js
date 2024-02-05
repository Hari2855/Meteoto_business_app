import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'


const Copymodel = ({ navigation, isVisible, closeModal,}) => {


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.1}
            animationIn="fadeInDown"
            animationOut="fadeOutUp"
            style={{ alignSelf: 'center', justifyContent: 'flex-end', }}
        >

            <Pressable style={styles.container} onPress={closeModal}>
                <Text style={{fontSize: moderateScale(10)}}>Copied</Text>
            </Pressable>
        </Modal>
    );
}

export default Copymodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(80),
        backgroundColor: '#ffffff',
        elevation: 5,
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        bottom: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#666666'
    },
})