import React from 'react';
import { connect } from 'react-redux';
import RecipeListItem from './RecipeListItem';
import selectRecipes from '../selectors/recipes';

const RecipeList = (props) => (
  <div className="content-container">
    <div className="list-header">Recipes</div>
    <div className="list-body">
      {props.recipes.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No recipes</span>
        </div>
      ) : (
        props.recipes.map((recipe) => {
          return <RecipeListItem key={recipe.id} {...recipe} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    recipes: selectRecipes(state.recipes, state.filters)
  };
};

export default connect(mapStateToProps)(RecipeList);
