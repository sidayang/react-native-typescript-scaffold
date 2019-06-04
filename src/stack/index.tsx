import { createStackNavigator, createAppContainer } from "react-navigation";
import { Stack1 } from "./stack1";
import { Stack2 } from "./stack2";

const StackNavigator = createStackNavigator({
  Stack1: {
    screen: Stack1,
    navigationOptions: {
      title: "Stack1"
    }
  },
  Stack2: {
    screen: Stack2,
    navigationOptions: {
      title: "Stack2"
    }
  }
});
const Stack = createAppContainer(StackNavigator);

export { Stack };
