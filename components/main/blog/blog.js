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
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      <section className="container px-5 mx-auto">
        <div>
          <h1 className="text-center font-bold mt-10 mb-3 text-2xl lg:text-5xl lg:mt-40">
            ESG정보
          </h1>
          <p className="text-center text-gray-400 text-base lg:text-lg  lg:mt-5">
            ESG Master는 ESG최신 정보를 고객사들과 함께 공유하고 있습니다.
            <br />
            경영진의 지속적인 관심이 더 나은 ESG를 만듭니다.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-5 lg:gap-3 lg:mt-20 ">
          <div className="shadow-xl mx-auto mt-5 mb-5 rounded-lg md:max-w-md lg:flex lg:flex-wrap hover:shadow-2xl ">
            <div className="mx-auto">
              {/* <img src="/images/k-esg.png" alt="k-esg가이드라인 v1.0" /> */}
              <img
                src="/images/k-esg.png"
                alt="k-esg가이드라인 v1.0"
                className="w-full object-cover h-72"
              />
            </div>
            <div className="p-2 lg:px-5">
              <h1 className="font-bold text-lg lg:mt-4">
                <Link
                  href="https://www.motie.go.kr/motie/gov3.0/gov_openinfo/sajun/bbs/bbsView.do?bbs_seq_n=631&bbs_cd_n=30"
                  target="_blank"
                  className="text-blue-500 lg:text-xl"
                >
                  정부 'K-ESG 가이드라인 v1.0' 발표
                </Link>
              </h1>
            </div>
            <div className="p-2 lg:px-5">
              <p className="lg:text-lg lg:mb-4">
                정보공시, 환경, 사회, 지배구조 등 4개 영역, 61개 항목을 통해
                기업들이 ESG경영 수준을 자체적으로 점검할 수 있도록 하고 있다.
                중견/중소기업에 대해서는 4개 영역, 27개 항목을 선별해서
                우선적으로 활용하도록 하고 있다.
              </p>
            </div>
          </div>
          <div className="shadow-xl mx-auto mt-5 mb-5 rounded-lg md:max-w-md hover:shadow-2xl ">
            <div className="mx-auto">
              <img
                src="/images/sepi-new.png"
                alt="sepi"
                className="w-full object-cover h-72"
              />
            </div>
            <div className="p-2 lg:px-5">
              <h1 className="font-bold text-lg lg:mt-4">
                <Link
                  href="https://semiconductor.samsung.com/kr/sustainability/environment/sepi/"
                  target="_blank"
                  className="text-blue-500 lg:text-xl"
                >
                  삼성전자, 반도체 산업의 ESG경영 기준 'SEPI' 제시
                </Link>
              </h1>
            </div>
            <div className="p-2 lg:px-5">
              <p className="lg:text-lg">
                삼성전자가 개발한 반도체 산업에 적용할 수 있는 환경 평가지표.
                SEPI는 반도체 상산 공정에서 발생하는 환경영향을 평가하는 지표로,
                반도체 산업의 ESG경영 기준으로 제시하기 위해 개발되었다.
              </p>
            </div>
          </div>
          <div className="shadow-xl mx-auto mt-5 mb-5 rounded-lg md:max-w-md hover:shadow-2xl ">
            <div className="mx-auto">
              <img
                src="/images/eu2.png"
                alt="k-esg가이드라인 v1.0"
                className="w-full object-center h-72"
              />
            </div>
            <div className="p-2 lg:px-5">
              <h1 className="font-bold text-lg lg:mt-4">
                <Link
                  href="https://www.motie.go.kr/motie/ne/presse/press2/bbs/bbsView.do?bbs_seq_n=166494&bbs_cd_n=81&currentPage=1&search_key_n=&cate_n=1&dept_v=&search_val_v="
                  target="_blank"
                  className="text-blue-500 lg:text-xl"
                >
                  정부 수출기업 ESG경영 '공급망 대응 K-ESG 가이드라인' 발표
                </Link>
              </h1>
            </div>
            <div className="p-2 lg:px-5">
              <p className="lg:text-lg">
                EU 등 주요국의 공급망 실사 법제화 및 글로벌 ESG이니셔티브를
                중심으로 한 공급망 실사 확산에 대응하기 위해 '공급망 대응 K-ESG
                가이드라인' 발표. EU는 개별 기업뿐만 아니라 협력사의 ESG
                리스크를 실사하여 공시하는 공급망 실사 제도를 도입할 계획.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
