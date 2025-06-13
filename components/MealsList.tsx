import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Meal from "../data/meal";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../Routes";

type Props = NavigationProp<RootStackParamList, "meal_by_id">;

export const MealsList = ({ data }: { data: Meal[] }) => {
  const navigation = useNavigation<Props>();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        const meal = item.item;
        return (
          <Pressable
            style={styles.container}
            onPress={() => {
              navigation.navigate("meal_by_id", {
                meal_id: meal.id,
              });
            }}
          >
            <Image
              source={{
                uri: meal.imageUrl,
              }}
              style={styles.img}
            />
            <View style={styles.detail}>
              <Details title="Duration" sub_title={`${meal.duration}m`} />
              <Details title="Affordability" sub_title={meal.affordability} />
              <Details title="Complexity" sub_title={meal.complexity} />
              <Details
                title="Gluten Free"
                sub_title={meal.isGlutenFree ? "Yes" : "No"}
              />
              <Details
                title="Lactose Free"
                sub_title={meal.isLactoseFree ? "Yes" : "No"}
              />
              <Details title="Vegan" sub_title={meal.isVegan ? "Yes" : "No"} />
              <Details
                title="Vegetarian"
                sub_title={meal.isVegetarian ? "Yes" : "No"}
              />
            </View>
          </Pressable>
        );
      }}
      ListEmptyComponent={() => {
        return (
          <View
            style={{
              height: 500,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>No Data Found</Text>
          </View>
        );
      }}
    />
  );
};

const Details = ({
  title,
  sub_title,
}: {
  title: string;
  sub_title: string;
}) => {
  return (
    <View style={{ justifyContent: "space-evenly", width: 120 }}>
      <Text style={{ fontWeight: "bold" }}>{title}:</Text>
      <Text>{sub_title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 10,
  },
  img: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detail: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
