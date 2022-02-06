import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './src/screens/Homepage';

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function Foo() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const LoginComponent = ({ setIsLoggedIn }: any) => {
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <View style={styles.loginView}>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Press to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const Tab = createBottomTabNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {isLoggedIn ? (
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen
                            name='Home'
                            component={Homepage}
                            options={{ headerShown: false }}
                        />
                        <Tab.Screen name='Settings' component={SettingsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            ) : (
                <LoginComponent setIsLoggedIn={setIsLoggedIn} />
            )}
        </>
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
      // backgroundColor: 'lightgray',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButton: {
      backgroundColor: '#2296F3',
      color: '#fff',
      padding: 20,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    }
});
