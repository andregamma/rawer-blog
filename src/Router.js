import React from 'react';
import {
  CSSTransition
} from "react-transition-group";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
//import {Circle2} from 'react-preloaders';

import Home from './pages/Home'

import Navbar from './components/Navbar'
import Team from './pages/Team';
import Blog from './pages/Blog';
//import Footer from './components/Footer';


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/team', name: 'Team', Component: Team },
  { path: '/blog', name: 'Blog', Component: Blog },
]

export default function RouterData() {
  return (
    <Router>
        <Navbar />
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="h-full page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        {/**<Footer />
        <Circle2 background="#020613" color="#b20962"/>*/}
    </Router>
  );
}
