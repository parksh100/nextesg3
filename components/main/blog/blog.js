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

export default function BlogPage() {
  return (
    <>
      <section className="container px-5">
        <div>
          <h1 className="text-center font-bold mt-10 mb-3 text-2xl">ESG정보</h1>
          <p className="text-center text-gray-400 text-base">
            ESG Master는 ESG최신 정보를 고객사들과 함께 공유하고 있습니다.
            경영진의 지속적인 관심이 더 나은 ESG를 만듭니다.
          </p>
        </div>
        <section className="bg-blue-400 mt-5 mb-5 mx-2 rounded-lg">
          <div className="p-2 mx-auto">
            <img src="/images/k-esg.png" alt="k-esg가이드라인 v1.0" />
          </div>
          <div className="p-2">
            <h1>정부 'K-ESG 가이드라인 v1.0' 발표</h1>
          </div>
          <div className="p-2">
            <p>
              정보공시, 환경, 사회, 지배구조 등 4개 영역, 61개 항목을 통해
              기업들이 ESG경영 수준을 자체적으로 점검할 수 있도록 하고 있다.
              중견/중소기업에 대해서는 4개 영역, 27개 항목을 선별해서 우선적으로
              활용하도록 하고 있다.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
