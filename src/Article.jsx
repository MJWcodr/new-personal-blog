// Modules
import React from 'react';

// import { useParams } from 'react-router-dom'

// Components
import Footer from './components/footer/footer';
import ArticleView from './components/ArticleView/ArticleView'
import Navigation from './components/nav/nav';

// Files
import './styles/index.scss';
import './styles/styles.json';

/* function getArrayOfJSON (String, Json) {
  var i = 0;
  for (i = 0; i < Json.length; i++) {
      if (Json[i].identifier == String){
          break
      }
      else if (i == Json.length){
          throw 'String not in JSON'
      }
  }
  return Json[i]
}
*/

class Article extends React.Component {
  render() {
    const { id } = this.props.match.params;
      return (
        <div className="Main"> 
          <Navigation/>
          <ArticleView id={id}/>
          <Footer/>
        </div>
      );
      }

}

export default Article;