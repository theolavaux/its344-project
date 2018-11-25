import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AddRecipePage from '../components/AddRecipePage';
import EditRecipePage from '../components/EditRecipePage';
import NotFoundPage from '../components/NotFoundPage';
import RecipeDashboardPage from '../components/RecipeDashboardPage';
import ViewRecipePage from '../components/ViewRecipePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={RecipeDashboardPage} exact={true} />
        <Route path="/create" component={AddRecipePage} />
        <Route path="/view/:id" component={ViewRecipePage} />
        <Route path="/edit/:id" component={EditRecipePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
