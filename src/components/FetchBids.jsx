import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './AuctionList.css';

const FetchBids = ({ auctionId }) => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        fetch(`https://auctioneer2.azurewebsites.net/bid/6fed/${auctionId}`)
            .then(response => {
                if (!response.ok) {
                    throw Error('Error fetching bids');
                }
                return response.json();
            })
            .then(result => {
                setBids(result);
            })
            .catch(error => console.error('Error: ', error));
    }, [auctionId]);

    let buttonHandler = () => {
        fetch(`https://auctioneer2.azurewebsites.net/auction/6fed/${auctionId}`, {
            method: 'DELETE'
        }).then(() => {
            // Handling efter radering av auktionen
        });
    };

    return (
        <>
            <div className="fetch-bids-header">
                <Link to="/">
                    <button className="back-to-auctions-btn">Till auktioner</button>
                </Link>
            </div>
            <h2>Bud</h2>
            <div>
                {bids.map(bid => (
                    <p key={bid.BidID}>
                        <p>{bid.Amount} kr </p>
                        <p>{bid.Bidder}</p>
                    </p>
                ))}
            </div>
            {bids.length === 0 && (
                <div>
                    Det finns inga bud ännu, du kan ta bort auktionen{' '}
                    <button onClick={buttonHandler}>Delete</button>
                </div>
            )}
        </>
    );
};

export default FetchBids;
