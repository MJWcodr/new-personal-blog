import React from 'react';

import './styles/styles.json';

import Navigation from './components/nav/nav';
import Footer from './components/footer/footer';
import AboutView from './components/AboutView/AboutView';

import './styles/index.scss';

class About extends React.Component {

  render() {
      return (
        <div className="Main"> 
          <Navigation/>
          <AboutView/>
          <Footer/>
        </div>
      );
      }

}

export default About;