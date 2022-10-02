import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from '../components/LoginComponent';
import SignUpComponent from '../components/SignUpComponent';

const Stack = createNativeStackNavigator();

export default function LoginNavigator(): JSX.Element {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                options={{ headerShown: false }}
                component={LoginComponent}
            />
            <Stack.Screen
                name='Sign up'
                options={{ headerShown: false }}
                component={SignUpComponent}
            />
        </Stack.Navigator>
    );
}
