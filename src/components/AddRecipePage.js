import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipes';
import { Link } from 'react-router-dom';

export class AddRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.addRecipe(recipe);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add recipe</h1>
        <RecipeForm onSubmit={this.onSubmit} />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddRecipePage);
