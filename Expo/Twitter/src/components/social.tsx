import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  comments: number;
  reposts: number;
  likes: number;
}

const Social: FC<Props> = ({ comments, reposts, likes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        <Icon name="comment-o" size={20} color="#555" /> {`${comments}`}
      </Text>
      <Text style={styles.text}>
        {" "}
        <Icon name="retweet" size={20} color="#555" /> {`${reposts}`}
      </Text>
      <Text style={styles.text}>
        {" "}
        <Icon name="heart-o" size={20} color="#555" /> {`${likes}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  text: {
    color: "#555",
    fontSize: 14,
    marginRight: 25,
  },
});

export default Social;
