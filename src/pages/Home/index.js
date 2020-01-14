import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Background from '../../images/bg.svg'
import PurpleLayer from '../../images/purple-layer.svg'
import WhiteLayer from '../../images/white-layer.svg'
import GrayLayer from '../../images/gray-layer.svg'
//import MountainLayer from '../../images/mountain.svg'
import CloudsLayer from '../../images/clouds.svg'
import Button from '../../components/Button';

import Moon from '../../images/moon.svg'


export default class Home extends Component {
    changeTheme(name){
        document.body.classList.remove(...this.themes);
        if (name) {
            document.body.classList.add(name);
        }
    }
  render() {
    return (
        <div className="flex w-full h-full">
            <div className="hidden w-full h-full overflow-hidden md:block" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <div className="absolute w-full h-full overflow-hidden">
                    {/**<div className="absolute right-0 ml-40" style={{backgroundImage: `url(${MountainLayer})`, backgroundRepeat: 'no-repeat', width: '100%', height: '100%'}}></div>*/}
                    <div className="inset-y-0 right-0 clouds" style={{backgroundImage: `url(${CloudsLayer})`, backgroundRepeat: 'repeat', width: '100%', height: '100%'}}></div>
                </div>
                <button className="absolute right-0 focus:outline-none" onClick={() => this.changeTheme()}>
                    <img src={Moon} alt=""/>
                </button>
                    
                <div className="absolute flex flex-col justify-end h-full" style={{backgroundImage: `url(${PurpleLayer})`, backgroundSize: 'cover', width: '77%'}}></div>
                <div className="absolute h-full" style={{backgroundImage: `url(${WhiteLayer})`, backgroundSize: 'cover', width: '75%'}}></div>
                <div className="absolute h-full" style={{backgroundImage: `url(${GrayLayer})`, backgroundSize: 'cover', width: '40%'}}></div>
            </div>
      
            <div className="p-12 md:absolute md:w-2/5">
                <h1 className="mt-32 text-5xl font-bold text-secondary-500 dark:text-white">Grupo Rawer</h1>
                <p className="mb-12 text-sm font-semibold leading-loose text-primary-500">
                Rawer é um grupo digital que tem como finalidade desenvolver aplicações Web, Mobile e Desktop. 
                </p>
                <Button text="Contratar" bg="bg-gradient-l-primary" />
            </div>
        </div>
    );
  }
}
