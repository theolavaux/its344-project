import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales';

const RecipeListItem = ({ id, title, price, createdAt }) => {
  numeral.locale('fr');

  return (
    <div>
      <h3>
        <Link to={`edit/${id}`}>{title}</Link>
      </h3>
      <p>
        {numeral(price / 100).format('0,0.00$')} -{' '}
        {moment(createdAt).format('DD/MM/YYYY')}
      </p>
    </div>
  );
};

export default RecipeListItem;
