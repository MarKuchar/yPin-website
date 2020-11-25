import React from 'react';
import Carousel from '../components/Carousel';
import Myself from '../components/Myself';

function Home(props) {
    return(
        <div>
            <Myself tittle={props.tittle} subTittle={props.subTittle} text={props.text} />
            <Carousel/>
        </div>
    );
};

export default Home;