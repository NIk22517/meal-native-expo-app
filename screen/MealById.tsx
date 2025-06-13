import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../Routes";
import { useEffect, useMemo } from "react";
import { MEALS } from "../data/data";
import { useFavoriteContext } from "../context/Favorite";
import IconButton from "../components/IconButton";
type Prop = NativeStackScreenProps<RootStackParamList, "meal_by_id">;

const MealById = ({ route, navigation }: Prop) => {
  const { has_favorite, remove_favorite, add_favorite } = useFavoriteContext();
  const has = has_favorite({
    id: route.params.meal_id,
  });
  const data = useMemo(() => {
    return MEALS.find((el) => el.id === route.params.meal_id);
  }, [route.params.meal_id]);

  useEffect(() => {
    if (data) {
      navigation.setOptions({
        title: data?.title,
        headerRight: () => {
          return (
            <IconButton
              icon_props={{
                name: has ? "favorite" : "favorite-outline",
                size: 25,
                color: has ? "red" : "black",
              }}
              onPress={() => {
                if (has) {
                  remove_favorite({ id: data.id });
                } else {
                  add_favorite({ id: data.id });
                }
              }}
            />
          );
        },
      });
    }
  }, [data, has, remove_favorite, add_favorite]);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <Image
        source={{
          uri: data?.imageUrl,
          height: 300,
        }}
        style={{
          borderRadius: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <Details title="Duration" sub_title={`${data?.duration}m`} />
        <Details title="Affordability" sub_title={data?.affordability ?? ""} />
        <Details title="Complexity" sub_title={data?.complexity ?? ""} />
        <Details
          title="Gluten Free"
          sub_title={data?.isGlutenFree ? "Yes" : "No"}
        />
        <Details
          title="Lactose Free"
          sub_title={data?.isLactoseFree ? "Yes" : "No"}
        />
        <Details title="Vegan" sub_title={data?.isVegan ? "Yes" : "No"} />
        <Details
          title="Vegetarian"
          sub_title={data?.isVegetarian ? "Yes" : "No"}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}>
          Ingredients
        </Text>
        <View style={{ gap: 10 }}>
          {data?.ingredients?.map((el, i) => {
            return (
              <View
                key={`${i + 1}`}
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{"\u2B24" + " "}</Text>
                <Text>{el}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={{ marginLeft: 10, marginRight: 15, marginBottom: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}>
          Steps
        </Text>
        <View style={{ gap: 10 }}>
          {data?.steps?.map((el, i) => {
            return (
              <View
                key={`${i + 1}`}
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{"\u2B24" + " "}</Text>
                <Text>{el}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
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
    <View style={{ width: 150 }}>
      <Text style={{ fontWeight: "bold" }}>{title}:</Text>
      <Text>{sub_title}</Text>
    </View>
  );
};

export default MealById;
