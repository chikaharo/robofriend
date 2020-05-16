import Card from './Card'
import React from 'react';

const CardList = ({robots}) => {
    return (
        robots.map((item, i) => {
            return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        })
    )
}

export default CardList;