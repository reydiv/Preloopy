import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', onPress: () => navigation.navigate('SignIn') },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('./assets/profile_pic.png')} 
          style={styles.profilePicture}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>Kaluna Isabelle</Text>
          <Text style={styles.userEmail}>kaluna.isabelle@gmail.com</Text>
        </View>
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* My Order Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Order</Text>
        <View style={styles.orderStatusContainer}>
          {["On Progress", "Sent", "Canceled", "Unpaid", "Done"].map((status, index) => (
            <TouchableOpacity key={index} style={styles.orderStatus}>
              <Text style={styles.orderText}>{status}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => navigation.navigate('ShipmentPage')}>
            <Text style={styles.historyLink}>See all history</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Links */}
      <View style={styles.linksContainer}>
        {[
          { title: "Terms and Conditions", description: "Read the Terms and Conditions" },
          { title: "Privacy Policy", description: "How Preloopy Protects Your Data" },
          { title: "Setting", description: "Language settings, notifications, etc" },
          { title: "Followed Stores", description: "List of Followed Seller Stores" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.linkItem}>
            <Text style={styles.linkTitle}>{item.title}</Text>
            <Text style={styles.linkDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* FAQ Section */}
      <View style={styles.faqContainer}>
        <Text style={styles.sectionTitle}>FAQ</Text>
        {[
          "How can I make a purchase on Preloopy?",
          "Does Preloopy allow live sales?",
          "What payment methods are supported?",
        ].map((question, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{question}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  profileInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
  },
  editProfileButton: {
    marginTop: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e91e63',
    borderRadius: 8,
  },
  editProfileButtonText: {
    color: '#e91e63',
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderStatusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  orderStatus: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    width: '30%',
  },
  orderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e91e63',
  },
  historyLink: {
    fontSize: 12,
    color: '#e91e63',
    textAlign: 'right',
    marginTop: 8,
  },
  linksContainer: {
    marginBottom: 24,
  },
  linkItem: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginVertical: 4,
    borderRadius: 8,
  },
  linkTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  linkDescription: {
    fontSize: 12,
    color: '#888',
  },
  faqContainer: {
    marginBottom: 16,
  },
  faqItem: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    marginVertical: 4,
    borderRadius: 8,
  },
  faqQuestion: {
    fontSize: 14,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#e91e63',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
