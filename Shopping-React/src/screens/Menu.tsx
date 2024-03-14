import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../types/Products";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../components/ItemCard";
import { showError } from "../components/Toast";
import { UserContext } from "../contexts/UserContext";

const Menu = () => {
  const { getCart } = useContext(CartContext);
  const { getUser } = useContext(UserContext);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await getCart();
        await getUser();
        const url = "https://dummyjson.com/products";

        const response = await axios.get<{ products: ProductDTO[] }>(url);
        setProducts(response.data.products);
      } catch (error) {
        showError("Não foi possível recuperar os produtos");
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <ItemCard product={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemWrapper: {
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});


export default Menu;