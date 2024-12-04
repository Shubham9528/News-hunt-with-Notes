import React, { useState } from "react";
function SearchBox({setSubmittedSearch}) {
    const [search, setSearch] = useState("");
   

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
        // console.log(search);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedSearch(search);
        // console.log(search);
    }
    return(<div>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative w-96" >
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-lg text-gray-950 border border-gray-300 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search " required  onChange={handleChange} value={search}/>
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>

        </div>);
}

export default SearchBox;