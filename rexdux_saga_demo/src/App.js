import './App.css';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
