//screens/CreateTodoScreen.js
import { View, Text, StyleSheet } from "react-native";

function CreateTodoScreen() {
  return (
    <View style={styles.main}>
      <Text>Ici il y aura la création</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateTodoScreen;
