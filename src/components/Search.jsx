import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useRef } from "react";
import './Search.css'

const Search = ({ setSearchValue }) => {
    const searchText = useRef();

    return (
        <div className="search">
            <div className="searchbar">
                <input type="text" className="search-input" placeholder="Skriv in ditt sökord här!" ref={searchText}></input>
            
            <button onClick={() => setSearchValue(searchText.current.value)} className="search-button" variant="primary" size="lg">Sök</button>
            </div>
            <div className="searchresult">

            </div>
            <Link to="/Form">Lägg till auktion</Link>
        </div>
    );
}

export default Search
