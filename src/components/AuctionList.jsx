const AuctionList = (props) => {
    const data = props.data;

    return (
        {
            data.map((item) => (

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


    );
}

export default AuctionList;

