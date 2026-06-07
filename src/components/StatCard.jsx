 function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

      <p className="text-gray-500 text-sm uppercase tracking-wide">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3 text-slate-800">
        {value}
      </h2>

    </div>
  );
}

export default StatCard;