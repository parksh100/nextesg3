export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/images/about-image-4.jpg"
                alt="about image"
                className=" overflow-hidden rounded-md object-cover object-center"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-2/3">
            <div className="wow fadeInUp " data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  중소기업에 특화된 컨설턴트와 컨설팅 프로세스
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 sm:text-lg sm:leading-relaxed">
                  인력과 자금이 부족한 중소기업을 위한 ESG 컨설팅 프로세스! 많은
                  중소기업들이 ESG Master 컨설팅에 만족하는 이유입니다.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  완벽한 ESG보고서
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 sm:text-lg sm:leading-relaxed">
                  컨설팅의 결과물은 명확해야 합니다. 정확한 자가진단과
                  목표설정에 따른 실행가능한 전략수립, 그리고 실행가능한 완벽한
                  ESG보고서를 제공합니다.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  지속적 업데이트 관리
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 sm:text-lg sm:leading-relaxed">
                  ESG Master 컨설팅은 1회성 컨설팅이 아닌 주기적인 현황파악을
                  통해 지속적인 ESG 관리를 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
