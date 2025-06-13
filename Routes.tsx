import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Category from "./screen/Category";
import Meals from "./screen/Meals";
import MealById from "./screen/MealById";
import Favorite from "./screen/Favorite";
import FavoriteProvider from "./context/Favorite";
import React from "react";
import Icon from "./components/Icon";

export type RootStackParamList = {
  Home: undefined;
  all_meals: { category_id: string; category_name: string };
  meal_by_id: { meal_id: string };
};

export type RootDrawerParamList = {
  Category: undefined;
  Favorite: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const CategoryDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          drawerIcon: ({ size, color }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={Favorite}
        options={{
          drawerIcon: ({ size, color }) => {
            return <Icon name="favorite" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const Route = () => {
  return (
    <FavoriteProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CategoryDrawer}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="all_meals"
          component={Meals}
          options={({ route }) => ({
            title: route.params.category_name,
            animation: "slide_from_right",
            contentStyle: { backgroundColor: "#697565" },
          })}
        />

        <Stack.Screen
          name="meal_by_id"
          component={MealById}
          options={{ title: "Meal Details" }}
        />
      </Stack.Navigator>
    </FavoriteProvider>
  );
};

export default Route;
