import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import AppRoutes  from './routes/Routes.jsx';
import Footer from "./assets/footer.jsx";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
