import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/dashboard.css"; // onde fica o Styles (ou Tailwind)

export default function DashboardLayout() {
  const location = useLocation();

  // Mapeia rota → aba ativa
  const getActiveTab = () => {
    if (location.pathname.includes("favorites")) return "favorites";
    if (location.pathname.includes("courses")) return "courses";
    if (location.pathname.includes("performance")) return "performance";
    return "courses";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="main-wrapper w-full">
        <Header title="Meus Cursos" favoritesCount={3} />

        {/* 👇 CONTEÚDO DINÂMICO */}
        <main className="p-8 fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
