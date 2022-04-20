import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
       <Header></Header>
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
