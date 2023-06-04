export default function ProfileComponent(props) {
  return (
    <li className="p-2 border-2  border-transparent rounded-md hover:border-blue-500">
      <div class="flex items-center gap-x-6">
        <img
          class={`h-16 w-16 rounded-full object-cover ${props.position}`}
          src={props.image}
          alt={props.name}
        />
        <div>
          <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {props.name}
          </h3>
          <p class="text-sm font-semibold leading-6 text-indigo-600">
            {props.title}
          </p>
        </div>
      </div>
    </li>
  );
}
