import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Find New Love for Preloved Items',
    text: 'Join Preloopy, where preloved meets reloved. Discover unique items, make conscious choices, and be part of a community that cares for the planet.',
    image: require('./assets/onboarding1.png'),
  },
  {
    key: '2',
    title: 'Reduce, Reuse, Relove',
    text: 'Giving preloved items a second chance has never been easier. Explore, shop, and sell sustainably with Preloopy because every item deserves a new story.',
    image: require('./assets/onboarding2.png'),
  },
  {
    key: '3',
    title: 'Your Preloved Treasure Awaits',
    text: 'Preloopy connects you to a world of preloved fashion, accessories, and more. Together, let\'s reduce waste, embrace sustainability, and make every choice meaningful.',
    image: require('./assets/onboarding3.png'),
  },
];

const Onboarding = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const onDone = () => {
    navigation.replace('SignIn');
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      showSkipButton
      onSkip={onDone}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      renderNextButton={() => <Text style={styles.button}>Next</Text>}
      renderDoneButton={() => <Text style={styles.button}>Start</Text>}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#C2185B',
    borderRadius: 20,
  },
  dot: {
    backgroundColor: '#bbb',
  },
  activeDot: {
    backgroundColor: '#C2185B',
  },
});

export default Onboarding;