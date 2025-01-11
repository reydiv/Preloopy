import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: '1',
    title: 'The Secret Garden',
    description: 'A beautiful book with amazing illustrations.',
    price: 'Rp75,000.00',
    image: require('./assets/product1.png'),
  },
  {
    id: '2',
    title: 'Antique Pedals',
    description: 'An exclusive antique pedal collection.',
    price: 'Rp9,000,000.00',
    image: require('./assets/product2.png'),
  },
  {
    id: '3',
    title: 'The Adorable Lab',
    description: 'A cute lab figurine for your collection.',
    price: 'Rp100,000.00',
    image: require('./assets/product3.png'),
  },
];

const ProductPage = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductPress(item)}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productList: {
    alignItems: 'center',
  },
  productCard: {
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProductPage;
