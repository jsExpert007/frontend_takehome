import ScreenConsolidation from "./screens/ScreenConsolidation";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  }
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <ScreenConsolidation />
    </NavigationContainer>
  );
}
