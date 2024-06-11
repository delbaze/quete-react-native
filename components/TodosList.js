import { ScrollView, StyleSheet, Alert } from "react-native";
import { Icon, ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSettings } from "./SettingsProvider";

const TodosList = ({ list, changeCheck, deleteTodo }) => {
  const navigation = useNavigation();
  const { preferences } = useSettings();

  const confirmDelete = (index) => {
    Alert.alert("Suppression d'une todo", "Confirmez vous la suppression?", [
      {
        text: "Annuler",
        style: "cancel",
      },
      {
        text: "Oui!",
        onPress: () => {
          deleteTodo(index);
        },
      },
    ]);
  };
  return (
    <ScrollView style={styles.todoslist}>
      {list.length ? (
        list.map((l, i) =>
          !preferences.showTodoDone && l.status === "done" ? (
            <></>
          ) : (
            <ListItem
              bottomDivider
              key={i}
              containerStyle={{
                backgroundColor: l.status === "done" ? "#d1d1d1" : "white",
              }}
            >
              <ListItem.CheckBox
                iconType="ionicon"
                checkedIcon="checkbox-outline"
                uncheckedIcon="square-outline"
                checked={l.status === "done"}
                onPress={() => {
                  changeCheck(i);
                }}
              />
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    color: l.status === "done" ? "gray" : "black",
                  }}
                >
                  {l.value}
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Content right style={{ flexDirection: "row", gap: 20 }}>
                <ListItem.Title right>
                  <Icon
                    type="ionicon"
                    name="pencil"
                    color={"gray"}
                    disabled={l.status === "done"}
                    onPress={() =>
                      navigation.navigate("EditTodo", { index: i })
                    }
                  />
                </ListItem.Title>
                <ListItem.Title right>
                  <Icon
                    type="ionicon"
                    name="trash"
                    color={"red"}
                    disabled={l.status === "done"}
                    onPress={() => confirmDelete(i)}
                  />
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          )
        )
      ) : (
        <Text>Vous n'avez pas de todos, créez en une dès maintenant!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoslist: {
    marginTop: 30,
  },
});

export default TodosList;
