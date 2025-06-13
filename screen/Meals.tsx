import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { RootStackParamList } from "../Routes";
import { MEALS } from "../data/data";
import Meal from "../data/meal";
import { MealsList } from "../components/MealsList";

type Props = NativeStackScreenProps<RootStackParamList, "all_meals">;

const Meals = ({ route }: Props) => {
  const data = useMemo(() => {
    const data: Meal[] = [];
    MEALS.forEach((el) => {
      if (el.categoryIds.some((ids) => ids === route.params.category_id)) {
        data.push(el);
      }
    });

    return data;
  }, [route.params]);
  return <MealsList data={data} />;
};

export default Meals;
