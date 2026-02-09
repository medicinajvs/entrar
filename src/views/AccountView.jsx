import React, { useState } from 'react';

export default function AccountView({ user, setUser }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [subView, setSubView] = useState('view'); // 'view' ou 'edit'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSubView('view');
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header do Perfil */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden mb-8 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 z-10 relative">
          <div className="relative w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-5xl font-semibold border-4 border-white/30 flex-shrink-0 overflow-hidden shadow-inner">
            {user.image ? (
              <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span>{user.name.charAt(0)}</span>
            )}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-blue-100 font-medium mb-1">Bem-vindo(a),</p>
            <h2 className="text-3xl font-bold tracking-tight mb-2">{user.name}</h2>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer backdrop-blur-md border border-white/10">
              <i className="fa-solid fa-camera"></i>
              <span>{user.image ? 'Alterar foto' : 'Adicionar foto'}</span>
            </button>
          </div>
        </div>
        {/* Círculos decorativos */}
        <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-50%] left-[-10%] w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Tabs de Navegação */}
      <div className="border-b border-gray-200 mb-8 overflow-x-auto">
        <nav className="-mb-px flex space-x-8 min-w-max">
          {[
            { id: 'profile', label: 'Visão Geral', icon: 'fa-address-card' },
            { id: 'data', label: 'Meus Dados', icon: 'fa-user-shield' },
            { id: 'access', label: 'Assinaturas', icon: 'fa-file-invoice' },
            { id: 'donations', label: 'Doações', icon: 'fa-hand-holding-heart' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center bg-transparent ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <i className={`fa-solid ${tab.icon} mr-2`}></i>{tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <div className="animate-fade-in">
        
        {/* ABA: PERFIL */}
        {activeTab === 'profile' && (
          subView === 'view' ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Informações Públicas</h3>
                <button 
                  onClick={() => setSubView('edit')} 
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition"
                >
                  <i className="fa-solid fa-pencil mr-1"></i> Editar
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 text-slate-500 mb-6 pb-6 border-b border-gray-50">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center"><i className="fa-solid fa-location-dot text-slate-400"></i></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Localização</p>
                      <p className="font-semibold text-slate-700">{user.city} / {user.state}</p>
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><i className="fa-solid fa-share-nodes text-blue-500"></i> Redes Sociais</h4>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {user.socials === "Não informado" ? "Nenhuma rede social conectada." : user.socials}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><i className="fa-solid fa-quote-left text-teal-500"></i> Biografia</h4>
                  <p className="text-slate-600 leading-relaxed min-h-[120px] bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                    {user.bio === "Não informado" ? "Escreva um pouco sobre você..." : `"${user.bio}"`}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
              {/* Formulário de Edição Simplificado para Exemplo */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-800">Editar Perfil</h3>
                <button onClick={() => setSubView('view')} className="text-slate-400 hover:text-slate-600 bg-transparent">
                  <i className="fa-solid fa-xmark text-xl"></i>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Biografia</label>
                  <textarea 
                    className="w-full border border-slate-300 rounded-lg p-3 text-slate-700 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition h-32 resize-none"
                    defaultValue={user.bio}
                  ></textarea>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button onClick={() => setSubView('view')} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition bg-white">Cancelar</button>
                <button onClick={() => setSubView('view')} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition shadow-sm">Salvar Alterações</button>
              </div>
            </div>
          )
        )}

        {/* ABA: DADOS */}
        {activeTab === 'data' && (
          <div>
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Dados Pessoais</h3>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 mb-8">
                <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Nome completo</p><p className="font-semibold text-slate-800 text-lg">{user.name}</p></div>
                <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">CPF</p><p className="font-semibold text-slate-800 text-lg font-mono">***.***.531-00</p></div>
                <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p><p className="font-semibold text-slate-800 text-lg flex items-center gap-2"><i className="fa-solid fa-envelope text-slate-300"></i> {user.email}</p></div>
                <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Telefone</p><p className="font-semibold text-slate-800 text-lg flex items-center gap-2"><i className="fa-solid fa-phone text-slate-300"></i> {user.phone}</p></div>
             </div>
          </div>
        )}

        {/* OUTRAS ABAS (Simplificadas para brevidade) */}
        {activeTab === 'access' && (
           <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 flex gap-4 items-start max-w-4xl">
              <i className="fa-solid fa-circle-info text-indigo-500 mt-1"></i>
              <div>
                  <h4 className="font-bold text-indigo-900">Assinaturas Ativas</h4>
                  <p className="text-sm text-indigo-700 mt-1">Você possui acesso ao plano Extensivo 2025.</p>
              </div>
           </div>
        )}
        
        {activeTab === 'donations' && (
           <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"><i className="fa-solid fa-hand-holding-heart"></i></div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Faça a diferença</h4>
              <p className="text-slate-600 mb-6">Sua contribuição ajuda a manter a plataforma.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg shadow-blue-500/30">Doar Agora</button>
           </div>
        )}

      </div>
    </div>
  );
}