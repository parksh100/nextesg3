export default function CarouselCustomize(props) {
  return (
    <section className="relative -z-10 overflow-hidden flex items-center justify-center h-96">
      <div>
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="brightness-25 bg-top bg-cover w-full h-full "
        />
      </div>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-gray-100 text-base font-bold md:text-3xl lg:text-6xl">
          {props.title}
        </h1>
        <p className="text-gray-100 text-[10px] px-5 max-w-5xl mt-2 md:max-w-md md:text-sm lg:leading-relaxed lg:text-xl lg:max-w-6xl lg:mt-10 whitespace-pre-line">
          {props.content}
        </p>
        {/* <div className="hover:bg-blue-500">
          <button className="bg-blue-800 text-white py-1 z-50 px-5 rounded-xl font-bold mt-2 lg:py-3 lg:px-10 lg:text-lg lg:mt-10 hover:bg-blue-500 cursor-pointer">
            상담신청
          </button>
        </div> */}
      </div>
    </section>
  );
}
