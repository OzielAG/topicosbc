import { ethers } from "ethers";
import TareaABI from 'artifacts/contracts/tarea.sol/tarea.json'; // ABI del contrato

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // dirección del contrato desplegado
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const tareaContract = new ethers.Contract(contractAddress, TareaABI.abi, signer);

export default tareaContract;