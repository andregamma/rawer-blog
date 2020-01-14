import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import { Container } from './styles';
const routes = [
    { path: '/', name: 'sobre'},
    { path: '/services', name: 'serviços'},
    { path: '/team', name: 'equipe'},
    { path: '/blog', name: 'blog'},
]
export default class Navbar extends Component {
    
  render() {
    return (
       (
        <nav className="absolute z-10 flex justify-center w-full p-4">
            <ul className="flex justify-between font-bold text-secondary-100">
                {routes.map(route => (
                <NavLink
                    key={route.path}
                    as={NavLink}
                    to={route.path}
                    className="mx-5"
                    activeClassName="active"
                    exact
                >
                    <li>{route.name}</li>
                </NavLink>
                ))}
            </ul>
        </nav>
       )
    );
  }
}
