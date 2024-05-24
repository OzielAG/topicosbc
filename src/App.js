import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {getContract} from "./contractConfig";

function App() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [direccion, setDireccion] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [edad, setEdad] = useState(0);
  const [costo, setCosto] = useState(0);
  const [consulta, setConsulta] = useState('');

  const tareaContract = getContract();

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeFecha = (event) => {
    setFecha(event.target.value);
  };

  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const handleChangeDiagnostico = (event) => {
    setDiagnostico(event.target.value);
  };

  const handleChangeEdad = (event) => {
    setEdad(parseInt(event.target.value));
  };

  const handleChangeCosto = (event) => {
    setCosto(parseInt(event.target.value));
  };

  const handleSubmit = async () => {
    try {
      await tareaContract.setName(nombre);
      await tareaContract.setFecha(fecha);
      await tareaContract.setDireccion(direccion);
      await tareaContract.setDiagnostico(diagnostico);
      await tareaContract.setEdad(edad);
      await tareaContract.setCosto(costo);

      const consulta = await tareaContract.getConsulta();
      setConsulta(consulta);
    } catch (error) {
      console.error('Error al enviar la consulta:', error);
    }
  };

  return (
    <div className="App">
      <h1>Registro de Consulta Médica</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del Paciente:</label>
        <input type="text" id="nombre" value={nombre} onChange={handleChangeNombre} />

        <label htmlFor="fecha">Fecha de Consulta:</label>
        <input type="text" id="fecha" value={fecha} onChange={handleChangeFecha} />

        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" value={direccion} onChange={handleChangeDireccion} />

        <label htmlFor="diagnostico">Diagnóstico:</label>
        <input type="text" id="diagnostico" value={diagnostico} onChange={handleChangeDiagnostico} />

        <label htmlFor="edad">Edad:</label>
        <input type="number" id="edad" value={edad} onChange={handleChangeEdad} />

        <label htmlFor="costo">Costo:</label>
        <input type="number" id="costo" value={costo} onChange={handleChangeCosto} />

        <button type="submit">Registrar Consulta</button>
      </form>

      {consulta && (
        <div>
          <h2>Consulta Registrada:</h2>
          <p>{consulta}</p>
        </div>
      )}
    </div>
  );
}


export default App;
