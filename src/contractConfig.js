// contractConfig.js

import { ethers } from 'ethers';
import TareaAbi from './artifacts/contracts/tarea.sol/tarea.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contractABI = TareaAbi.abi;

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};