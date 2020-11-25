import React from 'react';
import Carousel from '../components/Carousel';
import Myself from '../components/Myself';

function Home(props) {
    return(
        <div>
            <Myself title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel/>
        </div>
    );
};

export default Home;