 import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function WorkoutCard({ workout }) {
  const { addWorkout } =
    useContext(AppContext);

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-bold">
        {workout.name}
      </h2>

      <p>{workout.category}</p>

      <p>{workout.duration}</p>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/workouts/${workout.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Details
        </Link>

        <button
          onClick={() =>
            addWorkout(workout)
          }
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default WorkoutCard;