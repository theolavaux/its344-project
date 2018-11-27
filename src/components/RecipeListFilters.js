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
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onFilterChange = (e) => {
    if (e.target.value === 'title') {
      this.props.sortByTitle();
    } else if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'price') {
      this.props.sortByPrice();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search recipes"
              value={this.props.filters.text}
              onChange={(e) => {
                this.props.setTextFilter(e.target.value);
              }}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onFilterChange}
            >
              <option value="title">Title</option>
              <option value="date">Date</option>
              <option value="price">Price</option>
            </select>
          </div>
          <div className="input-group__item">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByTitle: () => dispatch(sortByTitle()),
  sortByPrice: () => dispatch(sortByPrice()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeListFilters);
