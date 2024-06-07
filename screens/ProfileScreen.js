//screens/ProfileScreen.js
import { View, Text, StyleSheet } from "react-native";

function Profilecreen() {
  return (
    <View style={styles.main}>
      <Text>Ici il y aura le profil</Text>
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
