import { Button, StyleSheet, Text, View } from "react-native";
import { ProductStackProps } from "../types/navigation";
import { Product as ProductType } from "../types/product";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ThemeContext } from "../contexts/ThemeContext";
import React from "react";


const Product = ({ navigation }: ProductStackProps) => {
  const { setProduct } = useContext(ProductContext);
  const { setTheme } = useContext(ThemeContext);

  // setTheme("dark");

  const productItem: ProductType = {
    id: "a1b2c3d4",
    name: "Notebook",
    description: "MacBook i9 16gb",
    cost: 12000.5,
  };

  const goDetails = () => {
    setProduct(productItem);
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <Button title="Detalhes" onPress={goDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Product;
