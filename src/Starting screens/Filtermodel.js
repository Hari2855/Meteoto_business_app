import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { RadioButton } from 'react-native-paper';

const Filtermodel = ({ navigation, isVisible, closeModal, onSelectFilter }) => {
    const [checked, setChecked] = useState('In Progress');
    const [text, setText] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)

    const handleApply = () => {
        if (checked !== 'false') {
            onSelectFilter(checked);
            closeModal();
        }
    };


    const toggleModal = () => {
        if (checked != false) {
            setModalVisible(!isModalVisible)
        }
    }


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end', }}
        >

            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>
                
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>F I L T E R  B Y  O R D E R  S T A T U S</Text>
                <Pressable>
                <Text style={[styles.text1, {color: '#33CCCC', marginLeft: moderateScale(70)}]}>C L E A R</Text>
                </Pressable>
                </View>


                <View style={styles.line2}></View>

                <View style={[styles.radiocontainer, { marginTop: moderateScale(10) }]}>
                    <RadioButton
                        value="In Progress"
                        status={checked === 'In Progress' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('In Progress')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>In Progress</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Delivered"
                        status={checked === 'Delivered' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Delivered')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Delivered</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Canelled"
                        status={checked === 'Canelled' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Canelled')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Canelled</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Returned"
                        status={checked === 'Returned' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Returned')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Returned</Text>
                </View>

                <Text style={[styles.text1, {marginTop: moderateScale(20)}]}>C H E C K   A U T O P A R T S  R E Q U E S T  S T A T U S</Text>

                 <View style={styles.line2}></View>

                <View style={[styles.radiocontainer, {marginTop: moderateScale(15)}]}>
                    <RadioButton
                        value="Accepted"
                        status={checked === 'Accepted' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Accepted')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Accepted</Text>
                </View>

                <Pressable style={[styles.button, { backgroundColor: checked == false ? 'gray' : '#33CCCC' }]} onPress={handleApply}>
                    <Text style={styles.text6}>APPLY</Text>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default Filtermodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(360),
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(450),
    },
    shape: {
        height: verticalScale(4),
        width: scale(40),
        backgroundColor: '#337070',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        alignSelf: 'center'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(30),
        fontFamily: 'Nunito Sans'
    },
    line2: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#424242',
        marginTop: moderateScale(15)
    },
    radiocontainer: {
        width: moderateScale(200),
        height: verticalScale(40),
        marginLeft: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito Sans',
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        alignSelf: 'center',
        paddingLeft: moderateScale(20),
        fontSize: moderateScale(12),
    },
    button: {
        width: moderateScale(307),
        height: verticalScale(40),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(30)
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    }

})