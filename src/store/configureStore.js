import { createStore, combineReducers } from 'redux';
import recipesReducer from '../reducers/recipes';
import filtersReducer from '../reducers/filters';

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      recipes: recipesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
