import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipes';

const AddRecipePage = (props) => (
  <div>
    <h1>Add recipe</h1>
    <RecipeForm
      onSubmit={(recipe) => {
        props.dispatch(addRecipe(recipe));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddRecipePage);
