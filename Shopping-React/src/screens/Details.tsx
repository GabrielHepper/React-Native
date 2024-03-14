import { Image, StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { useRoute } from "@react-navigation/native";
import { CartContext } from "../contexts/CartContext";

const Details = () => {
  const route = useRoute();
  const { title, description, images, price } = route.params as ProductDTO;
  const { addProduct } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: images[0] }} />
      <Text style={styles.price}>
        {"R$"}
        {price}
        {",00"}
      </Text>
      <Text style={styles.description}>{description}</Text>

      <Button
        onPress={() => addProduct(route.params as ProductDTO)}
        title="Adicionar ao carrinho"
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
