import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes  from './routes/Routes.jsx';
import Footer from "./assets/footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes  />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
