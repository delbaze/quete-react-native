import { StatusBar } from "expo-status-bar";
import MainNavigator from "./navigators/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoaderProvider from "./components/LoaderProvider";
import "./lib/storage";

export default function App() {
  return (
    <SafeAreaProvider>
      <LoaderProvider>
        <MainNavigator />
        <StatusBar style="auto" />
      </LoaderProvider>
    </SafeAreaProvider>
  );
}
