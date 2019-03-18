import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Users from './Users';
import Things from './Things';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      things: [],
      favorites: [],
    };
  }
  componentDidMount() {
    Promise.all([
      axios.get('/api/users').then(response => response.data),
      axios.get('/api/things').then(response => response.data),
      axios.get('/api/favorites').then(response => response.data),
    ]).then(([users, things, favorites]) => {
      this.setState({ users, things, favorites });
    });
  }
  render() {
    const { users, things, favorites } = this.state;
    const counts = {
      '/users': users.length,
      '/things': things.length,
    };
    return (
      <div className="container">
        <h1>Acme Favorites</h1>
        <HashRouter>
          <Route
            render={({ history, location }) => (
              <Navbar counts={counts} history={history} location={location} />
            )}
          />
          <Switch>
            <Route
              path="/users"
              render={() => (
                <Users users={users} things={things} favorites={favorites} />
              )}
            />
            <Route
              path="/things"
              render={() => (
                <Things users={users} things={things} favorites={favorites} />
              )}
            />
            <Redirect to="/users" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
