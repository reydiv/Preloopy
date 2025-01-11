import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import SplashScreen from './SplashScreen';
import Onboarding from './Onboarding';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import CartPage from './CartPage';
import OrderPage from './OrderPage';
import FavoritesPage from './FavoritesPage';
import ProfilePage from './ProfilePage';
import ShipmentPage from './ShipmentPage';
import ProductPage from './ProductPage';
import ProductDetail from './ProductDetail';
import EditProfile from './EditProfile';

const Stack = createStackNavigator();

const TabBar = ({ navigation, currentTab }) => (
  <View style={styles.tabBar}>
    <TouchableOpacity
      style={styles.tabButton}
      onPress={() => navigation.navigate('Home')}
    >
      <Text style={[styles.tabText, currentTab === 'Home' && styles.activeTabText]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.tabButton}
      onPress={() => navigation.navigate('CartPage')}
    >
      <Text style={[styles.tabText, currentTab === 'CartPage' && styles.activeTabText]}>Cart</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.tabButton}
      onPress={() => navigation.navigate('FavoritesPage')}
    >
      <Text style={[styles.tabText, currentTab === 'FavoritesPage' && styles.activeTabText]}>Favorites</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.tabButton}
      onPress={() => navigation.navigate('ProfilePage')}
    >
      <Text style={[styles.tabText, currentTab === 'ProfilePage' && styles.activeTabText]}>Profile</Text>
    </TouchableOpacity>
  </View>
);

const HomeWithTabBar = ({ navigation }) => (
  <>
    <Home />
    <TabBar navigation={navigation} currentTab="Home" />
  </>
);

const CartWithTabBar = ({ navigation }) => (
  <>
    <CartPage />
    <TabBar navigation={navigation} currentTab="CartPage" />
  </>
);

const FavoritesWithTabBar = ({ navigation }) => (
  <>
    <FavoritesPage />
    <TabBar navigation={navigation} currentTab="FavoritesPage" />
  </>
);

const ProfileWithTabBar = ({ navigation }) => (
  <>
    <ProfilePage />
    <TabBar navigation={navigation} currentTab="ProfilePage" />
  </>
);

const ProductPageWithTabBar = ({ navigation }) => (
  <>
    <ProductPage />
    <TabBar navigation={navigation} currentTab="Home" />
  </>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeWithTabBar} />
        <Stack.Screen name="ProductPage" component={ProductPageWithTabBar} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="CartPage" component={CartWithTabBar} />
        <Stack.Screen name="OrderPage" component={OrderPage} />
        <Stack.Screen name="FavoritesPage" component={FavoritesWithTabBar} />
        <Stack.Screen name="ProfilePage" component={ProfileWithTabBar} />
        <Stack.Screen name="ShipmentPage" component={ShipmentPage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabText: {
    color: '#C2185B',
    fontWeight: 'bold',
  },
});
