import React, { useContext, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  YellowBox,
} from "react-native";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, getCart, removeProduct } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => removeProduct(item.product.id)}
              style={styles.removeButton}
            >
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: item.product.thumbnail }}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.product.title}</Text>
              <Text style={styles.itemPrice}>
                R$ {item.product.price.toFixed(2)}
              </Text>
              <Text style={styles.itemQuantity}>
                Quantidade: {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentTouch}>Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  removeButton: {
    backgroundColor: "#dc3545",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  removeText: {
    color: "#fff",
    fontSize: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#666",
  },
  paymentTouch: {
    fontSize: 16,
    color: "yellow",
  },
  paymentButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "black",
    width: 90,
    height: 30,
    borderRadius: 25,
  },
});
