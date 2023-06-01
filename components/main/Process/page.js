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
import ProcessCheckList from "./process-checklist";

export default function ProcessPage() {
  return (
    <>
      <section className="container px-5">
        <div>
          <h1 className="text-center font-bold mt-10 mb-3 text-2xl">
            검증된 컨설팅 프로세스
          </h1>
          <p className="text-center text-gray-400 text-base">
            ESG Master의 컨설팅 프로세스는 고객사의 애로사항을 이해하고 해결책을
            제시할 수 있도록 설계되어 있습니다. 수많은 고객사에서 한결같이
            인정받고 있는 ESG Master의 컨설팅 프로세스를 소개합니다.
          </p>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 justify-center px-4 mt-5 mb-20 bg-orange-400">
          <div className="flex flex-wrap w-full bg-gray-100 mb-5 mt-5 px-3">
            <div className="w-full px-3 lg:w-full xl:w-1/2">
              <ProcessCheckList content="철저한 맞춤형 ESG" />
              <ProcessCheckList content="정밀한 AS-IS분석" />
              <ProcessCheckList content="이해가능한 Gap분석" />
            </div>
            <div className="w-full px-3  lg:w-full xl:w-1/2">
              <ProcessCheckList content="맞춤형 전략개발" />
              <ProcessCheckList content="이행가능한 실행계획" />
              <ProcessCheckList content="ESG보고서" />
            </div>
          </div>
          <div className="w-full px-4 items-center mx-auto mb-5 mt-5 max-w-[500px] lg:mr-0">
            <img
              src="/images/consulting.jpg"
              alt="process"
              className="mx-auto max-w-full  lg:mr-0"
            />
          </div>
        </section>
      </section>
    </>
  );
}
