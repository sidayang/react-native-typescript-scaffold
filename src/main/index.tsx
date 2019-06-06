import React from "react";
import { Image, Text } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  TabBarIconProps
} from "react-navigation";
import { Drawer } from "../drawer";
import { Stack } from "../stack";
import { Shop } from "../shop";

const MainNavigator = createBottomTabNavigator({
  Shop: {
    screen: Shop,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }: TabBarIconProps) => (
        <Image
          source={
            focused
              ? require("./img/shop-active.png")
              : require("./img/shop.png")
          }
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: ({ focused, horizontal, tintColor }: TabBarIconProps) => (
        <Text style={{ color: focused ? "#1296db" : "#000000" }}>Shop</Text>
      )
    }
  },
  Phone: {
    screen: Stack,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }: TabBarIconProps) => (
        <Image
          source={
            focused
              ? require("./img/phone-active.png")
              : require("./img/phone.png")
          }
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: ({ focused, horizontal, tintColor }: TabBarIconProps) => (
        <Text style={{ color: focused ? "#1296db" : "#000000" }}>Phone</Text>
      )
    }
  },
  My: {
    screen: Stack,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }: TabBarIconProps) => (
        <Image
          source={
            focused ? require("./img/my-active.png") : require("./img/my.png")
          }
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: ({ focused, horizontal, tintColor }: TabBarIconProps) => (
        <Text style={{ color: focused ? "#1296db" : "#000000" }}>My</Text>
      )
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
