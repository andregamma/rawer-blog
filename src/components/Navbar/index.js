import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import { Container } from './styles';
const routes = [
    { path: '/', name: 'sobre'},
    { path: '/services', name: 'serviços', disabled: true},
    { path: '/team', name: 'equipe', disabled: true},
    { path: '/blog', name: 'blog', disabled: true},
]
export default class Navbar extends Component {
    
  render() {
    return (
       (
        <nav className="absolute z-10 flex justify-center w-full p-4 bg-gradient-t-primary md:bg-none">
            <ul className="flex justify-between font-bold text-secondary-500 md:text-secondary-100">
                {routes.map(route => (
                <NavLink
                    key={route.path}
                    as={NavLink}
                    to={route.path}
                    className={`mx-5 ${route.disabled ? 'pointer-events-none' : ''}`}
                    activeClassName="text-white border-white border-t-2 md:text-secondary-500 md:border-primary-500"
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
