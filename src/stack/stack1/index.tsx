import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "react-navigation-hooks";

interface IProps {}
const Stack1 = (props: IProps) => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Stack1</Text>
      <Button
        onPress={() => {
          navigate("Stack2");
        }}
        title="Go to Stack2"
      />
    </View>
  );
};

export { Stack1 };
