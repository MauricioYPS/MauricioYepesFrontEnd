import { useEffect, useState } from "react";
import CheckBoxFilter from './CheckBox'
function Card({ picture, agent, role }) {
  return (<>
    <div className="flex flex-col mb-10">
      <div className="w-60 h-72 border-2 border-blue-400 shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={picture}
          alt={`foto de ${agent}`}
        />
      </div>
      <div className="w-60 h-20 border-2 border-red-600 text-center bg-gray-600 shadow-md rounded-lg mt-2 p-2">
        <h1 className="text-white text-xl font-semibold">{agent}</h1>
        <h3 className="text-start text-gray-300">{role}</h3>
      </div>
    </div>


  </>)
}




function ContainerCard({ text, selectedRoles }) {
  const [agentes, setAgentes] = useState([]);
  const urlApi = "https://valorant-api.com/v1/agents?isPlarayable=true";

  useEffect(() => {
    console.log("UseEffects en ejecucion");
    fetch(urlApi)
      .then(response => response.json())
      .then((data) => {
        let agentes = data.data
        const filteredAgentes = agentes
          .filter((agent) => agent.role !== null)
          .reduce((acc, currentAgent) => {
            const isDuplicate = acc.some(
              (agent) => agent.displayName === currentAgent.displayName
            );
            if (!isDuplicate) {
              acc.push(currentAgent);
            }
            return acc;
          }, []);

        setAgentes(filteredAgentes);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);


const filteredAgents = agentes
    .filter((o) => o.displayName.toLowerCase().includes(text.toLowerCase()))
    .filter(
      (o) =>
        selectedRoles.length === 0 || selectedRoles.includes(o.role.displayName)
    );
  return (
    <>
      <div className="flex flex-wrap justify-around ">
        {filteredAgents.map(o => (
          <Card key={o.uuid} picture={o.displayIcon || '/placeholder.png'} agent={o.displayName || 'Agente desconocido'} role={o.role ? o.role.displayName : 'Sin rol'} ></Card>

        ))}
      </div>

    </>
  );
}

export default ContainerCard;