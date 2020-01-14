import React, { Component } from 'react';

// import { Container } from './styles';

export default class Team extends Component {
  render() {
    return (
        <div className="container absolute p-12">
            <h1 className="text-5xl font-bold text-secondary-500 dark:text-white">Nossa equipe</h1>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="relative flex-initial w-40 h-64 m-4 border border-gray-200">
                    <img className="object-cover w-full h-40" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <div className="mt-4 text-center">
                        Jeffyter Saraiva
                    </div>
                </div>
                <div className="relative flex-initial w-40 h-64 m-4 border border-gray-200">
                    <img className="object-cover w-full h-40" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <div className="mt-4 text-center">
                        André Gama
                    </div>
                </div>
                <div className="relative flex-initial w-40 h-64 m-4 border border-gray-200">
                    <img className="object-cover w-full h-40" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <div className="mt-4 text-center">
                        Jaziel Cavalcante
                    </div>
                </div>
            
            </div>
        </div>
    );
  }
}
