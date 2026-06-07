import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AppContext } from "../context/AppContext";

function Schedule() {
  const { schedule, removeWorkout } = useContext(AppContext);

  const totalCalories = schedule.reduce(
    (total, workout) => total + workout.calories,
    0
  );

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-screen p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold">
              My Workout Schedule 💪
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your workout plans and track your progress.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">
                Total Workouts
              </h3>

              <h2 className="text-4xl font-bold mt-2">
                {schedule.length}
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">
                Weekly Goal
              </h3>

              <h2 className="text-4xl font-bold mt-2">
                5 Days
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">
                Total Calories
              </h3>

              <h2 className="text-4xl font-bold mt-2">
                {totalCalories}
              </h2>
            </div>

          </div>

          {/* Workout List */}
          {schedule.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-10 text-center">
              <h2 className="text-2xl font-bold">
                No Workouts Scheduled
              </h2>

              <p className="text-gray-500 mt-3">
                Add workouts from the Workout Library.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {schedule.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {workout.name}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        {workout.category}
                      </p>
                    </div>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p>
                      <strong>Duration:</strong>{" "}
                      {workout.duration}
                    </p>

                    <p>
                      <strong>Difficulty:</strong>{" "}
                      {workout.difficulty}
                    </p>

                    <p>
                      <strong>Calories:</strong>{" "}
                      {workout.calories}
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      onClick={() =>
                        removeWorkout(workout.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Remove Workout
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Progress Section */}
          {schedule.length > 0 && (
            <div className="bg-white rounded-xl shadow p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">
                Weekly Progress
              </h2>

              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{
                    width: `${Math.min(
                      (schedule.length / 5) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>

              <p className="mt-3 text-gray-600">
                {schedule.length} of 5 weekly workouts completed.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Schedule;