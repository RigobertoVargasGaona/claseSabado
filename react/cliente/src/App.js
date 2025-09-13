
import './App.css';
import { AgreagarCliente } from './components/cliente/AgreagarCliente.js';
import ClienteListar from './components/cliente/ClienteListar.js';
import Dashboard from './components/pages/Dashboard.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Dashboard/>
   
     <AgreagarCliente/>
    </div>
  );
}

export default App;
