// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract tarea {
   
    mapping(address => string) public names; 
    string public fecha;
    string public direccion;
    string public diagnostico;
    uint public edad;
    uint public costo;




    function getConsulta() public view returns (string memory){
        string memory name = names[msg.sender];
        return string(abi.encodePacked("Paciente:  ", name,"  Atendido el dia:  " , fecha,"  En el hospital  " , direccion, "  Con un diagnostico de  " ,diagnostico));
    }

    function setName(string memory _name) public {
        names[msg.sender] = _name;
    }

    function setFecha(string memory _fecha) public {
        fecha = _fecha;
    }

    function setDireccion(string memory _direccion) public {
        direccion = _direccion;
    }

    function setDiagnostico(string memory _diagnostico) public {
        diagnostico = _diagnostico;
    }
    
    function setEdad(uint _edad) public {
        edad = _edad;
    }

    function setCosto(uint _costo) public {
        costo = _costo;
    }
}