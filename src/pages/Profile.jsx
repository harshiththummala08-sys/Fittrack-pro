import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
  const [user, setUser] = useState(() => {
    const currentUser =
  localStorage.getItem("currentUser");

const savedUser =
  localStorage.getItem(
    `user_${currentUser}`
  );

    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "Fitness User",
          age: 20,
          height: 170,
          weight: 70,
          goal: "Stay Fit",
          profileCompleted: false,
        };
  });

  useEffect(() => {
    const currentUser =
  localStorage.getItem("currentUser");

localStorage.setItem(
  `user_${currentUser}`,
  JSON.stringify(user)
);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
      profileCompleted: true,
    });
  };

  const bmi = (
    user.weight /
    ((user.height / 100) * (user.height / 100))
  ).toFixed(1);

  let bmiStatus = "";

  if (bmi < 18.5) bmiStatus = "Underweight";
  else if (bmi < 25) bmiStatus = "Normal";
  else if (bmi < 30) bmiStatus = "Overweight";
  else bmiStatus = "Obese";

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 min-h-screen bg-gradient-to-br from-slate-100 via-white to-green-50 p-8">

          <h1 className="text-4xl font-bold mb-8">
            My Profile 👤
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                Personal Information
              </h2>

              <div className="space-y-4">

                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="number"
                  name="age"
                  value={user.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="number"
                  name="height"
                  value={user.height}
                  onChange={handleChange}
                  placeholder="Height (cm)"
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="number"
                  name="weight"
                  value={user.weight}
                  onChange={handleChange}
                  placeholder="Weight (kg)"
                  className="w-full border p-3 rounded-xl"
                />

                <select
                  name="goal"
                  value={user.goal}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                >
                  <option>Stay Fit</option>
                  <option>Build Muscle</option>
                  <option>Lose Weight</option>
                  <option>Improve Endurance</option>
                </select>

              </div>
            </div>

            <div className="space-y-6">

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">
                  BMI Score
                </h2>

                <h1 className="text-6xl font-bold">
                  {bmi}
                </h1>

                <p className="mt-3">
                  {bmiStatus}
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Current Goal
                </h2>

                <p className="text-xl">
                  {user.goal}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;