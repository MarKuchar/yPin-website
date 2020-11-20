import React from 'react';
import Content from '../components/Content';
import Myself from '../components/Myself';

function About(props) {
    return(
        <div>
            <Myself tittle={props.tittle} />
            <Content>
                <p>I am a dedicated software engineer with creative problem-solving skills.<br/>
                Currently, I am seeking opportunities that will allow proceeding in the way to become a qualified software engineer.</p>
                <p>My expertise also includes drawing in solid work design software and building projects in HVAC systems. </p>
                
                <p>I love coding and I hope that once I will create something that people will love to use!</p>
            </Content>
        </div>
    );
};

export default About;