import { useEffect, useState } from "react";

const FetchLatestBid = ({ auctionId }) => {
    const [latestBidAmount, setLatestBidAmount] = useState(null);

    useEffect(() => {
        fetch(`https://auctioneer2.azurewebsites.net/bid/6fed/${auctionId}`)
            .then(response => {
                if (!response.ok) {
                    throw Error('Error fetching bids');
                }
                return response.json();
            })
            .then(result => {
                if (result && result.length > 0) {
                    const latestBid = result[result.length - 1];
                    setLatestBidAmount(latestBid.Amount);
                } else {
                    setLatestBidAmount(null);
                }
            })
            .catch(error => console.error('Error: ', error));
    }, [auctionId]);

    return (
        <>
            <h2>Slut bud</h2>
            <p> 
                {latestBidAmount !== null ? latestBidAmount : "Inga bud har lagts"}
            </p>
        </>
    );
};

export default FetchLatestBid;
