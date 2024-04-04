import { Routes, Route } from 'react-router-dom';
import Auction from './Auction'

const Switch = () => {
    return(
        <Routes>
            <Route path='/Auction' element={<Auction />}></Route>
        </Routes>
    )
}

export default Switch;