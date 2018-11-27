import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveRecipe } from '../actions/recipes';

const ViewRecipePage = ({ recipe, dispatch, history }) => (
  <div className="content-container">
    <Link
      className="button button--margin--top button--margin--bottom"
      to={'/'}
    >
      {'<'} Back
    </Link>

    <div className="list-header-large">
      {recipe.title}
      <img src={recipe.image} height="180" width="180" />
    </div>

    <div className="list-body">
      <div className="list-item-row">
        <h3 className="list-item__title">Ingredients</h3>
        <span className="list-item__text">{recipe.ingredients}</span>

        <h3 className="list-item__title">Description</h3>
        <span className="list-item__text">{recipe.description}</span>

        <h3 className="list-item__title">Price</h3>
        <span className="list-item__text">{recipe.price}</span>

        <h3 className="list-item__title">Created at</h3>
        <span className="list-item__text">
          {moment(recipe.createdAt).format('DD/MM/YYYY')}
        </span>
      </div>
    </div>

    <div className="buttons-side-by-side">
      <Link className="button" to={`/edit/${recipe.id}`}>
        Edit recipe
      </Link>

      <button
        className="button button--secondary"
        onClick={() => {
          dispatch(startRemoveRecipe(recipe.id));
          history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find(({ id }) => id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(ViewRecipePage);
