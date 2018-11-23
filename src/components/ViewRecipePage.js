import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const ViewRecipePage = ({ recipe }) => {
  console.log(recipe.title);
  return (
    <div>
      <h1>{recipe.title}</h1>

      <div>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{recipe.description}</p>
      </div>
      <div>
        <h3>Price</h3>
        <p>{recipe.price}</p>
      </div>
      <div>
        <h3>Created at</h3>
        <p>{moment(recipe.createdAt).format('DD/MM/YYYY')}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find(({ id }) => id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(ViewRecipePage);