import React, { useState } from 'react';

const Documents = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Contrato de Trabalho.pdf', type: 'Contrato', date: '2026-03-25' },
    { id: 2, name: 'Termo de Confidencialidade.pdf', type: 'Termo', date: '2026-03-26' },
    { id: 3, name: 'Folha de Pagamento - Fev.pdf', type: 'Pagamento', date: '2026-03-01' },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestão de Documentos</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
          Upload Novo Documento
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Envio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900 cursor-pointer">
                  Visualizar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
