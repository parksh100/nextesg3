import AboutSection from "@/components/main/About/AboutSection";
import TeamComponent from "@/components/main/About/Team";
import ProcessPage from "@/components/main/Process/page";
import PageHeaderComponent from "@/components/main/common/PageHeader";
import Link from "next/link";
import {
  ImOffice,
  ImFire,
  ImStatsDots,
  ImGift,
  ImEqualizer,
  ImRocket,
  ImSphere,
  ImLibrary,
  ImTrophy,
} from "react-icons/im";
import CarouselCustomize from "@/components/main/CarouselCustomize";

export default function AboutPage() {
  return (
    <>
      <CarouselCustomize
        imgSrc="/images/about-image.jpg"
        imgAlt="meeting view"
        title="About ESG Master"
        content={
          "검증된 컨설팅 프로세스와 최고의 컨설턴트와 함께 하십시오. \n ESG경영의 성공을 위한 최선의 선택입니다."
        }
      />
      <section className="container px-5 mx-auto py-14">
        <div>
          <h1 className=" text-gray-900 text-center font-bold mt-10 mb-3 text-2xl md:mt-20 lg:text-5xl lg:mt-40">
            최고의 컨설턴트
          </h1>
          <p className="text-center text-gray-400 text-base lg:text-xl">
            엄격한 자격요건을 통과한 최고의 컨설턴트들이 ESG 컨설팅을
            수행합니다. <br />더 이상의 컨설턴트 POOL을 구성하는 것은 불가능할
            것입니다.
          </p>
        </div>
        <section className="grid gap-x-8 gap-y-14 grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 mt-10 lg:gap-5 lg:gap-y-10 lg:mt-40">
          <div className="p-3 mx-2 shadow-xl hover:shadow-2xl">
            <div className="mb-4">
              <ImTrophy size="3em" color="#4a6cf7" />
            </div>
            <div className="text-gray-900 text-lg font-bold mb-2 lg:text-2xl">
              국가전문자격 경영지도사
            </div>
            <div className="text-sm text-gray-400 lg:text-lg lg:pb-3">
              중소벤처기업부가 인정한 컨설팅 국가자격 경영지도사. 국가가
              인정하는 자격을 보유한 전문가와 무자격 프리랜서로 구성된 팀은
              책임감의 무게가 다릅니다. 중소기업 컨설팅, 평가업무 수행을
              바탕으로 가장 효과적인 ESG결과물을 도출할 수 있습니다.
            </div>
          </div>
          <div className="p-3 mx-2 shadow-xl hover:shadow-2xl">
            <div className="mb-4">
              <ImLibrary size="3em" color="#4a6cf7" />
            </div>
            <div className="text-gray-900 text-lg font-bold mb-2 lg:text-2xl">
              컨설팅학 석/박사
            </div>
            <div className="text-sm  text-gray-400 lg:text-lg lg:pb-3">
              중소기업과의 협업을 위해서는 중소기업을 경험하는 것이 매우
              중요합니다. 그보다 더 중요한 것은 컨설팅에 대한 이론적 배경과
              실행경험이 있어야 중소기업과 협업이 가능합니다. ESG의 학문적
              전문지식에 더하여 컨설팅의 이론적 전문성을 인증받은 석/박사와 함께
              하세요.
            </div>
          </div>
          <div className="p-3 mx-2 shadow-xl hover:shadow-2xl">
            <div className="mb-4">
              <ImSphere size="3em" color="#4a6cf7" />
            </div>
            <div className="text-gray-900 text-lg font-bold mb-2 lg:text-2xl">
              ISO국제표준 전문가
            </div>
            <div className="text-sm  text-gray-400 lg:text-lg lg:pb-3">
              ESG의 대부분은 국제표준(ISO)의 이행으로 커버됩니다. 따라서
              국제표준 전문가의 참여는 필수요소입니다. ESG MASTER의 모든
              컨설턴트는 ISO선임심사원 이상의 자격을 갖추고 있습니다. 국제표준의
              이해여부는 ESG컨설팅의 품질에 직접적인 영향을 미칩니다.
            </div>
          </div>
        </section>

        {/* Our Team */}
        <TeamComponent />
        <PageHeaderComponent
          title="ESG Master만의 경쟁력"
          description1="ESG Master는 항상 중소기업과 함께해온 컨설턴트들로 구성되어 있습니다."
          description2={`정부지원사업을 포함하여 1,000건 이상의 다양한 민간 컨설팅(연구소, 이노비즈, 메인비즈, 국제인증, 자금조달 등) 경험을 보유하고 있습니다.\n 그만큼 중소기업의 상황을 잘 이해하고 있습니다. `}
        />
        <AboutSection />
        <ProcessPage />
      </section>
    </>
  );
}
