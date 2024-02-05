import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { RadioButton } from 'react-native-paper';

const Monthmodel = ({ navigation, isVisible, closeModal, onMonthSelect }) => {
    const [checked, setChecked] = useState('September');
    const [text, setText] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)

    const handleApply = () => {
        if (checked !== 'false') {
            onMonthSelect(checked)
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

                <Text style={styles.text1}>S E L E C T   M O N T H</Text>

                <View style={styles.line2}></View>

                <View style={[styles.radiocontainer, {marginTop: moderateScale(10)}]}>
                    <RadioButton
                        value="September"
                        status={checked === 'September' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('September')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>September</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="August"
                        status={checked === 'August' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('August')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>August</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="July"
                        status={checked === 'July' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('July')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>July</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="June"
                        status={checked === 'June' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('June')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>June</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="May"
                        status={checked === 'May' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('May')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>May</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="April"
                        status={checked === 'April' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('April')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>April</Text>
                </View>

                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="March"
                        status={checked === 'March' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('March')}
                        color='#33CCCC'
                        uncheckedColor='#cccccc'
                    />

                    <Text style={styles.text2}>March</Text>
                </View>

                <Pressable style={[styles.button, { backgroundColor: checked == false ? 'gray' : '#33CCCC' }]} onPress={handleApply}>
                    <Text style={styles.text6}>APPLY</Text>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default Monthmodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(360),
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(480),
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