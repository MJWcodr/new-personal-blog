import React from 'react';

import './styles/styles.json';

import Navigation from './components/nav/nav';
import Introduction from './components/introduction/introduction'
import Posts from './components/Posts/posts';
import Footer from './components/footer/footer';

import './styles/index.scss';

class App extends React.Component {

  render() {
      return (
        <div className="Main"> 
          <Navigation/>
          <Introduction/>
          <Posts/>
          <Footer/>
        </div>
      );
      }

}

export default App;