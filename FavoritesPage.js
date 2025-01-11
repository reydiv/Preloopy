import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState([
    {
      id: '1',
      name: 'The Adorable Labubu',
      price: 'Rp 100.000,00',
      image: require('./assets/product4.png'),
    },
    {
      id: '2',
      name: 'Adidas Sneakers',
      price: 'Rp 750.000,00',
      image: require('./assets/product1.png'),
    },
    {
      id: '3',
      name: 'Nike Air Max',
      price: 'Rp 1.200.000,00',
      image: require('./assets/product2.png'),
    },
    {
      id: '4',
      name: 'Casio Digital Watch',
      price: 'Rp 500.000,00',
      image: require('./assets/product3.png'),
    },
  ]);

  
  const removeFromFavorites = (id) => {
    Alert.alert('Remove Favorite', 'Are you sure you want to remove this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Favorites</Text>
      <FlatList
        data={favoriteItems}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeFromFavorites(item.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No favorites yet!</Text>}
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 8,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  itemPrice: {
    color: '#C2185B',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  removeButton: {
    backgroundColor: '#C2185B',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 32,
  },
});

export default FavoritesPage;
