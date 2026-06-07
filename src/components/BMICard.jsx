 function BMICard({ weight, height }) {
  const bmi = (
    weight /
    ((height / 100) * (height / 100))
  ).toFixed(1);

  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold mb-4">
        BMI Calculator
      </h2>

      <h1 className="text-6xl font-extrabold">
        {bmi}
      </h1>

      <p className="mt-3 text-lg">
        {status}
      </p>

    </div>
  );
}

export default BMICard;