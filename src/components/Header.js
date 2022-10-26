import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detaildune from './Detaildune';
import Detailjoker from './Detailjoker';
import Detailinfinite from './Detailinfinite';
import Detaileverything from './Detaileverything';
import Detaillightyear from './Detaillightyear';
import Detailmorbius from './Detailmorbius';
import Detailantman from './Detailantman';
import Detailavenger from './Detailavenger';
import Detailbatman from './Detailbatman';
import Detailsuperman from './Detailsuperman';
import Detailspiderman from './Detailspiderman';
import Detailrobinhood from './Detailrobinhood';
import './style.css';
import Navigasi from "./Navigasi";
const Header = () => {
    return (
        <>
        <Navigasi />
             <BrowserRouter>
             <Routes>
                 <Route index element={<Home />} />
                 <Route path="Dune" element={<Detaildune />} />
                 <Route path="Joker" element={<Detailjoker />} />
                 <Route path="Infinite" element={<Detailinfinite />} />
                 <Route path="Everything" element={<Detaileverything />} />
                 <Route path="Lightyear" element={<Detaillightyear />} />
                 <Route path="Morbius" element={<Detailmorbius />} />
                 <Route path="Antman" element={<Detailantman />} />
                 <Route path="Avenger" element={<Detailavenger />} />
                 <Route path="Batman" element={<Detailbatman />} />
                 <Route path="Superman" element={<Detailsuperman />} />
                 <Route path="Spiderman" element={<Detailspiderman />} />
                 <Route path="Robinhood" element={<Detailrobinhood />} />
             </Routes>
             </BrowserRouter>
        </>
            
    )
}

export default Header;