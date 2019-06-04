import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Drawer } from "./src/drawer";
import { Stack } from "./src/stack";

const MainNavigator = createBottomTabNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: {
      title: "Drawer Navigation"
    }
  },
  Stack: {
    screen: Stack,
    navigationOptions: {
      title: "Stack Navigator"
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
