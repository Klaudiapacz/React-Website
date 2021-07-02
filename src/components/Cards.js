
import React from 'react';
import CardItem from '../components/CardItem';
import './Cards.css';
import forest from '../img/forest.jpg';
import lake from '../img/lake.jpg';
import rocks from '../img/red-rocks.jpg';

    function Cards(props) {
        return (
            <div className='cards'>
                <h1>Check OUT these epic destinations!</h1> 
                <div className="cards_conteiner">
                    <div className="cards_wrapper">
                        <ul className="cards_items">
                            <CardItem src={forest}
                            text='lorem lorem lorem lorem'
                            label='Adventure'
                            path='/services'
                            />
                            <CardItem src={lake}
                            text='lorem lorem lorem lorem'
                            label='Relax'
                            path='/services'
                            />
                            <CardItem src={rocks}
                            text='lorem lorem lorem lorem'
                            label='Relax'
                            path='/services'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    

    export default Cards;