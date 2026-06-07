 import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkoutCard from "../components/WorkoutCard";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";

import { getWorkouts } from "../services/workoutService";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchWorkouts = async () => {
      try {
        const data = await getWorkouts();

        if (!ignore) {
          setWorkouts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);

        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchWorkouts();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">
            Workout Library
          </h1>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              filteredWorkouts.map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Workouts;