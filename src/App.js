import './App.css';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import TareaAbi from './artifacts/contracts/cpia.sol/Tarea.json';

const contractAddress = '0x538d2755b5fb9a4f7c5769bdcf5103e569d6e241';
const contractABI = TareaAbi.abi;

export const getContract = (signer) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};

function App() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [direccion, setDireccion] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [edad, setEdad] = useState(0);
  const [costo, setCosto] = useState(0);
  const [consulta, setConsulta] = useState('');
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          setSigner(signer);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask not detected');
      }
    };
    init();
  }, []);

  const tareaContract = signer ? getContract(signer) : null;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!tareaContract) {
      console.error('Contract not initialized');
      return;
    }

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