import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import Feed from "./src/screens/feed";

export default function App() {
  const data = [
    {
      id: "1",
      avatar: "https://source.unsplash.com/random",
      username: "Gabriel Hepper",
      comments: 0,
      reposts: 0,
      likes: 0,
      text: "Uma imagem estranha.",
      image: "https://source.unsplash.com/random",
    },
    {
      id: "2",
      avatar: "https://source.unsplash.com/random",
      username: "Toninho",
      comments: 4,
      reposts: 0,
      likes: 3,
      text: "Uma imagem não estranha.",
      image: "https://source.unsplash.com/random",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Feed
              avatar={item.avatar}
              username={item.username}
              comments={item.comments}
              likes={item.likes}
              reposts={item.reposts}
              text={item.text}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    alignItems: "center",
    justifyContent: "center",
  },
});
