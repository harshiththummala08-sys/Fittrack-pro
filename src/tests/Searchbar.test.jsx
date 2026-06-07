import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

test("updates search input", async () => {
  const user = userEvent.setup();

  let value = "";

  const setSearch = (newValue) => {
    value = newValue;
  };

  render(
    <SearchBar
      search={value}
      setSearch={setSearch}
    />
  );

  const input =
    screen.getByPlaceholderText(
      "Search workouts..."
    );

  await user.type(input, "chest");

  expect(value).toBe("chest");
});