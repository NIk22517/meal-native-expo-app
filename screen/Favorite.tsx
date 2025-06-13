import { useMemo } from "react";
import { useFavoriteContext } from "../context/Favorite";
import { MEALS } from "../data/data";
import { MealsList } from "../components/MealsList";

const Favorite = () => {
  const { favorite_id } = useFavoriteContext();
  const data = useMemo(() => {
    return MEALS.filter((el) => favorite_id.includes(el.id));
  }, [favorite_id]);
  return <MealsList data={data} />;
};

export default Favorite;
