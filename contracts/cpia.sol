// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Tarea {
   
    struct Consulta {
        string fecha;
        string direccion;
        string diagnostico;
        uint edad;
        uint costo;
    }

    mapping(address => string) public names; 
    mapping(address => Consulta) private consultas;

    function getConsulta() public view returns (string memory){
        string memory name = names[msg.sender];
        Consulta memory consulta = consultas[msg.sender];
        return string(abi.encodePacked(
            "Paciente: ", name,
            " Atendido el dia: ", consulta.fecha,
            " En el hospital: ", consulta.direccion,
            " Con un diagnostico de: ", consulta.diagnostico
        ));
    }

    function setName(string memory _name) public {
        names[msg.sender] = _name;
    }

    function setFecha(string memory _fecha) public {
        consultas[msg.sender].fecha = _fecha;
    }

    function setDireccion(string memory _direccion) public {
        consultas[msg.sender].direccion = _direccion;
    }

    function setDiagnostico(string memory _diagnostico) public {
        consultas[msg.sender].diagnostico = _diagnostico;
    }
    
    function setEdad(uint _edad) public {
        consultas[msg.sender].edad = _edad;
    }

    function setCosto(uint _costo) public {
        consultas[msg.sender].costo = _costo;
    }
}