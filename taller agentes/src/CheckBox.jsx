import { useState, useEffect } from 'react';

function CheckBoxFilter({ selectedRoles, handleRoleChange }){

const[roles, setRoles] = useState([]);

useEffect(()=>{
const urlApi = "https://valorant-api.com/v1/agents?isPlarayable=true";
fetch(urlApi)
.then((response) => response.json())
.then((data)=>{
const agentes = data.data
const rolesUnicos = [...new Set(agentes.filter(a=>a.role && a.role.displayName).map(e => e.role.displayName))];
setRoles(rolesUnicos);
})
.catch((error)=> console.error('Error al momento de obtener los datos:',error));

},[]);



return(<>
   <div className="flex gap-2 p-2 justify-end">
        <h2 className="font-bold mb-2">Filtrar por rol:</h2>
        {roles.map((role) => (
          <div key={role} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={role}
              checked={selectedRoles.includes(role)} // Si el rol está seleccionado
              onChange={() => handleRoleChange(role)} // Llamar al manejador de cambios
            />
            <label htmlFor={role} className="mr-2 ml-1">{role}</label>
          </div>
        ))}
      </div>







</>)}
export default CheckBoxFilter;