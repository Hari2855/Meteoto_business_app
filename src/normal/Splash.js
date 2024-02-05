import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Logoscreen')
        }, 3000)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
        </View>
    )
}

export default Splash