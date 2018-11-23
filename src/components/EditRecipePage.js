import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe, removeRecipe } from '../actions/recipes';

const EditRecipePage = ({ props }) => {
  return (
    <div>
      <RecipeForm
        recipe={props.recipe}
        onSubmit={(recipe) => {
          props.dispatch(editRecipe(props.recipe.id, recipe));
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeRecipe(props.recipe.id));
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find(({ id }) => id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditRecipePage);
