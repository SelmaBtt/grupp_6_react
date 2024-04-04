import { Routes, Route } from 'react-router-dom';
import Auction from './Auction'
import FetchAll from './FetchAll';

const Switch = () => {
    return(
        <Routes>
            <Route path='/' exact element={<FetchAll />}></Route>
            <Route path='/Auction/:id' element={<Auction />}></Route>
        </Routes>
    )
}

export default Switch;