import { useState, useEffect } from "react";
import AuctionList from "./AuctionList";

const FetchAll = () => {
    const[data, setData] = useState()

    useEffect(() => {
        fetch('https://auctioneer.azurewebsites.net/auction/6fed')
        .then(response => {
            if(!response.ok){
                throw Error (console.log('Error: ' + error))
            }
            return response.json();
        })
        .then(result => {
            setData(result)
        })
        .catch(error => console.log('Error: ' + error))
    }, [])

    return(
        <>
            <AuctionList Auctions={data}/>
            {/* <div><p>{JSON.stringify(data)}</p></div> */}
        </>
    )
}

export default FetchAll;