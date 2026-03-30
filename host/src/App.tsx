import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Remote Components
const DocumentsMFE = lazy(() => import('mfe_documents/Documents'));
const ApprovalsMFE = lazy(() => import('mfe_approvals/Approvals'));

const Dashboard = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Dashboard de RH</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Gestão de Documentos</h3>
        <p className="text-gray-600 mb-4">Gerencie o ciclo de vida dos documentos dos funcionários.</p>
        <Link to="/documents" className="text-blue-500 hover:underline">Ver Documentos →</Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Fluxo de Aprovação</h3>
        <p className="text-gray-600 mb-4">Acompanhe assinaturas e aprovações pendentes.</p>
        <Link to="/approvals" className="text-green-500 hover:underline">Ver Aprovações →</Link>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <nav className="w-64 bg-slate-800 text-white flex flex-col">
          <div className="p-6 text-2xl font-bold bg-slate-900 border-b border-slate-700">
            SaaS RH
          </div>
          <ul className="flex-1 mt-6">
            <li className="px-6 py-3 hover:bg-slate-700">
              <Link to="/" className="block">Dashboard</Link>
            </li>
            <li className="px-6 py-3 hover:bg-slate-700">
              <Link to="/documents" className="block">Documentos</Link>
            </li>
            <li className="px-6 py-3 hover:bg-slate-700">
              <Link to="/approvals" className="block">Aprovações</Link>
            </li>
          </ul>
          <div className="p-6 border-t border-slate-700">
            <p className="text-xs text-slate-400">v1.0.0</p>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow-sm h-16 flex items-center px-8 border-b border-gray-200 justify-between">
            <h1 className="text-lg font-medium text-gray-700">Portal de Gestão de Documentos</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Admin RH</span>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            <Suspense fallback={<div className="p-6">Carregando MFE...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/documents/*" element={<DocumentsMFE />} />
                <Route path="/approvals/*" element={<ApprovalsMFE />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
