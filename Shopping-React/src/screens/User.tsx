import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { user } = useContext(UserContext);
  const { logout } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user!.username}</Text>
      <Image style={styles.image} source={{ uri: user!.image }} />
      <Text style={styles.name}>
        {user!.firstName} {user!.lastName}
      </Text>
      <Text style={styles.email}>{user!.email}</Text>

      <Button onPress={logout} title="Logout" />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
});