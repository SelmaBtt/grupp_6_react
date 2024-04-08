import {useEffect, useState} from "react";

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

    return (
        <>
            <h2>Bud</h2>
            <ul>
                {bids.map(bid => (
                    <li key={bid.BidID}>
                        <p>{bid.Amount} kr </p>
                        <p>{bid.Bidder}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FetchBids;