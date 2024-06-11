//screens/TodosListScreen.js
import { View, StyleSheet } from "react-native";
import { FAB, Icon, Text } from "@rneui/themed";
import storage from "../lib/storage";
import { useEffect, useState } from "react";
import TodosList from "../components/TodosList";
import { useLoader } from "../components/LoaderProvider";

function TodosListScreen({ navigation }) {
  const [list, setList] = useState([]);
  const { setLoading } = useLoader();

  const getTodosList = async () => {
    setLoading(true);
    const todosList = await storage.load({ key: "todoslist" });
    setList(listSorted(todosList));
    setLoading(false);
  };
  const deleteTodo = async (index) => {
    const todosList = [...list];
    todosList.splice(index, 1);
    setList(listSorted(todosList));
    await storage.save({ key: "todoslist", data: listSorted(todosList) });
  };
  const listSorted = (initialList) =>
    initialList.sort((a, b) => {
      if (a.status === "undone" && b.status !== "undone") {
        return -1;
      } else if (a.status !== "undone" && b.status === "undone") {
        return 1;
      } else {
        return 0;
      }
    });
  const changeCheck = async (index) => {
    const todosList = [...list];
    const todo = todosList[index];
    todo.status = todo.status === "undone" ? "done" : "undone";
    await storage.save({ key: "todoslist", data: listSorted(todosList) });
    setList(todosList);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getTodosList();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Icon
          name="list-circle-sharp"
          type="ionicon"
          size={40}
          style={styles.icon}
        />
        <Text h1>Ma liste!</Text>
      </View>
      <TodosList
        list={list}
        changeCheck={changeCheck}
        deleteTodo={deleteTodo}
      />
      <FAB
        icon={{ name: "add", color: "white" }}
        color="blue"
        placement="right"
        onPress={() => navigation.navigate("CreateTodo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  todoslist: {
    marginTop: 30,
  },
  title: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { paddingHorizontal: 10 },
});

export default TodosListScreen;
