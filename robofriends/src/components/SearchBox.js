import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className="pa4 ba b--red bg-washed-blue"
                type='search' 
                placeholder='search robots'
                onChange={searchChange}>
            </input>
        </div>
    )
}

export default SearchBox;