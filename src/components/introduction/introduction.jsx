
import React from 'react'
import {Group} from '@mantine/core';

import "./introduction.scss";

import TypeAnimation from 'react-type-animation';

class Introduction extends React.Component {

    render() {
        return (
            
                <div className="introduction">
                <Group position="center" direction="column">
                        
                        
                        <div className="title-text">
                            <TypeAnimation
                            cursor={true}
                            sequence={['👋 Hello, I am Matthias', 700, '👋 Welcome to my blog!']}
                            wrapper="h1"
                            repeat="no"
                            /> 
                        </div>
                       
                </Group>
            </div>
        )
    }
}

export default Introduction;