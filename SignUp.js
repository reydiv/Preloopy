import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    
    if (!username) {
      Alert.alert('Error', 'Username is required!');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Error', 'Enter a valid email address!');
      return;
    }
    if (!phoneNumber || !/^\d{10,12}$/.test(phoneNumber)) {
      Alert.alert('Error', 'Phone number must be 10-12 digits!');
      return;
    }
    if (!password || password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    if (!isChecked) {
      Alert.alert('Error', 'You must accept the Terms and Conditions!');
      return;
    }

    
    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/signup_background.png')} style={styles.backgroundImage} />
      <View style={styles.card}>
        <Text style={styles.title}>Set up your account</Text>
        <Text style={styles.subtitle}>
          Please complete all information to create your account on Preloopy
        </Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Enter your phone number"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm your password"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={20}
            fillColor="#C2185B"
            unfillColor="#FFFFFF"
            text="By clicking sign up, you agree to the Terms of Service and Privacy Policy."
            iconStyle={{ borderColor: '#C2185B', borderRadius: 4 }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={styles.checkboxText}
            isChecked={isChecked}
            onPress={(isChecked) => setIsChecked(isChecked)}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.continueButton, !isChecked && styles.disabledButton]}
          onPress={handleSignUp}
          disabled={!isChecked}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Sign In Redirect */}
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInText}>Already have an account? Sign In</Text>
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
  checkboxContainer: {
    marginBottom: 10,
  },
  checkboxText: {
    color: '#666',
    textDecorationLine: 'none',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#C2185B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    textAlign: 'center',
    color: '#C2185B',
    marginTop: 20,
  },
});

export default SignUp;
