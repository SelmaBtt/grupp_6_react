import { useState, useEffect } from "react";

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
        .then(result => setData(result))
        .catch(error => console.log('Error: ' + error))
    }, [])

    return(
        <>
            <div>{JSON.stringify(data)}</div>
        </>
    )
}

export default FetchAll;