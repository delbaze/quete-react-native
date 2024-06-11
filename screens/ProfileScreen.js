//screens/ProfileScreen.js
import { View, StyleSheet, Text } from "react-native";
import { Avatar, ListItem, Icon, Switch } from "@rneui/themed";
import { useEffect, useState } from "react";
import storage from "../lib/storage";
import { useSettings } from "../components/SettingsProvider";
function Profilecreen() {
  // const [state, setState] = useState({
  //   showTodoDone: true,
  // });
  const { preferences, setPreferences } = useSettings();
  console.log("PREF", preferences);

  const handleChangeShowDone = async (value) => {
    await storage.save({
      key: "preferences",
      data: { ...preferences, showTodoDone: value },
    });
    setPreferences({ ...preferences, showTodoDone: value });
  };

  const getSettings = async () => {
    const preferences = await storage.load({ key: "preferences" });
    setPreferences(preferences);
  };
  useEffect(() => {
    getSettings();
  }, []);
  return (
    <View style={styles.main}>
      <Avatar
        rounded
        icon={{ type: "ionicon", name: "person", color: "whitesmoke" }}
        containerStyle={{ backgroundColor: "gray" }}
        size={150}
      />
      <View style={{ width: 430, padding: 20 }}>
        <ListItem bottomDivider>
          <Icon type="ionicon" name="settings" />
          <ListItem.Content>
            <ListItem.Title>
              <Text>Afficher les todos terminées</Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <Switch
              value={preferences.showTodoDone}
              onValueChange={handleChangeShowDone}
            />
          </ListItem.Content>
        </ListItem>
      </View>
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

export default Profilecreen;
