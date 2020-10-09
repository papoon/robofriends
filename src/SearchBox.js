import React from 'react';

const searchBox = ({searchfield,searchChange}) => {

    return (
        <div
            className='pa2'>
            <input
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