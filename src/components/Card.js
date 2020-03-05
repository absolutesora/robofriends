import React from 'react';

const Card = ({name,email,id,username}) => {
    return(
        <div className='tc bg-light-blue dib br3 pa4 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${username}?size=200x200`} alt='robotaka'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;