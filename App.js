import { StatusBar } from "expo-status-bar";
import MainNavigator from "./navigators/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoaderProvider from "./components/LoaderProvider";
import "./lib/storage";
import SettingsProvider from "./components/SettingsProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <LoaderProvider>
          <MainNavigator />
          <StatusBar style="auto" />
        </LoaderProvider>
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
