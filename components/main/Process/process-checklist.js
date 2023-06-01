import { ImCheckmark } from "react-icons/im";

export default function ProcessCheckList({ content }) {
  return (
    <div className="flex items-center gap-4 bg-gray-200 mt-3 mb-3">
      <span className="rounded-full p-2 bg-blue-800">
        <ImCheckmark color="white" />
      </span>
      <p className="text-base w-full">{content}</p>
    </div>
  );
}
