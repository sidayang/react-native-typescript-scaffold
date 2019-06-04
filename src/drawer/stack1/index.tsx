import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const Styles = StyleSheet.create({
  container: { paddingTop: getStatusBarHeight(true) },
  row: {
    flex: -1,
    flexDirection: "row",
    alignItems: "center"
  },
  column: {
    flex: -1,
    flexDirection: "column"
  },
  instrution: { fontSize: 16 }
});

interface IProps {}
const Stack1 = (props: IProps) => {
  const { navigate } = useNavigation();
  return (
    <>
      <View style={Styles.container}>
        <Text>I'm in safe area (Compatible with iPhone X series)</Text>
      </View>
      <View style={Styles.column}>
        <View style={Styles.row}>
          <Text style={Styles.instrution}>Swipe right from the left edge</Text>
        </View>
        <View style={Styles.row}>
          <Text style={Styles.instrution}>or Just Tap</Text>
          <Button
            onPress={() => {
              navigate("Stack2");
            }}
            title="Go to Stack2"
          />
        </View>
      </View>
    </>
  );
};

export { Stack1 };
