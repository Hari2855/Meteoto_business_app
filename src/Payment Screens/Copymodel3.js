import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { RadioButton } from 'react-native-paper';

const Copymodel3 = ({ navigation, isVisible, closeModal, }) => {


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
                <Text style={{ fontSize: moderateScale(10) }}>Copied</Text>
            </Pressable>
        </Modal>
    );
}

export default Copymodel3

const styles = StyleSheet.create({
    container: {
        width: moderateScale(80),
        backgroundColor: '#ffffff',
        elevation: 5,
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        bottom: '30%',
        right: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#666666'
    },
})