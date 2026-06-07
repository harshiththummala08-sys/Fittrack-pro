import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import WorkoutCard from "../components/WorkoutCard";

describe("WorkoutCard Component", () => {
  test("renders workout name", () => {
    const workout = {
      id: 1,
      name: "Chest Blast",
      category: "Chest",
      duration: "45 min",
    };

    render(
      <BrowserRouter>
        <WorkoutCard workout={workout} />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Chest Blast")
    ).toBeInTheDocument();
  });
});