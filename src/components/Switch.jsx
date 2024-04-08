import { Routes, Route } from 'react-router-dom';
import Auction from './Auction'
import FetchAll from './FetchAll';
import Form from './Form'

const Switch = () => {
    return(
        <Routes>
            <Route path='/' exact element={<FetchAll />}></Route>
            <Route path='/Auction/:id' element={<Auction />}></Route>
            <Route path='/Form' element={<Form />}></Route>
        </Routes>
    )
}

export default Switch;