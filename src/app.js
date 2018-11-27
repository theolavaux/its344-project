import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetRecipes } from './actions/recipes';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetRecipes()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
