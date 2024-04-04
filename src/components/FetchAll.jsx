import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Search from './Search'
import './AuctionList.css'
import Background from "./Background";

const FetchAll = () => {
    const [apiData, setApiData] = useState([]); // För hämtad data
    const [searchValue, setSearchValue] = useState(""); // State för sökning
    const [filterAuctions, setFilterAuctions] = useState([]); // För filtrerad data

    // Funktion för att kontrollera om auktionen är öppen
    const isAuctionOpen = (endDate) => {
        const currentDate = new Date().getTime();
        const auctionEndDate = new Date(endDate).getTime();
        return auctionEndDate > currentDate;
    };

    // Hämta data från API:et
    useEffect(() => {
        fetch('https://auctioneer.azurewebsites.net/auction/6fed/')
            .then(response => {
                if (!response.ok) {
                    throw Error('Error fetching auctions');
                }
                return response.json();
            })
            .then(result => {
                setApiData(result);
                setFilterAuctions(result); // Visa alla auktioner initialt
            })
            .catch(error => console.error('Error: ', error));
    }, []);

    useEffect(() => {
        // Filtrera auktioner baserat på sökning
        const filteredAuctions = apiData.filter(auction =>
            auction.Title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilterAuctions(filteredAuctions);
    }, [searchValue, apiData]);

    return (
        <>
        <Background />
           <div className="list-container">
              <Search setSearchValue={setSearchValue} />
              {filterAuctions.map((item) => (
                  <div className="auction-box" key={item.AuctionID}>
                      <h3>{item.Title}</h3>
                      <p>{item.Description}</p>
                      <p>Startdatum: {new Date(item.StartDate).toLocaleString()}</p>
                      <p>Slutdatum: {new Date(item.EndDate).toLocaleString()}</p>
                      <p>Startpris: {item.StartingPrice}</p>
                      <p>Skapad av: {item.CreatedBy}</p>
                      {isAuctionOpen(item.EndDate) ? <p style={{color: 'green'}}>Auktionen är öppen</p> : <p style={{color: 'red'}}>Auktionen är avslutad</p> }
                  </div>
                ))}
           </div>
        </>
    );
};

export default FetchAll;
