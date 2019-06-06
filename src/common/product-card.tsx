import React from "react";
import { View, Image, Text, Dimensions } from "react-native";

interface IProps {
  imgUrl: string;
  text: string;
}

const viewWidth = Dimensions.get("window").width;

export const ProductCard = (props: IProps) => {
  return (
    <View
      style={{
        width: viewWidth / 2,
        height: undefined,
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Image
        source={{ uri: props.imgUrl }}
        style={{ width: viewWidth / 2, height: viewWidth / 2 }}
      />
      <Text ellipsizeMode="tail" numberOfLines={2} style={{}}>
        {props.text}
      </Text>
    </View>
  );
};
