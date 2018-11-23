import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import selectRecipes from '../selectors/recipes';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.recipe ? props.recipe.title : '',
      ingredients: props.recipe ? props.recipe.ingredients : '',
      description: props.recipe ? props.recipe.description : '',
      price: props.recipe ? (props.recipe.price / 100).toString() : '',
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
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
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
    } else if (this.checkDuplicateTitle()) {
      this.setState(() => ({ error: 'This recipe title already exists' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        ingredients: this.state.ingredients,
        description: this.state.description,
        price: parseFloat(this.state.price, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />

          <input
            type="text"
            placeholder="Ingredients"
            value={this.state.ingredients}
            onChange={this.onIngredientsChange}
          />

          <textarea
            placeholder="Add a description for your recipe"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="Price"
            value={this.state.price}
            onChange={this.onPriceChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={'DD/MM/YYYY'}
          />
          <button>Add recipe</button>
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
