const AuctionList = (Auctions) => {
    const data = Auctions; // Behöver inte ha data som värde, du kan skriva direkt på rad 7: Auctions && Auctions.length > 0, Auctions.map
    // console.log(data)

    return (
        <>
            {
                (data && data.length > 0) && data.map((item) => ( // Lägga till conditional rendering så att den vet när den ska mappa tror jag 

                    <div>
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
        </>


    );
}

export default AuctionList;

