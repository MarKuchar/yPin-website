import React from 'react';
import CardInfo from './CardInfo'

function Card(props) {
    return(
        <div>
            <img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo tittle={props.item.tittle} subTittle={props.item.subTittle} link={props.item.link} /> }
        </div>
    );
}

export default Card;