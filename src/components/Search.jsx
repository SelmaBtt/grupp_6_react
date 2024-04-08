import { Button } from "react-bootstrap";
import { useRef } from "react";
import './Search.css'

const Search = ({ setSearchValue }) => {
    const searchText = useRef();
    /* const [searchauction, setAuction] = useState(null) */
    // const searching = () => {
    //     setSearchValue(searchText.current.value)
        
    //     /* fetch('')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setAuction(data)
    //         }); */
    // }

    return (
        <div className="search">
            <div className="searchbar">
                <input type="text" className="search-input" placeholder="Skriv in ditt sökord här!" ref={searchText}></input>
            
            <button onClick={() => setSearchValue(searchText.current.value)} className="search-button" variant="primary" size="lg">Sök</button>
            </div>
            <div className="searchresult">

            </div>
        </div>
    );
}

export default Search
