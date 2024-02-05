import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { RadioButton } from 'react-native-paper';

const Reasonmodel = ({ navigation, isVisible, closeModal, onSelectFilter }) => {
    const [checked, setChecked] = useState('In Progress');
    const [text, setText] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)

    const handleApply = () => {
        if (checked !== 'false') {
            closeModal();
        }
    };


    const toggleModal = () => {
        if (checked !== 'false') {
            setModalVisible(!isModalVisible);
        }
    };



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

                <Text style={styles.text}>{`Please, let us know why you are not able \nto fulfil the request.`}</Text>

                <View style={styles.line2}></View>

                <View style={[styles.radiocontainer, { marginTop: moderateScale(10),}]}>
                    <RadioButton
                        value="In Progress"
                        status={checked === 'In Progress' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('In Progress')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Out of Stock</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Delivered"
                        status={checked === 'Delivered' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Delivered')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Technical Compatibility Issues</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Canelled"
                        status={checked === 'Canelled' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Canelled')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Regulatory Compliance</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Returned"
                        status={checked === 'Returned' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Returned')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Unforeseen Demand Surge</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Accepted1"
                        status={checked === 'Accepted1' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Accepted1')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Reason not listed</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Accepted"
                        status={checked === 'Accepted' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Accepted')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>Other reason</Text>
                </View>


                <TextInput style={[styles.button, {backgroundColor: '#ffffff', borderRadius: moderateScale(8), paddingLeft: moderateScale(20), marginTop: moderateScale(10)}]} placeholder='write your reason hear' placeholderTextColor={'#B8B8B8'}></TextInput>

                <Pressable style={[styles.button, { backgroundColor: checked == false ? 'gray' : '#33CCCC', top: moderateScale(20) }]} onPress={handleApply}>
                    <Text style={styles.text6}>APPLY</Text>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default Reasonmodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(360),
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(580),
    },
    shape: {
        height: verticalScale(4),
        width: scale(60),
        backgroundColor: '#707070',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        alignSelf: 'center'
    },
    text: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        fontFamily: 'Nunito Sans',
        marginTop: moderateScale(30)
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
        width: moderateScale(320),
        height: verticalScale(40),
        marginLeft: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: moderateScale(10)
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
        width: moderateScale(320),
        height: verticalScale(48),
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