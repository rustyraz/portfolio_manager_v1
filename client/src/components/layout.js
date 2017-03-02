import React, { Component } from 'react';

import FlashMessages from './flash/flashMessagesList';
import Navbar from './navbar';
import ComponentRoutes from './routes';
import '../index.css';

export default class Layout extends Component {
  render(){
    return (
      <div className="container">
        <Navbar/>
        <FlashMessages />
        
        <div className="row">
          { ComponentRoutes }
        </div>
      </div>
    );
  }

}
