import { Badge } from '@mantine/core'
import React from 'react'

import './Postcard.scss'

class PostCard extends React.Component {
    render(){
        return (
            <a href={this.props.link}>
            <div className="PostCard">
                <img className="cover" alt={this.props.thumbnail} src={this.props.thumbnail}/> {/* TO-DO Create meaningful alt*/}
                <div className="PostCardSection"> 
                    <p className="PostCardTitle">
                      {this.props.postCardTitle}
                    </p>
                    <p className="Subtitle">
                        {this.props.subtitle}
                    </p>
                    <Badge color="dark" variant="outline" className="Tag">{this.props.tag}</Badge>
                </div>
            </div>
            </a>
        );
    }
}

export default PostCard;