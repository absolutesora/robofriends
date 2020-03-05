import React from 'react';

const NavBar = (props) =>{
    return (
        <div style={{overflowY:"scroll", border:'2px solid', height:'525px'}}>
            {props.children}
        </div>
    );
}

export default NavBar;