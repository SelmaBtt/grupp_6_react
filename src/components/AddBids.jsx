import { useState } from 'react'

function AddBids({auctionId}) {
    const [bidAmount, setBidAmounts] = useState("")
    const [Bidder, setBidder] = useState("")

    const buttonHandler = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch(`https://auctioneer2.azurewebsites.net/bid/6fed/`, {
              method: 'POST',
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({
                  AuctionID: auctionId,
                  Amount: bidAmount,
                  Bidder: Bidder,
                  GroupCode: "6fed"
              })
          });
  
          if (!response.ok) {
            throw new Error("Error placing bid");
              
          }
      } catch (error) {
          alert("Budet är för lågt");
      }
  }
  
    
    return (
    <div>
        <p>Lägg bud</p>
        <input 
            type="number" 
            value={bidAmount}
            onChange={(e) => setBidAmounts(e.target.value)}
            required
        />
        <p>Namn</p>
        <input 
            type="text" 
            value={Bidder}
            onChange={(e) => setBidder(e.target.value)}
            required
        />
        <br />
      <button onClick={buttonHandler}>Lägg bud</button>
    </div>
  )
}

export default AddBids;