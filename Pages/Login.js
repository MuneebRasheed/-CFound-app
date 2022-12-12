import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View>
            <View className='upperPart'>

            </View>
            <View className='lowerPart'>

            </View>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    upperPart: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%'
    },
    lowerPart: {
        height: '50%'
    }
});