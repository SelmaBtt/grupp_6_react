// import './AuctionList.css'

const AuctionList = (Auctions) => {
    const data = Auctions.filter(auction => auction.bid && auction.bid.length > 0); // Behöver inte ha data som värde, du kan skriva direkt på rad 7: Auctions && Auctions.length > 0, Auctions.map
    if (data){console.log("true")} else {console.log("false")}
    return (
        <>
        {/* <div className="list-container"> */}
            {
                data && data.map((item) => ( // Lägga till conditional rendering så att den vet när den ska mappa tror jag 

                    <div className ="item-container">
                        <h2>{item.AuctionID}</h2>
                        <h3>{item.Description}</h3>
                        <h3>{item.StartDate}</h3>
                        <h4>{item.EndDate}</h4>
                        <h4>{item.GroupCode}</h4>
                        <h4>{item.StartingPrice}</h4>
                        <h4>{item.CreatedBy}</h4>

                    </div>
                ))
            }
        {/* </div> */}
        </>


    );
}

export default AuctionList;

