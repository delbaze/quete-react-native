//screens/EditTodoScreen.js
import { View, StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useEffect, useState } from "react";
import storage from "../lib/storage";
function EditTodoScreen({ navigation, route }) {
  const [state, setState] = useState("");
  const clear = () => {
    setState(""); //remise à zéro de l'input
    navigation.goBack(); //on revient à la liste
  };

  const getTodosFromList = async () => {
    const todos = await storage.load({ key: "todoslist" });
    setState(todos[route.params.index].value);
  };
  useEffect(() => {
    getTodosFromList();
  }, []);

  const handleEditTodo = async () => {
    const todos = await storage.load({ key: "todoslist" });
    todos[route.params.index].value = state;
    storage.save({
      key: "todoslist",
      data: todos,
    });
    clear();
  };
  return (
    <View style={styles.main}>
      <Input
        placeholder="Indiquez votre tâche ici..."
        leftIcon={{ type: "ionicons", name: "rocket" }}
        onChangeText={(value) => setState(value)}
        value={state}
      />
      <View style={styles.buttons}>
        <Button
          title="Annuler"
          buttonStyle={{
            borderColor: "blue",
          }}
          type="clear"
          raised
          titleStyle={{ color: "blue" }}
          containerStyle={{
            width: 100,
            marginVertical: 10,
          }}
          onPress={clear}
        />
        <Button
          title="Editer la tâche"
          buttonStyle={{
            borderColor: "blue",
          }}
          disabled={!state.length}
          type="outline"
          raised
          titleStyle={{ color: "blue" }}
          containerStyle={{
            width: 200,
            marginVertical: 10,
          }}
          onPress={handleEditTodo}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    marginTop: 50,
  },
  buttons: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
});

export default EditTodoScreen;
