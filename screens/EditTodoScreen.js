//screens/EditTodoScreen.js
import { View, Text, StyleSheet } from "react-native";

function EditTodoScreen() {
  return (
    <View style={styles.main}>
      <Text>Ici il y aura l'édition</Text>
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

export default EditTodoScreen;
