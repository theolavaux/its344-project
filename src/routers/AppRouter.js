import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddRecipePage from '../components/AddRecipePage';
import ViewRecipePage from '../components/ViewRecipePage';
import EditRecipePage from '../components/EditRecipePage';
import RecipeDashboardPage from '../components/RecipeDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={RecipeDashboardPage} exact={true} />
        <Route path="/create" component={AddRecipePage} />
        <Route path="/view/:id" component={ViewRecipePage} />
        <Route path="/edit/:id" component={EditRecipePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
