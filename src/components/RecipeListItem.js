import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ id, title, ingredients, price }) => {
  return (
    <Link className="list-item-hoverable" to={`/view/${id}`}>
      <h3 className="list-item__title">{title}</h3>

      <div>
        <h4 className="list-item__title">Ingredients</h4>
        <p className="list-item__subtitle">{ingredients}</p>
      </div>

      <div>
        <h4 className="list-item__title">Price</h4>
        <p className="list-item__subtitle">{price}</p>
      </div>
    </Link>
  );
};

export default RecipeListItem;
