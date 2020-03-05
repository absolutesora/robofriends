import React from 'react';

const SearchBox = ({searchChange, reset, textChange}) => {
    return (
        <div className='pa2'>
            <form name="form">
                <input 
                className='pa2 ba b--green bg-lightest-blue'
                type='text' 
                placeholder="search your robots"
                onChange = {textChange}
                id='robot'
                /> 
                <br></br>
                <div className='pa2'>
                <input
                    type='button'
                    value='Search Robot!'
                    onClick={searchChange}
                />
                <input className='ml1'
                    type='reset'
                    onClick={reset}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBox;