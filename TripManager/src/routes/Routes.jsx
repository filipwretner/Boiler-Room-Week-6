import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Form from '../pages/Form';
import Details from '../pages/Details';

const Routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    );
}

export default Routes;