import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectRecipes from '../selectors/recipes';

export const RecipesSummary = ({ recipeCount }) => {
  const recipeWord = recipeCount === 1 ? 'recipe' : 'recipes';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Your cookbook contains <span>{recipeCount}</span> {recipeWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visiblesRecipes = selectRecipes(state.recipes, state.filters);

  return {
    recipeCount: visiblesRecipes.length
  };
};

export default connect(mapStateToProps)(RecipesSummary);
