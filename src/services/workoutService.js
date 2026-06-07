 export const getWorkouts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Chest Blast",
          category: "Chest",
          duration: "45 min",
          difficulty: "Intermediate",
          calories: 350,
        },
        {
          id: 2,
          name: "Leg Destroyer",
          category: "Legs",
          duration: "60 min",
          difficulty: "Advanced",
          calories: 500,
        },
        {
          id: 3,
          name: "Cardio Burn",
          category: "Cardio",
          duration: "30 min",
          difficulty: "Beginner",
          calories: 250,
        },
      ]);
    }, 1500);
  });
};