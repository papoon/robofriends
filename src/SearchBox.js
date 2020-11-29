import React from 'react';

const searchBox = ({searchfield,searchChange}) => {

    return (
        <div
            className='pa2'>
            <input
                aria-label='Search Robots'
                className='pa3 ba b--green'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
                >
            </input>
        </div>
    )
}

export default searchBox;