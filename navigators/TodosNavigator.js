import { createStackNavigator } from "@react-navigation/stack";
import TodosListScreen from "../screens/TodosListScreen";
import CreateTodoScreen from "../screens/CreateTodoScreen";
import EditTodoScreen from "../screens/EditTodoScreen";

const Stack = createStackNavigator();

function TodosNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TodosList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TodosList" component={TodosListScreen} />
      <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
      <Stack.Screen name="EditTodo" component={EditTodoScreen} />
    </Stack.Navigator>
  );
}

export default TodosNavigator;
