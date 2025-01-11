import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, TextInput } from 'react-native';

const OrderPage = ({ route, navigation }) => {
  const { selectedItems, totalPrice } = route.params;

  const handleBuyNow = () => {
    Alert.alert('Success', 'Your order has been placed successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('CartPage') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Details</Text>

      {/* Customer Information */}
      <View style={styles.customerInfo}>
        <Text style={styles.sectionTitle}>Customer Information</Text>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Phone Number" style={styles.input} keyboardType="phone-pad" />
        <TextInput placeholder="Shipping Address" style={[styles.input, { height: 80 }]} multiline />
      </View>

      {/* Product List */}
      <Text style={styles.sectionTitle}>Products</Text>
      <FlatList
        data={selectedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* Total Price */}
      <Text style={styles.totalPrice}>Total: Rp {totalPrice},00</Text>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  customerInfo: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    fontSize: 14,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
  },
  itemPrice: {
    color: '#C2185B',
    marginVertical: 4,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  buyButton: {
    backgroundColor: '#C2185B',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buyText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default OrderPage;
