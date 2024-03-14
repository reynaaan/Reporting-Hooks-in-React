import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    const { title, onPress, filled, color, bgColor } = props;
    const textColor = filled ? COLORS.white : color || COLORS.primary;
    const backgroundColor = filled ? bgColor || COLORS.secondary : 'transparent';

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor,
                borderColor: textColor,
            }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 18, color: textColor }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150,
    }
})
export default Button
