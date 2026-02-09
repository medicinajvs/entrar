export default function Header({ title, favoritesCount }) {
  return (
    <header className="custom-header">
      <div className="header-top">
        <h1 className="header-title">{title}</h1>

        <div className="flex items-center gap-6">
          <button className="btn-favoritos">
            <i className="fa-solid fa-heart"></i>
            Favoritos
            <span className="ml-2">{favoritesCount}</span>
          </button>

          <div className="notification-btn">
            <i className="fa-regular fa-bell"></i>
            <span className="badge-count">3</span>
          </div>

          <div className="user-avatar">C</div>
        </div>
      </div>
    </header>
  );
}
