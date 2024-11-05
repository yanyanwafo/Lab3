import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="black"
      />

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => {
          navigation.navigate('Login'); 
        }}
        disabled={!email} 
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Login')}
      >
        Back to Login
      </Text>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
  resetButton: {
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
