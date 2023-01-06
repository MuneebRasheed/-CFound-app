import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({ placeholder, secureTextEntry, setData, data }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={setData}
            value={data}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#F7F8F9',
        paddingHorizontal: 40,
        paddingVertical: '1.5%',
        borderRadius: 8,
        fontSize: 14,
        backgroundColor: '#F7F8F9',
        width: '80%',
        marginBottom: 10,
        color: 'grey'

    }
})