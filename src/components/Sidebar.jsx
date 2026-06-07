 import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold">
          Fitness Menu
        </h2>
      </div>

      <div className="p-4 space-y-3">

        <NavLink
          to="/dashboard"
          className="block px-4 py-3 rounded-xl hover:bg-green-500 transition"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/workouts"
          className="block px-4 py-3 rounded-xl hover:bg-green-500 transition"
        >
          Workouts
        </NavLink>

        <NavLink
          to="/schedule"
          className="block px-4 py-3 rounded-xl hover:bg-green-500 transition"
        >
          Schedule
        </NavLink>

        <NavLink
          to="/profile"
          className="block px-4 py-3 rounded-xl hover:bg-green-500 transition"
        >
          Profile
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;