import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../assets/logo.png';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    alert('Logging in...');

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
  
      <Image source={logo} style={styles.logo} />


      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="black" 
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="black" 
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={!email || !password || error}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('Signup')}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white', 
  },
  logo: {
    width: 120, 
    height: 120,
    alignSelf: 'center', 
    marginBottom: 30,
  },
  input: {
    height: 50,
    marginBottom: 12,
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 4,
    paddingHorizontal: 10,
    color: 'black', 
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'black', 
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'black', 
  },
  signupLink: {
    color: 'black', 
    fontWeight: 'bold',
  },
});
