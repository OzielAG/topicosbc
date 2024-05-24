
const hre = require("hardhat");

async function main() {
  // Obtén el contrato que deseas desplegar
  const Tarea = await hre.ethers.getContractFactory("tarea");
  // Despliega el contrato
  const tarea = await Tarea.deploy();

  // Espera a que el contrato se despliegue
  await tarea.deployed();

  // Imprime la dirección del contrato desplegado
  console.log("tarea deployed to:", tarea.address);
}

// Ejecuta el script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });