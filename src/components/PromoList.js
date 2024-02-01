import React, { useEffect, useState } from "react";
import { StyleSheet, View, } from "react-native";
import { CatalogueItem } from "./CatalogueItem";

export const PromoList = ({ data }) => {
  const TruncatedText = (texts) => {
    let text = JSON.stringify(texts)
    const truncatedText = text.length > 5 ? `${text.substring(0, 5)}` : text;
    return truncatedText
  };


  const [DATA, setDATA] = useState(data)
  useEffect(() => {
    setDATA(data)
  }, [data])
  return (
    <View style={styles.list}>
      {DATA?.map((item, i) => {
        return <CatalogueItem
          id={item.id}
          isbasket={item.basket_auth_user?.length}
          style={{ marginRight: 0, width: "48.5%", backgroundColor: "#fff" }}
          title={item.name}
          image={item.photos[0].photo}
          rate={item.rate == 0 ? 5 : +item.rate_avg_star}
          sale={item.discount}
          currentPrice={
            TruncatedText(item.price -
              item.price * (item.discount / 100))
          }
          prevPrice={item.price}
          key={i}
        />
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
