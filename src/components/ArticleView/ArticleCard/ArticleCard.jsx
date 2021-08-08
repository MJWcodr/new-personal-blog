import React from 'react';

import './ArticleCard.scss';
import TitleImage from './background.jpg'
import clock from './clock.svg'


class ArticleCard extends React.Component {

    
    render(){
            
        return (
            <div className="ArticleCard">
                <div className="HeadingText">
                    <h1 className="TitleText">{this.props.title}</h1>
                    <div className="HeadingSubtitle">
                        <img src={clock} alt="clock icon"/>
                        <p> {this.props.date} </p>
                    </div>
                </div>
                <img src={this.props.image} className="TitleImage" alt="Title"/>
                <p className="ArticleText">
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default ArticleCard;