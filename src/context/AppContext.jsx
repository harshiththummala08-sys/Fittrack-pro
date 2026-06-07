import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [schedule, setSchedule] = useState(() => {
    const currentUser =
  localStorage.getItem("currentUser");

const saved =
  localStorage.getItem(
    `schedule_${currentUser}`
  );
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const currentUser =
  localStorage.getItem("currentUser");

localStorage.setItem(
  `schedule_${currentUser}`,
  JSON.stringify(schedule)
);
  }, [schedule]);

  useEffect(() => {
    localStorage.setItem(
      "isLoggedIn",
      isLoggedIn
    );
  }, [isLoggedIn]);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const addWorkout = (workout) => {
    const exists = schedule.find(
      (item) => item.id === workout.id
    );

    if (!exists) {
      setSchedule([...schedule, workout]);
    }
  };

  const removeWorkout = (id) => {
    setSchedule(
      schedule.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        schedule,
        addWorkout,
        removeWorkout,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;