import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { dark, light } from "../constants/theme";
import React from "react";


const Cart = () => {
  const { cart } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "dark" ? dark.background : light.background,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });

  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Cart;
