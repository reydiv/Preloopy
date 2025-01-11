import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    Alert.alert('Success', `${product.title} has been added to the cart.`);
  };

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      Alert.alert('Success', `${product.title} has been added to your favorites.`);
    } else {
      Alert.alert('Info', `${product.title} is already in your favorites.`);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
        onPress={handleAddToFavorites}
      >
        <Text style={styles.favoriteButtonText}>
          {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#e91e63',
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButton: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
  },
  favoriteButtonActive: {
    backgroundColor: '#e91e63',
  },
  favoriteButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: '#e91e63',
    borderWidth: 1,
  },
  backButtonText: {
    color: '#e91e63',
    fontSize: 14,
  },
});

export default ProductDetail;
