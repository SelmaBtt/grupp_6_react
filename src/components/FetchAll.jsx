import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Search from './Search'
import './AuctionList.css'
import Background from "./Background";

const FetchAll = () => {
    const [apiData, setApiData] = useState([]); 
    const [auctions, setAuctions] = useState([]); 
    const [searchValue, setSearchValue] = useState(""); 

    // Funktion för att kontrollera om auktionen är öppen
    const isAuctionOpen = (endDate) => {
        const currentDate = new Date().getTime();
        const auctionEndDate = new Date(endDate).getTime();
        return auctionEndDate > currentDate;
    };

    
    useEffect(() => {
        fetch('https://auctioneer2.azurewebsites.net/auction/6fed/')
            .then(response => {
                if (!response.ok) {
                    throw Error('Error fetching auctions');
                }
                return response.json();
            })
            .then(result => {
                setApiData(result);
                setAuctions(result); 
            })
            .catch(error => console.error('Error: ', error));
    }, []);

    
    useEffect(() => {
        const filteredAuctions = apiData.filter(auction =>
            auction.Title.toLowerCase().includes(searchValue.toLowerCase()) &&
            (isAuctionOpen(auction.EndDate) || searchValue) // Endast öppna auktioner visas på startsidan, alla auktioner visas när man söker
        );
        setAuctions(filteredAuctions);
    }, [searchValue, apiData]);
    
    return (
        <>
        <Background />
           <div className="list-container">
              <Search setSearchValue={setSearchValue} />
              {filterAuctions && filterAuctions.map((item) => (
                <Link to={`/Auction/${item.AuctionID}`} state={{ item }}>
                    <div className="auction-box" key={item.AuctionID}>
                      <h3>{item.Title}</h3>
                      <p>{item.Description}</p>
                      <p>Startdatum: {new Date(item.StartDate).toLocaleString()}</p>
                      <p>Slutdatum: {new Date(item.EndDate).toLocaleString()}</p>
                      <p>Startpris: {item.StartingPrice}</p>
                      <p>Skapad av: {item.CreatedBy}</p>
                      {isAuctionOpen(item.EndDate) ? <p style={{color: 'green'}}>Auktionen är öppen</p> : <p style={{color: 'red'}}>Auktionen är avslutad</p> }
                  </div>
                </Link>
                ))}
            </div>
        </>
    );
};


export default FetchAll;
