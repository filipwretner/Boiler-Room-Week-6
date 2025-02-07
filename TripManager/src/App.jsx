import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { Details } from "./pages/Details";

function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
