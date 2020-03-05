import React from 'react';

const SearchButton = ({searchButton}) =>{
    return(
        <div>
            <input
            type ='button'
            name ='search'
            value = 'Search Robot!'
            onClick={searchButton}
            />
        </div>

    );
}

export default SearchButton;