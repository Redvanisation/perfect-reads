import { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { AuthContext } from '../providers/AuthProvider';
import { useAuthUser } from '../hooks/useAuthUser';

export default function LoginComponent() {
  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: '',
  });

  // const authContext = useContext(AuthContext);
  const { login } = useAuthUser(AuthContext);


  const handleDataChange = (name: string, value: string): void => {
    setUserLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (): Promise<void> => {
    await login(userLoginData);
  };

  return (
      <View style={styles.loginView}>
          <TextInput placeholder="Email" onChangeText={(value) => handleDataChange('email', value)} value={userLoginData.email} style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry onChangeText={(value) => handleDataChange('password', value)} value={userLoginData.password} style={styles.input} />
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
      </View>
  );
};

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
    padding: 20,
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
    borderRadius: 4,
    color: 'black',
    textAlign: 'center',
    width: '70%',
  }
});