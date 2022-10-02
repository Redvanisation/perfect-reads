import React, { useCallback } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    SafeAreaView,
    StyleSheet,
    Pressable,
} from 'react-native';

export default function SignUpComponent({ navigation }: any): JSX.Element {
    const navigateToLoginScreen = useCallback(() => {
        navigation.navigate('Login');
    }, []);

    return (
        <SafeAreaView style={styles.loginView}>
            <TextInput
                placeholder='First Name'
                // onChangeText={value => handleDataChange('email', value)}
                // value={userLoginData.email}
                style={styles.input}
            />
            <TextInput
                placeholder='Last Name'
                // onChangeText={value => handleDataChange('email', value)}
                // value={userLoginData.email}
                style={styles.input}
            />
            <TextInput
                placeholder='Email'
                // onChangeText={value => handleDataChange('email', value)}
                // value={userLoginData.email}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry
                // onChangeText={value => handleDataChange('password', value)}
                // value={userLoginData.password}
                style={styles.input}
            />
            <TouchableOpacity
                // onPress={handleLogin}
                style={styles.loginButton}
            >
                <Text style={styles.loginButtonText}>Sign Up!</Text>
            </TouchableOpacity>
            <View style={styles.textWrapper}>
                <Text>Already a member? </Text>
                <Pressable onPress={navigateToLoginScreen} style={styles.login}>
                    <Text style={styles.login}>Login!</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: '#2296F3',
        color: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'black',
        textAlign: 'center',
        width: '70%',
    },
    textWrapper: {
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    login: {
        color: '#2296F3',
        padding: 0,
        margin: 0,
        lineHeight: 0,
    },
});
