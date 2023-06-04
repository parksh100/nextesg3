import Link from "next/link";
import {
  ImOffice,
  ImFire,
  ImStatsDots,
  ImGift,
  ImEqualizer,
  ImRocket,
  ImCheckmark,
} from "react-icons/im";
import ProcessCheckList from "./ProcessChecklist";

export default function ProcessPage() {
  return (
    <>
      <section className="container mx-auto px-5 md:mt-20 lg:mt-40 ">
        <div className="md:mt-15">
          <h1 className="text-center font-bold mt-10 mb-3 text-2xl lg:text-5xl">
            검증된 컨설팅 프로세스
          </h1>
          <p className="text-center text-gray-400 text-base md:max-w-lg lg:max-w-full  md:mx-auto lg:text-xl lg:mt-5">
            ESG Master의 컨설팅 프로세스는 고객사의 애로사항을 이해하고 해결책을
            제시할 수 있도록 설계되어 있습니다.
            <br /> 수많은 고객사에서 한결같이 인정받고 있는 ESG Master의 컨설팅
            프로세스를 소개합니다.
          </p>
        </div>
        <div className="w-full mx-auto md:px-4 md:mt-10 lg:flex lg:mt-20  ">
          <div className="md:flex lg:w-full  md:mx-16 lg:mx-5">
            <div className="w-full space-y-10 mt-10">
              <ProcessCheckList content="철저한 맞춤형 ESG" />
              <ProcessCheckList content="정밀한 AS-IS분석" />
              <ProcessCheckList content="이해가능한 Gap분석" />
            </div>
            <div className="w-full  space-y-10 mt-10 ">
              <ProcessCheckList content="맞춤형 전략개발" />
              <ProcessCheckList content="이행가능한 실행계획" />
              <ProcessCheckList content="ESG보고서" />
            </div>
          </div>

          <div className="mx-auto md:max-w-sm ">
            <img src="/images/consulting.jpg" alt="process" />
          </div>
        </div>
      </section>
    </>
  );
}
