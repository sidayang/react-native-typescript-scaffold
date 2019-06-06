import React from "react";
import { View, FlatList } from "react-native";
import { SafeAreaContainer } from "../common/safe-area-container";
import { ProductCard } from "../common/product-card";
import { IProductCard } from "../../interface/product";

const mockListData: IProductCard[] = [
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "text"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "longandnotbreaklongandnotbreaklongandnotbreaklongandnotbreaktext"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "long but breaked text"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "text"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "longandnotbreaklongandnotbreaklongandnotbreaklongandnotbreaktext"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "long but breaked text"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "text"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "longandnotbreaklongandnotbreaklongandnotbreaklongandnotbreaktext"
  },
  {
    imgUrl:
      "https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.jpg",
    text: "long but breaked text"
  }
];

export const Shop = () => {
  return (
    <SafeAreaContainer>
      <FlatList
        data={mockListData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item, index, separators }) => (
          <ProductCard key={index} {...item} />
        )}
      />
    </SafeAreaContainer>
  );
};
