import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './src/screens/Homepage';

import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions // optional
} from 'react-native-animated-nav-tab-bar'

import Ionicons from 'react-native-vector-icons/Ionicons';

interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

// function Foo() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }

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

// const Tab = createBottomTabNavigator();
const Tab = AnimatedTabBarNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {isLoggedIn ? (
                <NavigationContainer>
                    <Tab.Navigator
                      tabBarOptions={{
                        // activeTintColor: "#2F7C6E",
                        inactiveTintColor: "#222222"
                      }}
                      appearance={{
                        shadow: true,
                        // whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
                        // dotSize: DotSize.SMALL
                      }}
                      screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }: ITabBarIconProps) => {
                          let iconName;
                          // size = focused ? size + 10 : size;
              
                          if (route.name === 'Home') {
                            iconName = focused
                              ? 'ios-home'
                              : 'ios-home-outline';
                          } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                          }
              
                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                      })}
                    >
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
