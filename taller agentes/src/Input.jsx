function SearchBar({ searchText, handleInputChange }) {

    return (<>
        <div className="border-2 border-red-600 flex justify-end h-full items-end">
            <input className="h-14" type="search" size={30} placeholder="Search" required="" value={searchText} onChange={(e)=>handleInputChange(e.target.value)}/>
        
            

        </div>



    </>)
}

export default SearchBar;