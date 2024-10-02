function SearchBar({ searchText, handleInputChange }) {

    return (<>
        <div className="border-2 border-red-600 flex justify-end h-12">
            <input type="search" size={30} height={12} placeholder="Search" required="" value={searchText} onChange={(e)=>handleInputChange(e.target.value)}/>
        
            

        </div>



    </>)
}

export default SearchBar;