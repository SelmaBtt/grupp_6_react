import { useParams } from "react-router-dom";

const Auction = () => {
  const { id } = useParams()
    return (
      <>
        <h1>HEj: {id} </h1>
      </>
    )
};
  
export default Auction;