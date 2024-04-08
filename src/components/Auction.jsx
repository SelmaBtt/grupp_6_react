import { useParams, useLocation } from "react-router-dom";
import FetchBids from "./FetchBids";


const Auction = () => {

    const { id } = useParams()

    const location = useLocation();
    const { item } = location.state || {};
    return (
      <>
        <h1>HEj: {id} </h1>

        {item && ( // Render item if it exists
          <div>
            <h2>{item.Title}</h2>
            <h3>{item.Description}</h3>
            <h3>{item.StartDate}</h3>
            <h4>{item.EndDate}</h4>
            <h4>{item.StartingPrice}</h4>
            <h4>{item.CreatedBy}</h4>
            <FetchBids auctionId={item.AuctionID} />
          </div>
        )}
      </>
    )
};
  
export default Auction;