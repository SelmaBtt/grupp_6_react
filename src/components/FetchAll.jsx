import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Auction from "./Auction";
import Search from './Search'

const FetchAll = () => {
    const [apiData, setApiData] = useState([]) // For fetch data state
    const [searchValue, setSearchValue] = useState() //State for input value
    const [filterAuctions, setFilterAuctions] = useState([]) // For fetch data state
    
    // Fetching api data
    useEffect(() => {
        fetch('https://auctioneer.azurewebsites.net/auction/6fed/')
            .then(response => {
                if (!response.ok) {
                    throw Error(console.log('Error: ' + error))
                }
                return response.json();
            })
            .then(result => {
                setApiData(result)
                setFilterAuctions(result)
            })
            .catch(error => console.log('Error: ' + error))
        }, [])
        
    useEffect(() => {
        const filteredAuctions = apiData.filter((auction) => 
            auction.Title.toLowerCase().includes(searchValue.toLowerCase())
        )
        
        setFilterAuctions(filteredAuctions)

    }, [searchValue])

    return (
        <>
        <div className="list-container">
            <Search setSearchValue={setSearchValue}/>
            {
                filterAuctions && filterAuctions.map((item) => ( // Lägga till conditional rendering så att den vet när den ska mappa tror jag 

                    <div>
                        <Link to={`/Auction`}>{item.Title}</Link>
                        <h3>{item.Description}</h3>
                        <h3>{item.StartDate}</h3>
                        <h4>{item.EndDate}</h4>
                        <h4>{item.StartingPrice}</h4>
                        <h4>{item.CreatedBy}</h4>
                    </div>
                ))
            }
        </div>
        </>
    )
}



export default FetchAll;