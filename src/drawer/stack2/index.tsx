import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface IProps {}
const Stack2 = (props: IProps) => {
  return (
    <>
      <View>
        <Text>Full screen</Text>
      </View>
      <View>
        <Text>Full screen</Text>
      </View>
      <View>
        <Text>Full screen</Text>
      </View>
    </>
  );
};

export { Stack2 };
