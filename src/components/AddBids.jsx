import { useState } from 'react'

function AddBids({auctionId}) {
    const [bidAmount, setBidAmounts] = useState("")
    const [Bidder, setBidder] = useState("")

  const buttonHandler = (e) => {
    e.preventDefault();

    fetch(`https://auctioneer2.azurewebsites.net/bid/6fed/`, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            AuctionID: auctionId,
            Amount: bidAmount,
            Bidder: Bidder,
            GroupCode: "6fed"
        })
    })
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
      <button onClick={buttonHandler}>Lägg bud</button>
    </div>
  )
}

export default AddBids;