import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage, // for web: window.localStorage
  defaultExpires: null, //permet de ne pas avoir de données expirables
  enableCache: true,
  sync: {
    todoslist: () => [], //méthode permettant de retourner todoslist vide s'il n'y en a pas au départ!
    preferences: () => ({
      //méthode permettant de retourner les préférences par défaut quand on a jamais paramétrer quoi que ce soit
      showTodoDone: true,
      imageFile: "",
    }),
  },
});

export default storage;
