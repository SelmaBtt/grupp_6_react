import { useState, useEffect } from "react";
import Search from "./Search";

const FetchAll = () => {
    const [data, setData] = useState() // For fetch data state
    const [searchValue, setSearchValue] = useState([]) //State for input value
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
            <Search setSearchValue={setSearchValue}/>
            {
                data && data.map((item) => ( // Lägga till conditional rendering så att den vet när den ska mappa tror jag 

                    <div>
                       <h3>{item.Title}</h3>
                        <h3>{item.Description}</h3>
                        <h3>{item.StartDate}</h3>
                        <h4>{item.EndDate}</h4>
                        <h4>{item.StartingPrice}</h4>
                        <h4>{item.CreatedBy}</h4>

                    </div>
                ))
            }
        </>
    )
}

export default FetchAll;