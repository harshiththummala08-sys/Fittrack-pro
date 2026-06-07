import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import BMICard from "../components/BMICard";
import { AppContext } from "../context/AppContext";

function Dashboard() {
  const { schedule } = useContext(AppContext);

  const currentUser =
  localStorage.getItem("currentUser");

const user =
  JSON.parse(
    localStorage.getItem(
      `user_${currentUser}`
    )
  ) || {
    name: "Fitness User",
    age: 20,
    weight: 70,
    height: 170,
    goal: "Stay Fit",
    profileCompleted: false,
  };

  const totalCalories = schedule.reduce(
    (total, workout) => total + (workout.calories || 0),
    0
  );

  const completedWorkouts = schedule.length;

  const weeklyGoalPercentage = Math.min(
    (completedWorkouts / 5) * 100,
    100
  );

  const bmi = (
    user.weight /
    ((user.height / 100) * (user.height / 100))
  ).toFixed(1);

  const getRecommendedPlan = () => {
    switch (user.goal) {
      case "Build Muscle":
        return [
          "🏋️ Monday - Chest & Triceps",
          "💪 Wednesday - Back & Biceps",
          "🦵 Friday - Legs & Shoulders",
        ];

      case "Lose Weight":
        return [
          "🔥 Monday - Cardio",
          "⚡ Wednesday - HIIT",
          "🏃 Friday - Fat Burn Session",
        ];

      case "Improve Endurance":
        return [
          "🏃 Monday - Running",
          "🚴 Wednesday - Cycling",
          "🏊 Friday - Swimming",
        ];

      default:
        return [
          "💪 Monday - Full Body",
          "🏃 Wednesday - Cardio",
          "🧘 Friday - Mobility & Stretching",
        ];
    }
  };

  const recommendedPlan = getRecommendedPlan();

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 min-h-screen p-8 bg-gradient-to-br from-slate-100 via-white to-green-50">

          {/* Welcome Card */}
          <div className="mb-8 bg-white rounded-3xl p-8 shadow-lg">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Welcome Back, {user.name} 💪
            </h1>

            <p className="text-gray-600 mt-3 text-lg">
              Goal: {user.goal}
            </p>
          </div>

          {/* First Time User Banner */}
          {!user.profileCompleted && (
            <div className="mb-8 bg-yellow-50 border border-yellow-300 rounded-3xl p-6 shadow">
              <h2 className="text-xl font-bold text-yellow-700">
                👋 Welcome to FitTrack Pro
              </h2>

              <p className="mt-2 text-yellow-600">
                We've created a starter profile for you.
                Visit the Profile page anytime to personalize
                your fitness journey.
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <StatCard
              title="Calories Burned"
              value={totalCalories}
            />

            <StatCard
              title="Completed Workouts"
              value={completedWorkouts}
            />

            <StatCard
              title="Weekly Goal"
              value={`${weeklyGoalPercentage}%`}
            />

            <StatCard
              title="BMI"
              value={bmi}
            />

          </div>

          {/* BMI + Weekly Progress */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <BMICard
              weight={user.weight}
              height={user.height}
            />

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h2 className="text-2xl font-bold mb-6">
                Weekly Progress
              </h2>

              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">

                <div
                  className="h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000"
                  style={{
                    width: `${weeklyGoalPercentage}%`,
                  }}
                ></div>

              </div>

              <p className="mt-4 text-gray-600">
                {completedWorkouts} of 5 workouts completed
              </p>

            </div>

          </div>

          {/* Recommended Plan */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl mt-8">

            <h2 className="text-3xl font-bold">
              Recommended Workout Plan 🎯
            </h2>

            <p className="mt-2 text-green-100">
              Based on your goal:
              {" "}
              <span className="font-bold">
                {user.goal}
              </span>
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">

              {recommendedPlan.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl"
                >
                  {plan}
                </div>
              ))}

            </div>

          </div>

          {/* Scheduled Workouts */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            <h2 className="text-3xl font-bold mb-6">
              My Scheduled Workouts
            </h2>

            {schedule.length === 0 ? (
              <div className="text-center py-10">

                <p className="text-gray-500 text-lg">
                  No workouts added yet.
                </p>

                <p className="text-green-600 mt-3">
                  Recommended workouts are already available above 👆
                </p>

              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">

                {schedule.map((workout) => (
                  <div
                    key={workout.id}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-500"
                  >
                    <div className="flex justify-between mb-3">

                      <h3 className="font-bold text-lg">
                        {workout.name}
                      </h3>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        {workout.category}
                      </span>

                    </div>

                    <p className="text-gray-600">
                      Duration: {workout.duration}
                    </p>

                    <p className="text-gray-600">
                      Calories: {workout.calories}
                    </p>

                  </div>
                ))}

              </div>
            )}

          </div>

          {/* Profile Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            <h2 className="text-3xl font-bold mb-6">
              Profile Summary
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-lg">

              <p>
                <strong>Name:</strong> {user.name}
              </p>

              <p>
                <strong>Age:</strong> {user.age}
              </p>

              <p>
                <strong>Height:</strong> {user.height} cm
              </p>

              <p>
                <strong>Weight:</strong> {user.weight} kg
              </p>

              <p>
                <strong>Goal:</strong> {user.goal}
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;