//screens/TodosListScreen.js
import { View, Text, StyleSheet } from "react-native";

function TodosListScreen() {
  return (
    <View style={styles.main}>
      <Text>Ici il y aura la liste des Todos</Text>
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

export default TodosListScreen;
