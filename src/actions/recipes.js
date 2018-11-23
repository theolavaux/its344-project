import uuid from 'uuid';

// ADD_RECIPE
export const addRecipe = ({
  title = '',
  ingredients = '',
  description = '',
  price = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_RECIPE',
  recipe: {
    id: uuid(),
    title,
    ingredients,
    description,
    price,
    createdAt
  }
});

// EDIT_RECIPE
export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id,
  updates
});

// REMOVE_RECIPE
export const removeRecipe = (id) => ({
  type: 'REMOVE_RECIPE',
  id
});
