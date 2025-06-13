class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
  constructor(data: {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
  }) {
    this.id = data.id;
    this.categoryIds = data.categoryIds;
    this.title = data.title;
    this.imageUrl = data.imageUrl;
    this.ingredients = data.ingredients;
    this.steps = data.steps;
    this.duration = data.duration;
    this.complexity = data.complexity;
    this.affordability = data.affordability;
    this.isGlutenFree = data.isGlutenFree;
    this.isVegan = data.isVegan;
    this.isVegetarian = data.isVegetarian;
    this.isLactoseFree = data.isLactoseFree;
  }
}

export default Meal;
