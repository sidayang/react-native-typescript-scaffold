import React, { ReactNode } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const Styles = StyleSheet.create({
  container: { paddingTop: getStatusBarHeight(true) }
});

interface IProps {
  children: ReactNode;
}

export const SafeAreaContainer = (props: IProps) => {
  return <View style={Styles.container}>{props.children}</View>;
};
