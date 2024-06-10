import { ActivityIndicator } from "react-native";
import { createContext, useContext, useState } from "react";
export const Context = createContext({ loading: true, setLoading: () => {} });

export const useLoader = () => {
  const context = useContext(Context);
  return context;
};
const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Context.Provider value={{ loading, setLoading }}>
      {loading && (
        <ActivityIndicator
          size={"large"}
          color={"white"}
          style={{
            zIndex: 300,
            backgroundColor: "rgba(52, 52, 52, 0.4)",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )}
      {children}
    </Context.Provider>
  );
};

export default LoaderProvider;
