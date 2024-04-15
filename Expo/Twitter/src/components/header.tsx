import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  avatar: string;
  username: string;
}

const Header: FC<Props> = ({ avatar, username }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.text}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  text: {
    color: "#333", 
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
