import { StatusBar } from "expo-status-bar";
import MainNavigator from "./navigators/MainNavigator";

export default function App() {
  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}
