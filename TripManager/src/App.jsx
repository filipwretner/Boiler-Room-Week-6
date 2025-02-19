// App.jsx
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './components/Header/Header';
import Fallback from './pages/Fallback';
import AppRoutes from './routes/Routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Fallback />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


