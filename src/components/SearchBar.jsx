function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search workouts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 p-3 border rounded-lg bg-white"
    />
  );
}

export default SearchBar;