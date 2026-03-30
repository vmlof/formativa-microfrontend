import React, { useState } from 'react';

const Approvals = () => {
  const [requests, setRequests] = useState([
    { id: 1, employee: 'João Silva', document: 'Férias Abr/2026', status: 'Pendente' },
    { id: 2, employee: 'Maria Santos', document: 'Contrato de Aluguel Carro', status: 'Pendente' },
    { id: 3, employee: 'Ricardo Lima', document: 'Reembolso Viagem', status: 'Pendente' },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Fluxo de Aprovação e Assinatura</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {requests.map((req) => (
          <div key={req.id} className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-tight">Solicitação de Assinatura</p>
              <h4 className="text-lg font-semibold">{req.document}</h4>
              <p className="text-gray-600">Funcionário: {req.employee}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Aprovar</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Rejeitar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approvals;
