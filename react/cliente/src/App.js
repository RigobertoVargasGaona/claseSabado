
import './App.css';
import ClienteListar from './components/cliente/ClienteListar.js';
import Dashboard from './components/pages/Dashboard.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Dashboard/>
     <ClienteListar/>
    </div>
  );
}

export default App;
