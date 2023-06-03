import {
  ImOffice,
  ImFire,
  ImStatsDots,
  ImGift,
  ImEqualizer,
  ImRocket,
} from "react-icons/im";

export default function CardComponent(props) {
  return (
    <div className="p-3 mx-2 shadow-xl hover:shadow-2xl">
      <div className="mb-4">{props.icon}</div>
      <div className="text-gray-900 text-lg font-bold mb-2 lg:text-2xl">
        {props.title}
      </div>
      <div className="text-sm text-gray-400 lg:text-lg lg:pb-3">
        {props.content}
      </div>
    </div>
  );
}
