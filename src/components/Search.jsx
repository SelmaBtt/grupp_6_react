import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
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
            <div className="searcbar">
                <input type="text" className="" placeholder="Skriv in ditt sökord här!" ref={searchText}></input>
            </div>
            <Button onClick={() => setSearchValue(searchText.current.value)} className="d-block w-50 mx-auto mt-2" variant="primary" size="lg">Sök</Button>
            <div className="searchresult">

            </div>
            <Link to="/Form">Lägg till auktion</Link>
        </div>
    );
}

export default Search
