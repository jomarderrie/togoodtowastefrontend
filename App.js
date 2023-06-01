import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {UsersContext} from "./context/UsersContext";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {theme} from "./shared/theme"
import { Navigation } from "./screens/infra/Navigation";
import Toast from 'react-native-toast-message';
export default function App() {
  //todo add localstorage jwt

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
    <UsersContext>
          <Navigation/>
          <Toast ref={(ref) => Toast.setRef(ref)} />
    </UsersContext>
    </ThemeProvider>
    </>
  );
}

