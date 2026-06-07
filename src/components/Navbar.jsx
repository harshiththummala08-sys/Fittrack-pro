 import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-slate-950 text-white px-8 py-4 flex justify-between items-center shadow-xl">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
        FitTrack Pro
      </h1>

      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-red-500 to-red-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;