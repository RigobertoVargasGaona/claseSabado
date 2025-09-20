
import './App.css';
import AgreagarCliente from './components/cliente/AgreagarCliente.js';
import ClienteListar from './components/cliente/ClienteListar.js';
import Dashboard from './components/pages/Dashboard.js';
import  BarraNavegacion  from './components/menu/BarraNavegacion.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <BarraNavegacion />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/cliente/clienteListar" element={<ClienteListar />}/>
          <Route path="/cliente/AgreagarCliente" element={<AgreagarCliente />}/>
        
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
