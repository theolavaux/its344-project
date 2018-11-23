import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../actions/recipes';
import { Link } from 'react-router-dom';

const EditRecipePage = (props) => (
  <div>
    <RecipeForm
      recipe={props.recipe}
      onSubmit={(recipe) => {
        props.dispatch(editRecipe(props.recipe.id, recipe));
        props.history.push('/');
      }}
    />

    <Link to={`/view/${props.recipe.id}`}>Back</Link>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find(({ id }) => id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditRecipePage);
