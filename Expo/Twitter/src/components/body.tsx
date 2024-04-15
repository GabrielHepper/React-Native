import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  text: string;
  image: string;
}

const Body: FC<Props> = ({ text, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#333",
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    resizeMode: "cover",
  },
});

export default Body;
