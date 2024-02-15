import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CatalogueScreen } from "../screens/CatalogueScreen";
import { CategoryScreen } from "../screens/CategoryScreen";
import { ItemScreen } from "../screens/ItemScreen";
import { FiltersScreen } from "../screens/FiltersScreen";
import { SortScreen } from "../screens/SortScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SearchResulrScreen } from "../screens/SearchResultScreen";
import { OdzivScreen } from "../screens/odzivScreen";
import { AddOdzivinProduct } from "../screens/AddOdzivinProduct";
import { ThanksScreen } from "../screens/ThanksScreen";

const Stack = createNativeStackNavigator();

export const CatalogTab = () => {
  return (
    <Stack.Navigator initialRouteName={'CatalogueScreen'} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CatalogueScreen"
        component={CatalogueScreen}
      ></Stack.Screen>
      <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen>
      <Stack.Screen
        name="Item"
        component={ItemScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen name="Sort" component={SortScreen} />
      <Stack.Screen name="Filter" component={FiltersScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SearchResult" component={SearchResulrScreen} />
      <Stack.Screen name="OdzivScreen" component={OdzivScreen} />
      <Stack.Screen name="AddOdzivinProduct" component={AddOdzivinProduct} />
      <Stack.Screen name="ThanksScreen" component={ThanksScreen} />

    </Stack.Navigator>
  );
};

// ThanksScreen
// AddOdzivinProduct