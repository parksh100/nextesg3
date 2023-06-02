import { ImCheckmark } from "react-icons/im";

export default function ProcessCheckList({ content }) {
  return (
    <div className="flex items-center gap-4  mt-3 mb-3">
      <span className="rounded-full p-2 bg-blue-800">
        <ImCheckmark color="white" />
      </span>
      <p className="text-base w-full text-gray-700 lg:text-2xl lg:font-semibold ">
        {content}
      </p>
    </div>
  );
}
