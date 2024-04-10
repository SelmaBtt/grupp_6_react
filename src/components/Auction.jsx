import { useParams, useLocation } from "react-router-dom";
import FetchBids from "./FetchBids";
import AddBids from "./AddBids";
import FetchLatestBid from "./FetchLatestBid";


const Auction = () => {

    const { id } = useParams()

    const location = useLocation();
    const { item } = location.state || {};

    // let today = new Date().to
    return (
      <>

        {item && ( // Render item if it exists
          <div style={{color: "black" }}>
            <h2>{item.Title}</h2>
            <h3>{item.Description}</h3>
            <h3>{item.StartDate}</h3>
            <h4>{item.EndDate}</h4>
            <h4>{item.StartingPrice}</h4>
            <h4>{item.CreatedBy}</h4>
            {/* Om slutdatum är förbi rendera "NY COMPONENT"
            Annars Rendera FetchBids och AddBids */}

            {item.EndDate > new Date().toLocaleString() ? (
              <>
                <FetchBids auctionId={item.AuctionID} />
                <AddBids auctionId={item.AuctionID}/>  
              </>
            ) : (
              <FetchLatestBid auctionId={item.AuctionID} />
            )}
          </div>
        )}
      </>
    )
};
  
export default Auction;