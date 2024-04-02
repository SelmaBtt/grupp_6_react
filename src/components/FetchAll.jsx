import { useState, useEffect } from "react";
import Search from "./Search";

const FetchAll = () => {
    const [data, setData] = useState() // For fetch data state
    const [searchValue, setSearchValue] = useState() //State for input value
    useEffect(() => {
        fetch('https://auctioneer.azurewebsites.net/auction/6fed/')
            .then(response => {
                if (!response.ok) {
                    throw Error(console.log('Error: ' + error))
                }
                return response.json();
            })
            .then(result => setData(result))
            .catch(error => console.log('Error: ' + error))
    }, [searchValue])

    return (
        <>
            {/* <div>{JSON.stringify(data)}</div> */}
            <Search setSearchValue={setSearchValue} />

        </>
    )
}

export default FetchAll;