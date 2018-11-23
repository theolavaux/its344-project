import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ id, title, ingredients, price }) => {
  return (
    <div>
      <h3>
        <Link to={`/view/${id}`}>{title}</Link>
      </h3>

      <div>
        <h4>Ingredients</h4>
        <p>{ingredients}</p>
      </div>

      <div>
        <h4>Price</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default RecipeListItem;
