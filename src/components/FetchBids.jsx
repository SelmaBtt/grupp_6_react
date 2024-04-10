
import {useEffect, useState } from "react";

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

  

    let buttonHandler = () =>
    {
        fetch(`https://auctioneer2.azurewebsites.net/auction/6fed/${auctionId}`,
        {
        method: 'DELETE' 
        }).then(() =>
        {
        })


    }

    return (
        <>
            <h2>Bud</h2>
            <div>
                {bids.map(bid => (
                    <p key={bid.BidID}>
                        <p>{bid.Amount} kr </p>
                        <p>{bid.Bidder}</p>
                    </p>
                ))}

            </ul>
            {bids.length === 0 && <div>Det finns inga bud ännu, du kan ta bort auktionen
            <button onClick={buttonHandler}>Delete</button></div>} 
        </>
    );
};

export default FetchBids;