import { useNavigate } from "react-router-dom";

export default function Sidebar({ activeTab }) {
  const navigate = useNavigate();

  const menuItems = [
    { id: "courses", icon: "fa-regular fa-file-lines", path: "/courses" },
    { id: "favorites", icon: "fa-solid fa-bookmark", path: "/favorites" },
    { id: "performance", icon: "fa-solid fa-chart-pie", path: "/performance" },
  ];

  return (
    <nav className="custom-sidebar">
      <div className="sidebar-logo">MJ</div>

      <div className="flex flex-col w-full items-center">
        {menuItems.map(item => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <i className={item.icon}></i>
          </div>
        ))}
      </div>
    </nav>
  );
}
