import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPLaces from './places/pages/UserPlaces'

class App extends Component {
  state = {}

  render () {
    return <>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPLaces />
          </Route>
          <Route exact path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
        </main>
      </Router>
    </>
  }
}

export default App;