import React from 'react';
import Card from './Card';

const cardArray = ({props}) => {
    return(
        <div>
        {props.map((value,i) =>{
            return(
                <Card key={i} 
                id={props[i].id} 
                name={props[i].name} 
                username={props[i].username} 
                email={props[i].email}
                />
                );
            })
        }
        </div>
    );
}

export default cardArray;