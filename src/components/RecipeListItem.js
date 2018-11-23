import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeRecipe } from '../actions/recipes';

const RecipeListItem = ({ id, title, ingredients, price, dispatch }) => {
  return (
    <div>
      <h3>
        <Link to={`view/${id}`}>{title}</Link>
      </h3>

      <div>
        <h4>Ingredients</h4>
        <p>{ingredients}</p>
      </div>

      <div>
        <h4>Price</h4>
        <p>{price}</p>
      </div>

      <Link to={`edit/${id}`}>Edit</Link>
      <button
        onClick={() => {
          dispatch(removeRecipe(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default connect()(RecipeListItem);
