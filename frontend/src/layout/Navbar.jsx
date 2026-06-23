import useAuth from "../hooks/useAuth";

const Navbar = () => {

  const { logout } =
    useAuth();

  return (

    <header className="navbar">
<div className="navbar-left">
      <h1 className="navbar-title">
        Inventory System
      </h1>
      </div>

<div className="navbar-right">
      <button
        onClick={logout}
       className="logout-btn"
      >
        Logout
      </button>
      </div>

    </header>
  );
};

export default Navbar;