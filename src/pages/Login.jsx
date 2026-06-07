
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (rememberMe) {
      localStorage.setItem("savedEmail", email);
    }
    localStorage.setItem("currentUser", email);
    login();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-12">

        <div className="text-white max-w-lg">

          <div className="text-7xl mb-6">
            🏋️
          </div>

          <h1 className="text-7xl font-black mb-6">
            FitTrack
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Your personal fitness companion.
            Track workouts, monitor progress,
            calculate BMI and achieve your goals.
          </p>

          <div className="mt-10 space-y-4 text-lg">

            <div>🔥 Smart Workout Tracking</div>
            <div>📊 Progress Analytics</div>
            <div>💪 Goal Based Plans</div>
            <div>🏆 Achieve Fitness Goals</div>

          </div>

        </div>

      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">

            <div className="text-center mb-8">

              <div className="text-5xl mb-4">
                💪
              </div>

              <h2 className="text-4xl font-bold text-white">
                Welcome Back
              </h2>

              <p className="text-gray-300 mt-2">
                Continue your fitness journey
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block text-gray-200 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="flex items-center justify-between text-white">

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() =>
                      setRememberMe(!rememberMe)
                    }
                  />
                  Remember Me
                </label>

              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Login
              </button>

            </form>

            <p className="text-center text-gray-300 mt-6">
              Start tracking your fitness today 🚀
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;