import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [title, setTitle] = useState("")
    const [desciption, setDesciption] = useState("")
    const [startBid, setStartBid] = useState("")
    const [seller, setSeller] = useState("")
    const [endDate, setEndDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://auctioneer2.azurewebsites.net/auction/6fed/', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                GroupCode: '6fed',
                Title: title,
                Description: desciption,
                StartingPrice: startBid,
                StartDate: new Date().toLocaleString(),
                EndDate: endDate,
                CreatedBy: seller,
            })
        })
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1>Lägg till auktion</h1>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <label>Auktions titel</label>
                <input
                    type="text"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Beskrivning av auktionen</label>
                <textarea 
                    value={desciption}
                    onChange={(e) => setDesciption(e.target.value)}
                    required
                ></textarea>
                <label>Startbud</label>
                <input 
                    value={startBid}
                    onChange={(e) => setStartBid(e.target.value)}
                    type="number" 
                />
                <label>Säljare</label>
                <input 
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    type="text" 
                />
                <label>Slutdatum</label>
                <input 
                    value={endDate}
                    type="datetime-local" 
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <button>Lägg till Auktion</button>
            </form>
        </div>
    )
}

export default Form;