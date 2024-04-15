import { SafeAreaView, View, StyleSheet } from "react-native";
import React, { FC } from "react";
import Header from "../components/header";
import Body from "../components/body";
import Social from "../components/social";

interface Props {
  avatar: string;
  username: string;
  comments: number;
  reposts: number;
  likes: number;
  text: string;
  image: string;
}

const Feed: FC<Props> = ({
  avatar,
  username,
  text,
  image,
  comments,
  reposts,
  likes,
}) => {
  return (
    <View style={styles.container}>
      <Header avatar={avatar} username={username} />
      <Body text={text} image={image} />
      <Social comments={comments} reposts={reposts} likes={likes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    alignItems: "center",
    marginVertical: 15,
    borderBottomEndRadius: 10,
    margin: 10,
    width: 400,
    height: 400,
    padding: 15,
    shadowColor: "white",
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default Feed;
