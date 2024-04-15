import { Text, View, StyleSheet, Button } from "react-native";
import { DetailsStackProps } from "../types/navigation";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import React from "react";


const Details = ({ navigation }: DetailsStackProps) => {
  const { product, insertCart } = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Details</Text>
        <Text style={styles.description}>Nome: {product.name}</Text>
        <Text style={styles.description}>Descrição: {product.description}</Text>
        <Text style={styles.description}>Valor: {product.cost}</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
        <Text></Text>
        <Button
          title="Adicionar ao carrinho"
          onPress={() => insertCart(product)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderWidth: 3,
    padding: 20,
    width: "90%",
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 18,
  },
});

export default Details;
