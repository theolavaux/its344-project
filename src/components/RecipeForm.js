import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import selectRecipes from '../selectors/recipes';
import { Link } from 'react-router-dom';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.recipe ? props.recipe.title : '',
      ingredients: props.recipe ? props.recipe.ingredients : '',
      description: props.recipe ? props.recipe.description : '',
      price: props.recipe ? props.recipe.price : '€',
      image: props.recipe ? props.recipe.price : '',
      createdAt: props.recipe ? moment(props.recipe.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onIngredientsChange = (e) => {
    const ingredients = e.target.value;
    this.setState(() => ({ ingredients }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onPriceChange = (e) => {
    const price = e.target.value;
    this.setState(() => ({ price }));
  };

  onImageChange = (e) => {
    const image = e.target.value;
    this.setState(() => ({ image }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };

  checkDuplicateTitle = () => {
    return this.props.recipes.some(({ title }) => title === this.state.title);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (
      !this.state.title ||
      !this.state.ingredients ||
      !this.state.description ||
      !this.state.price
    ) {
      this.setState(() => ({
        error: 'Please fill all the fields'
      }));
    } else if (this.checkDuplicateTitle() && !this.props.recipe) {
      this.setState(() => ({ error: 'This recipe title already exists' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        ingredients: this.state.ingredients,
        description: this.state.description,
        price: this.state.price,
        image: this.state.image,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div className="content-container">
        <Link
          className="button button--margin--bottom"
          to={this.props.recipe ? `/view/${this.props.recipe.id}` : '/'}
        >
          {'<'} Back
        </Link>

        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && (
            <p className="form__error">{this.state.error}</p>
          )}

          <input
            className="text-input"
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Ingredients"
            value={this.state.ingredients}
            onChange={this.onIngredientsChange}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Image"
            value={this.state.image}
            onChange={this.onImageChange}
          />
          <textarea
            className="textarea"
            placeholder="Add a description to your recipe"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <select
            className="select"
            value={this.state.price}
            onChange={this.onPriceChange}
          >
            <option value="€">€</option>
            <option value="€€">€€</option>
            <option value="€€€">€€€</option>
          </select>

          <div>
            <button className="button" type="submit">
              {this.props.recipe ? 'Edit' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: selectRecipes(state.recipes, state.filters)
  };
};

export default connect(mapStateToProps)(RecipeForm);
