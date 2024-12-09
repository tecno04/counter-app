//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
    label: string
    position?: 'left' | 'right'
    onPress?: () => void
    onLongPress?: () => void
}

// create a component
export default function FAB({label, onPress, onLongPress, position = 'right'} : Props){

    return (
        <Pressable
            onPress={ onPress }
            onLongPress={ onLongPress }
            style={
                ({ pressed }) => 
                [styles.floattingButton, position === 'right' ? styles.positionRight : styles.positionLeft, pressed ? { opacity: 0.5 } : { opacity: 1 } ]
            }
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{ label }</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({

    floattingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4
    },

    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20,
    }

});
