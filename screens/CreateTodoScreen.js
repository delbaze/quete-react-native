//screens/CreateTodoScreen.js
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import storage from "../lib/storage";
function CreateTodoScreen({ navigation }) {
  const [state, setState] = useState("");

  const clear = () => {
    setState(""); //remise à zéro de l'input
    navigation.goBack(); //on revient à la liste
  };
  const handleAddTodo = async () => {
    const oldList = await storage.load({ key: "todoslist" });
    storage.save({
      key: "todoslist",
      data: [...oldList, { status: "undone", value: state }],
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
          title="Ajouter la tâche"
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
          onPress={handleAddTodo}
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

export default CreateTodoScreen;
