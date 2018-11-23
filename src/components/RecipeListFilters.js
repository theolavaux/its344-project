import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByTitle,
  sortByPrice,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

class RecipeListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onFilterChange = (e) => {
    if (e.target.value === 'title') {
      this.props.dispatch(sortByTitle());
    } else if (e.target.value === 'date') {
      this.props.dispatch(sortByDate());
    } else if (e.target.value === 'price') {
      this.props.dispatch(sortByPrice());
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onFilterChange}
        >
          <option value="title">Title</option>
          <option value="date">Date</option>
          <option value="price">Price</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="startDate"
          endDate={this.props.filters.endDate}
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={'DD/MM/YYYY'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(RecipeListFilters);
