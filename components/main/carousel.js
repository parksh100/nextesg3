export default function Carousel() {
  return (
    <section className="relative -z-10 overflow-hidden flex items-center justify-center">
      <div>
        <img
          src="/images/cityView.jpg"
          alt="city view"
          className="brightness-25 bg-top bg-cover w-full h-full"
        />
      </div>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-gray-100 text-base font-bold md:text-3xl lg:text-6xl">
          Why ESG? Why Now?
        </h1>
        <p className="text-gray-100 text-[10px] px-5 max-w-5xl mt-2 md:max-w-md md:text-sm lg:leading-relaxed lg:text-xl lg:max-w-6xl lg:mt-10">
          정부와 고객사가 ESG를 요구하고 있습니다. <br />
          정량적인 기업실적을 나타내는 재무제표 만큼이나 비재무적, 정성적 요소인
          ESG이행이 중요해지고 있습니다. 제도의 도입기에 막강한 혜택을 제대로
          누리기 위해서는 우선 가능한 빨리 ESG이행을 위한 형식을 갖추는 것이
          중요합니다.
        </p>
        <div className="hover:bg-blue-500">
          <button className="bg-blue-800 text-white py-1 z-50 px-5 rounded-xl font-bold mt-2 lg:py-3 lg:px-10 lg:text-lg lg:mt-10 hover:bg-blue-500 cursor-pointer">
            상담신청
          </button>
        </div>
      </div>
    </section>
  );
}
