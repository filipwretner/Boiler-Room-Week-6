// App.jsx
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Fallback from './components/Fallback';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


