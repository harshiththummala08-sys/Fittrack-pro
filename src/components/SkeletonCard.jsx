function SkeletonCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-4"></div>

      <div className="h-4 bg-gray-300 rounded mb-2"></div>

      <div className="h-4 bg-gray-300 rounded mb-2"></div>

      <div className="h-10 bg-gray-300 rounded mt-4"></div>
    </div>
  );
}

export default SkeletonCard;