export default function BlogCardComponent(props) {
  return (
    <div className="shadow-xl mx-auto mt-5 mb-5 rounded-lg md:max-w-md lg:flex lg:flex-wrap hover:shadow-2xl ">
      <div className="mx-auto">
        {/* <img src="/images/k-esg.png" alt="k-esg가이드라인 v1.0" /> */}
        <img
          src={props.url}
          alt={props.alt}
          className="w-full object-cover h-72"
        />
      </div>
      <div className="p-2 lg:px-5">
        <h1 className="font-bold text-lg lg:mt-4">
          <Link
            href={props.href}
            target="_blank"
            className="text-blue-500 lg:text-xl"
          >
            {props.title}
          </Link>
        </h1>
      </div>
      <div className="p-2 lg:px-5">
        <p className="lg:text-lg lg:mb-4">{props.description}</p>
      </div>
    </div>
  );
}
