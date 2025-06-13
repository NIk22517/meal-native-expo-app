import React, { createContext, useContext, useMemo, useState } from "react";
import { MEALS } from "../data/data";

type FavoriteType = {
  favorite_id: string[];
  add_favorite: ({ id }: { id: string }) => void;
  remove_favorite: ({ id }: { id: string }) => void;
  has_favorite: ({ id }: { id: string }) => boolean;
};

const FavoriteContext = createContext<FavoriteType | null>(null);

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteId, setFavoriteId] = useState<string[]>([]);

  const add = ({ id }: { id: string }) => {
    const found = MEALS.find((el) => el.id === id);
    if (found) {
      setFavoriteId((prev) => [...prev, found?.id]);
    }
  };

  const remove = ({ id }: { id: string }) => {
    setFavoriteId((prev) => prev.filter((el) => el !== id));
  };

  const has_favorite = ({ id }: { id: string }) => {
    const has_data = new Set(favoriteId);
    return has_data.has(id);
  };

  const memory: FavoriteType = useMemo(() => {
    return {
      favorite_id: favoriteId,
      add_favorite: add,
      remove_favorite: remove,
      has_favorite,
    };
  }, [favoriteId]);
  return (
    <FavoriteContext.Provider value={memory}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(
      "useFavoriteContext must be used within a FavoriteProvider provider"
    );
  }
  return context;
};
