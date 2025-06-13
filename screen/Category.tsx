import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { CATEGORIES } from "../data/data";
import { RootDrawerParamList, RootStackParamList } from "../Routes";
import { DrawerScreenProps } from "@react-navigation/drawer";

type Props = DrawerScreenProps<
  RootStackParamList & RootDrawerParamList,
  "Category"
>;

const Category = ({ navigation }: Props) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        const data = item.item;
        return (
          <Pressable
            style={({ pressed }) => [
              styles.container,
              { backgroundColor: data.color },
              pressed && { opacity: 0.5 },
            ]}
            onPress={() => {
              navigation.navigate("all_meals", {
                category_id: data.id,
                category_name: data.title,
              });
            }}
          >
            <Text style={styles.title}>{data.title}</Text>
          </Pressable>
        );
      }}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 25,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Category;
