import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';  // <--- Viktigt!
function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
