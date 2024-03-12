import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { FilterContainer } from "../components/FilterContainer";
import { PromoList } from "../components/PromoList";
import SearchSmallIcon from "../icons/SearchSmallIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { GetProductsByCategory, ClearOrderStatus } from '../services/action/action'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CategoryScreen = (props, { route }) => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch()

  const categoryId = props.route.params.id;
  const categoryName = props.route.params.categoryName;
  const age_id = props.route.params.age_id;
  const category_id = props.route.params.category_id
  const search = props.route.params?.search
  const podborka_id = props.route.params?.podborka_id
  const [id, setId] = useState()

  const SetCategory = async () => {
    if (categoryId) {
      setId(categoryId)
      await AsyncStorage.setItem('categoryId', JSON.stringify(categoryId))
    }
  }

  const GetItem = async () => {
    let category_id = await AsyncStorage.getItem('categoryId')
    setId(category_id)
  }

  useEffect(() => {
    SetCategory()
  }, [categoryId])

  const { token } = useSelector((st) => st.static)
  const getPorduct = useSelector((st) => st.getPorductByCategoy)
  const [page, setPage] = useState(0)
  const SortAction = useSelector((st) => st.sort)
  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndOfList =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isEndOfList) {
      loadMoreData();
    }
  };


  const loadMoreData = () => {
    if (getPorduct?.data?.data?.next_page_url) {
      setPage(page + 1)
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setPage(1)
      dispatch(ClearOrderStatus())
      GetItem()

    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (page == 1) {
      setProducts([])
    }
    if (page > 0) {
      let order_by_volume = SortAction.type == 'discount' ? true : false
      let order_by_rate = SortAction.type == 'raiting' ? true : false
      dispatch(GetProductsByCategory({
        parent_category_id: id,
        search: search,
        order_by_volume,
        order_by_rate,
        podborka_id
      }, token, page))
    }
  }, [page, search, SortAction.type])


  useEffect(() => {
    if (getPorduct.data?.data?.data) {
      let temp = [...products]
      let combinedArray = temp.concat(getPorduct.data.data.data);
      setProducts(combinedArray)
    }
  }, [getPorduct.data])

  return (
    <LinearGradient
      colors={["#f7f7f7", "#fff"]}
      location={[0, 0.1]}
      style={styles.container}
    >
      <ScrollView
        scrollEventThrottle={16}
        style={styles.mainContainer}
        onScroll={handleScroll}
      >
        <View style={{ paddingBottom: 120 }}>
          <View style={styles.topContainer}>
            <ReturnIcon
              style={{ position: "relative", top: -1 }}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.title}>{categoryName}</Text>
            <SearchSmallIcon
              onPress={() => navigation.navigate("SearchScreen", {
                id: categoryId
              })}
            />
          </View>
          <FilterContainer
            categoryId={categoryId}
            categoryName={categoryName}

            style={{ marginBottom: 23, backgroundColor: "fff" }}
          />
          <Text style={styles.amountText}>Найдено товаров: {getPorduct.data?.count}</Text>
          <PromoList categoryName={categoryName} data={products} />
        </View>
      </ScrollView>
      <Navbar active="Catalogue" activeText="Catalogue" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  topContainer: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  amountText: {
    marginBottom: 20,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(55, 55, 55, 0.5)",
  },
});
