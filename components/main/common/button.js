export default function ButtonComponent(props) {
  return (
    <div className="flex justify-center mb-20">
      <button className="bg-blue-800 text-white py-3 px-6 rounded-xl font-bold mt-2 hover:bg-red-600 lg:py-4 lg:px-10 lg:text-lg ">
        {props.text}
      </button>
    </div>
  );
}
