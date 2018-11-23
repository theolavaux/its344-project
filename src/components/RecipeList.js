import React from 'react';
import { connect } from 'react-redux';
import RecipeListItem from './RecipeListItem';
import selectRecipes from '../selectors/recipes';

const RecipeList = (props) => (
  <div>
    <h1>Recipes List</h1>
    {props.recipes.map((recipe) => {
      return <RecipeListItem key={recipe.id} {...recipe} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    recipes: selectRecipes(state.recipes, state.filters)
  };
};

export default connect(mapStateToProps)(RecipeList);
