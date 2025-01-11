import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ShipmentPage = () => {
  const orders = [
    {
      id: '1',
      product: 'Strap Apple Watch',
      status: 'Delivered',
      price: 'Rp 55.000,00',
      image: require('./assets/product1.png'),
    },
    {
      id: '2',
      product: 'Sonny Angel Unsealed',
      status: 'In Transit',
      price: 'Rp 40.000,00',
      image: require('./assets/product2.png'),
    },
    {
      id: '3',
      product: 'Coquette Slippers',
      status: 'Canceled',
      price: 'Rp 25.000,00',
      image: require('./assets/product3.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order History</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.orderDetails}>
              <Text style={styles.productName}>{item.product}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.orderStatus}>{item.status}</Text>
            </View>
          </View>
        )}
      />
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
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 8,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  orderDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 12,
    color: '#C2185B',
    marginVertical: 4,
  },
  orderStatus: {
    fontSize: 12,
    color: '#666',
  },
});

export default ShipmentPage;
