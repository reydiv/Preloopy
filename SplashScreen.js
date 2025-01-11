import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/preloopy_logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SplashScreen;