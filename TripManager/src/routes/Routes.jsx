import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Form from '../pages/Form';
import Details from '../pages/Details';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/details/:tripId" element={<Details />} />
        </Routes>
    );
}

export default AppRoutes;