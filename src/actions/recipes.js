import * as axios from 'axios';

export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
});

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
    const recipe = {
      title,
      ingredients,
      description,
      price,
      createdAt
    };

    return axios
      .post('https://mighty-fortress-77606.herokuapp.com/addRecipe', recipe)
      .then((response) => {
        const new_recipe = { ...recipe, id: response.data };
        dispatch(addRecipe(new_recipe));
      })
      .catch((error) => {
        console.log(error);
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
    return axios
      .get('https://mighty-fortress-77606.herokuapp.com/recipes')
      .then((response) => {
        const recipes = [];
        response.data.forEach(
          ({ _id, title, ingredients, description, price, createdAt }) => {
            const new_recipe = {
              id: _id,
              title,
              ingredients,
              description,
              price,
              createdAt
            };
            recipes.push(new_recipe);
          }
        );
        dispatch(setRecipes(recipes));
      })
      .catch((error) => {
        console.log(error);
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
    return axios
      .post(
        `https://mighty-fortress-77606.herokuapp.com/updateRecipe/${id}?_method=PUT`,
        updates
      )
      .then(() => {
        dispatch(editRecipe(id, updates));
      })
      .catch((error) => {
        console.log(error);
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
    return axios
      .post(
        `https://mighty-fortress-77606.herokuapp.com/deleteRecipe/${id}?_method=DELETE`
      )
      .then(() => {
        dispatch(removeRecipe(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
