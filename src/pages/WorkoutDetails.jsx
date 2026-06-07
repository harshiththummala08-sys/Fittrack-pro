import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { workouts } from "../data/workouts";

function WorkoutDetails() {
  const { id } = useParams();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    return <h1>Workout Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">
            {workout.name}
          </h1>

          <div className="bg-white rounded-xl shadow p-5">
            <p>Category: {workout.category}</p>
            <p>Duration: {workout.duration}</p>
            <p>Difficulty: {workout.difficulty}</p>
            <p>Calories: {workout.calories}</p>

            <h2 className="text-2xl font-bold mt-5">
              Exercises
            </h2>

            <ul className="list-disc ml-5">
              {workout.exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkoutDetails;