import React from 'react';

import Myself from '../components/Myself';

function Home(props) {
    return(
        <Myself tittle={props.tittle} subTittle={props.subTittle} text={props.text} />
    );
};

export default Home;