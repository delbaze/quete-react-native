import { createContext, useContext, useEffect, useState } from "react";
import storage from "../lib/storage";
export const Context = createContext({
  preferences: { showTodoDone: true, imageFile: "" },
  setPreferences: () => {},
});

export const useSettings = () => {
  const context = useContext(Context);
  return context;
};
const SettingsProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    showTodoDone: true,
    imageFile: "",
  });
  const getPreferences = async () => {
    const preferences = await storage.load({ key: "preferences" });
    setPreferences(preferences);
  };
  useEffect(() => {
    getPreferences();
  }, []);
  return (
    <Context.Provider value={{ preferences, setPreferences }}>
      {children}
    </Context.Provider>
  );
};

export default SettingsProvider;
