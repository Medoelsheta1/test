import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
