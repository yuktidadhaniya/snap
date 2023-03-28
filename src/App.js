import './App.css';
import PhotoContextProvider from './context/PhotoContext';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './header';
// import mountains from './components/Mountain';
// import bird from './components/Birds';
// import foods from './components/Food';
// import Beaches from './components/Beaches';
import Item from './components/item';
class App extends Component {
  render() {
    return (
      <PhotoContextProvider>
        <div className="container">
          <Router>
            <div>
              <Header />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/mountains" />}
                />

                {/* <Route path="/mountains" component={mountains} />
              <Route path="/bird" component={bird} />
              <Route path="/foods" component={foods} />
              <Route path="/beaches" component={Item} /> */}
                <Route
                  path="/mountains"
                  render={() => <Item searchTerm="mountains" />}
                />
                <Route
                  path="/beaches"
                  render={() => <Item searchTerm="beaches" />}
                />
                <Route path="/bird" render={() => <Item searchTerm="bird" />} />
                <Route
                  path="/foods"
                  render={() => <Item searchTerm="foods" />}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </PhotoContextProvider>
    );
  }
}
export default App;
