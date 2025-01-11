import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('Kaluna Isabelle');
  const [email, setEmail] = useState('kaluna.isabelle@gmail.com');
  const [profilePicture, setProfilePicture] = useState(require('./assets/profile_pic.png'));

  const handleSave = () => {
    Alert.alert('Success', 'Profile updated successfully!');
    navigation.goBack();
  };

  const handleChangePicture = () => {
    Alert.alert('Change Picture', 'This feature is under development.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      
      {/* Profile Picture Section */}
      <TouchableOpacity onPress={handleChangePicture}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <Text style={styles.changePictureText}>Change Picture</Text>
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
  },
  changePictureText: {
    fontSize: 14,
    color: '#e91e63',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#e91e63',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;
