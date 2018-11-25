import uuid from 'uuid';
//import database from '../firebase/firebase';

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

// export const addRecipe = (recipe) => ({
//   type: 'ADD_RECIPE',
//   recipe
// });

// START_ADD_RECIPE
export const startAddRecipe = (recipeData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      description = '',
      ingredients = '',
      price = '',
      createdAt = 0
    } = recipeData;
    const recipe = { title, ingredients, description, price, createdAt };
    return database
      .ref(`recipes`)
      .push(recipe)
      .then((ref) => {
        dispatch(
          addRecipe({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// SET_RECIPES
export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  recipes
});

// START_SET_RECIPES
export const startSetRecipes = () => {
  return (dispatch) => {
    return database
      .ref(`recipes`)
      .once('value')
      .then((snapshot) => {
        const recipes = [];
        snapshot.forEach((childSnapshot) => {
          recipes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setRecipes(recipes));
      });
  };
};

// EDIT_RECIPE
export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id,
  updates
});

// START_EDIT_RECIPE
export const startEditRecipe = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`recipes/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editRecipe(id, updates));
      });
  };
};

// REMOVE_RECIPE
export const removeRecipe = (id) => ({
  type: 'REMOVE_RECIPE',
  id
});

// START_REMOVE_EXPENSE
export const startRemoveRecipe = (id) => {
  return (dispatch) => {
    return database
      .ref(`recipes/${id}`)
      .remove()
      .then(() => {
        dispatch(removeRecipe(id));
      });
  };
};
