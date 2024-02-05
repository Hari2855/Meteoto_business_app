import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable,} from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const Durationmodel = ({ navigation, isVisible, closeModal, onMonthSelect }) => {
    const [checked, setChecked] = useState('September');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate1, setSelectedDate1] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [datePickerVisibleFrom, setDatePickerVisibleFrom] = useState(false);
    const [datePickerVisibleTo, setDatePickerVisibleTo] = useState(false);

    const showDatePickerFrom = () => {
        setDatePickerVisibleFrom(true);
    };

    const hideDatePickerFrom = () => {
        setDatePickerVisibleFrom(false);
    };

    const showDatePickerTo = () => {
        setDatePickerVisibleTo(true);
    };

    const hideDatePickerTo = () => {
        setDatePickerVisibleTo(false);
    };

    const handleConfirmFrom = (date) => {
        setSelectedDate(date);
        hideDatePickerFrom();
    };

    const handleConfirmTo = (date1) => {
        setSelectedDate1(date1);
        hideDatePickerTo();
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

                <Text style={styles.text1}>SELECT  DATES  (FROM - TO)</Text>

                <View style={styles.line2}></View>

                <View style={styles.container1}>
                    <Text style={styles.text2}>Select Date (From)</Text>
                    <Pressable style={styles.from} onPress={showDatePickerFrom}>
                        <Text style={{ fontSize: moderateScale(13), fontWeight: '500', color: '#333333' }}>
                            {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.container1}>
                    <Text style={styles.text2}>Select Date (To)</Text>
                    <Pressable style={styles.to} onPress={showDatePickerTo}>
                        <Text style={{ fontSize: moderateScale(13), fontWeight: '500', color: '#333333' }}>
                            {selectedDate1 ? selectedDate1.toLocaleDateString() : 'No date selected'}
                        </Text>
                    </Pressable>
                </View>

                <DateTimePickerModal
                    date={selectedDate}
                    isVisible={datePickerVisibleFrom}
                    mode="date"
                    onConfirm={handleConfirmFrom}
                    onCancel={hideDatePickerFrom}
                />

                <DateTimePickerModal
                    date={selectedDate1}
                    isVisible={datePickerVisibleTo}
                    mode="date"
                    onConfirm={handleConfirmTo}
                    onCancel={hideDatePickerTo}
                />

                <Pressable style={[styles.button, { backgroundColor: checked == false ? 'gray' : '#33CCCC' }]} onPress={closeModal}>
                    <Text style={styles.text6}>APPLY</Text>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default Durationmodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(360),
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(420),
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
    container1: {
        width: moderateScale(320),
        height: verticalScale(72),
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: moderateScale(20),
        alignSelf: 'center',
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito Sans'
    },
    from: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingLeft: moderateScale(10)
    },
    to: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingLeft: moderateScale(10)
    },
    button: {
        width: moderateScale(307),
        height: verticalScale(40),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: '25%'
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    }

})