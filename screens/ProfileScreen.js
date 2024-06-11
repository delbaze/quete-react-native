//screens/ProfileScreen.js
import { View, StyleSheet, Text } from "react-native";
import { Avatar, ListItem, Icon, Switch } from "@rneui/themed";
import { useEffect } from "react";
import storage from "../lib/storage";
import { useSettings } from "../components/SettingsProvider";
import * as ImagePicker from "expo-image-picker";

function Profilecreen() {
  const { preferences, setPreferences } = useSettings();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result.assets[0].uri);

    if (!result.canceled) {
      setPreferences({ ...preferences, imageFile: result.assets[0].uri });
      await storage.save({
        key: "preferences",
        data: { ...preferences, imageFile: result.assets[0].uri },
      });
    }
  };

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
      {preferences.imageFile ? (
        <>
          <Avatar
            rounded
            source={{ uri: preferences.imageFile }}
            containerStyle={{ backgroundColor: "gray" }}
            size={150}
          >
            <Avatar.Accessory
              size={48}
              style={{ backgroundColor: "blue" }}
              onPress={pickImage}
            />
          </Avatar>
        </>
      ) : (
        <Avatar
          rounded
          icon={{ type: "ionicon", name: "person", color: "whitesmoke" }}
          containerStyle={{ backgroundColor: "gray" }}
          size={150}
        >
          <Avatar.Accessory
            size={48}
            style={{ backgroundColor: "blue" }}
            onPress={pickImage}
          />
        </Avatar>
      )}
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
