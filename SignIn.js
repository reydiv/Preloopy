import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    
    const validEmail = 'jepri';
    const validPassword = '123';

    if (email === validEmail && password === validPassword) {
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/signin_background.png')} style={styles.backgroundImage} />
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Sign in to continue to Preloopy</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none" 
          keyboardType="email-address" 
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  card: {
    flex: 1,
    marginTop: -50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#C2185B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    color: '#C2185B',
    marginTop: 20,
  },
});

export default SignIn;
