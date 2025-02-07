import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import AppRoutes  from './routes/Routes';
import Footer from "./components/Footer/footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
