import React from 'react'

export const Search = ({ search, setSearch, handleSearch }) => {

    return (
        <div className='w-full flex justify-center items-center gap-2 mt-4 mb-5'>
            <input type="text"
                className='w-3/4 h-11 border-2  border-black rounded-lg outline-none px-3 py-4 font-bold text-[1.5rem] bg-white text-[#a83434]'
                placeholder='Enter your City name'
                name='search' value={search} onChange={(event) => setSearch(event.target.value)} />
            <button className=" border-none rounded-md bg-white text-black cursor-pointer font-semibold outline-none px-4 py-3 "
                onClick={handleSearch}>
                Search Weather
            </button>
        </div>
    )
}
