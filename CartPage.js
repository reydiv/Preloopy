import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartPage = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Strap Apple Watch',
      price: 'Rp 55.000,00',
      availability: 'Available in 3 days',
      image: require('./assets/product1.png'),
      selected: false,
    },
    {
      id: '2',
      name: 'Sonny Angel Unsealed',
      price: 'Rp 40.000,00',
      availability: 'In Stock',
      image: require('./assets/product2.png'),
      selected: false,
    },
    {
      id: '3',
      name: 'Coquette Slippers',
      price: 'Rp 25.000,00',
      availability: 'In Stock',
      image: require('./assets/product3.png'),
      selected: false,
    },
    {
      id: '4',
      name: 'The Adorable Labubu',
      price: 'Rp 100.000,00',
      availability: 'Out of stock',
      image: require('./assets/product4.png'),
      selected: false,
    },
  ]);

  const toggleSelectItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + parseInt(item.price.replace(/[^\d]/g, '')), 0);
  };

  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    if (selectedItems.length === 0) {
      Alert.alert('No items selected', 'Please select at least one item to proceed.');
      return;
    }
    navigation.navigate('OrderPage', { selectedItems, totalPrice: calculateTotal() });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemAvailability}>{item.availability}</Text>
            </View>
            <TouchableOpacity
              style={[styles.checkbox, { backgroundColor: item.selected ? '#C2185B' : '#fff' }]}
              onPress={() => toggleSelectItem(item.id)}
            >
              {item.selected && <Text style={styles.checkboxTick}>✔</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteItem(item.id)}
            >
              <Text style={styles.deleteText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.selectAllButton}
          onPress={() => {
            const allSelected = cartItems.every((item) => item.selected);
            setCartItems((prevItems) =>
              prevItems.map((item) => ({ ...item, selected: !allSelected }))
            );
          }}
        >
          <Text style={styles.selectAllText}>
            {cartItems.every((item) => item.selected) ? 'Deselect All' : 'Select All'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>Rp {calculateTotal()},00</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#C2185B',
    marginVertical: 4,
  },
  itemAvailability: {
    fontSize: 12,
    color: '#666',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#C2185B',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxTick: {
    color: '#fff',
    fontSize: 14,
  },
  deleteButton: {
    marginLeft: 8,
  },
  deleteText: {
    fontSize: 16,
    color: '#C2185B',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  selectAllButton: {
    flex: 1,
  },
  selectAllText: {
    fontSize: 14,
    color: '#C2185B',
  },
  totalText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#C2185B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartPage;
