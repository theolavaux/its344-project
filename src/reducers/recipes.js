// Recipes Reducer

const recipesReducerDefaultState = [];

export default (state = recipesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.recipe];
    case 'EDIT_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            ...action.updates
          };
        } else {
          return recipe;
        }
      });
    case 'REMOVE_RECIPE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
