import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../actions/recipes';
import { Link } from 'react-router-dom';

export class EditRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.editRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Edit recipe</h1>
        <RecipeForm recipe={this.props.recipe} onSubmit={this.onSubmit} />

        <Link to={`/view/${this.props.recipe.id}`}>Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find(({ id }) => id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  editRecipe: (id, recipe) => dispatch(editRecipe(id, recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRecipePage);
