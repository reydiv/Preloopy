
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleAddToCart = (productName) => {
    Alert.alert('Success', `${productName} has been added to the cart.`);
  };

  const handleSeeAll = () => {
    navigation.navigate('ProductPage'); // Pastikan ada navigasi ke ProductPage
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product }); // Kirim data produk ke halaman detail
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Night,</Text>
          <Text style={styles.username}>Kaluna Isabelle</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('./assets/profile_pic.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search"
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.notificationIcon}>
          <Image source={require('./assets/bell_icon.png')} style={styles.bellIcon} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>45</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.categories} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.categoryButtonActive}>
          <Text style={styles.categoryTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Home & Living</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Sports</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Live Sale</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.liveSaleCard}>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Live</Text>
          </View>
          <Text style={styles.liveViewers}>12K</Text>
          <Image source={require('./assets/live_stream_1.png')} style={styles.liveImage} />
        </View>
        <View style={styles.liveSaleCard}>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Live</Text>
          </View>
          <Text style={styles.liveViewers}>6K</Text>
          <Image source={require('./assets/live_stream_2.png')} style={styles.liveImage} />
        </View>
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recently Product</Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() =>
            handleProductPress({
              title: 'The Secret Garden',
              description: 'A beautiful book with amazing illustrations.',
              image: require('./assets/product1.png'),
            })
          }
        >
          <Image source={require('./assets/product1.png')} style={styles.productImage} />
          <Text style={styles.productTitle}>The Secret Garden</Text>
          <Text style={styles.productPrice}>Rp75,000.00</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart('The Secret Garden')}
          >
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() =>
            handleProductPress({
              title: 'Antique Pedals',
              description: 'An exclusive antique pedal collection.',
              image: require('./assets/product2.png'),
            })
          }
        >
          <Image source={require('./assets/product2.png')} style={styles.productImage} />
          <Text style={styles.productTitle}>Antique Pedals</Text>
          <Text style={styles.productPrice}>Rp9,000,000.00</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart('Antique Pedals')}
          >
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() =>
            handleProductPress({
              title: 'The Adorable Lab',
              description: 'A cute lab figurine for your collection.',
              image: require('./assets/product3.png'),
            })
          }
        >
          <Image source={require('./assets/product3.png')} style={styles.productImage} />
          <Text style={styles.productTitle}>The Adorable Lab</Text>
          <Text style={styles.productPrice}>Rp100,000.00</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart('The Adorable Lab')}
          >
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 18,
    color: '#333',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
  },
  notificationIcon: {
    position: 'relative',
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#e91e63',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryText: {
    color: '#333',
  },
  categoryTextActive: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  liveSaleCard: {
    width: 200,
    height: 120,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  liveText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  liveViewers: {
    position: 'absolute',
    top: 8,
    right: 8,
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  liveImage: {
    width: '100%',
    height: '100%',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  seeAll: {
    color: '#e91e63',
    fontSize: 14,
  },
  productCard: {
    width: 150,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 8,
    marginRight: 16,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 14,
    marginVertical: 4,
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Home;
