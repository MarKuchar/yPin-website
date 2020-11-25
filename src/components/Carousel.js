import React from 'react';
import Card from './Card'
import pexeso from '../assets/images/pexeso.png'
import yPin from '../assets/images/yPin.png'
import github from '../assets/images/github.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    tittle: 'Spike The Day',
                    subtittle: 'Advertisment app that using AR technology',
                    imgSrc: yPin,
                    link: 'htttps://spike.com',
                    selected: false
                },
                {
                    id: 1,
                    tittle: 'Pexeso',
                    subtittle: 'Memory card game with different kind of animations',
                    imgSrc: pexeso,
                    link: 'htttps://pexeso.com',
                    selected: false
                },
                {
                    id: 3,
                    tittle: 'Github',
                    subtittle: 'Personal github page',
                    imgSrc: github,
                    link: 'https://github.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }   

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
           <Container fluid={true}>
               <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
               </Row>
           </Container>
        );
    }
}

export default Carousel;