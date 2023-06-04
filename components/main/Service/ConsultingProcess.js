import {
  ImPlay2,
  ImPlay3,
  ImSearch,
  ImTarget,
  ImEqualizer,
  ImUsers,
  ImBubbles4,
  ImSpinner,
  ImStatsBars,
} from "react-icons/im";
import { BsActivity } from "react-icons/bs";

export default function ConsultingProcessComponent(props) {
  return (
    <div className=" mx-auto mt-10 text-center md:w-full">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-5">
          <div className="relative mx-auto flex pt-10 pb-20 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="title-font text-slate-200 relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-medium sm:mt-0">
              1
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="  me-10 rounded-full bg-blue-500 p-5">
                <ImPlay3 size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  1. 고객 요구사항의 이해
                </h2>
                <p className="text-start leading-relaxed">
                  ESG 원칙에 대한 고객의 현재 이해정도 및 이행상황을 평가하는
                  것부터 시작합니다. 여기에는 조직의 주요 이해 관계자와의 회의,
                  설문 조사 또는 인터뷰가 포함될 수 있습니다. 조직의 목표, 산업
                  및 조직이 운영하는 규제 환경을 이해해야 합니다. 목표는 조직이
                  가지고 있는 ESG 격차와 이를 해결하기 위한 동기를 식별하는
                  것입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className=" title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    2
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <BsActivity size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  2. ESG자가진단
                </h2>
                <p className="text-start leading-relaxed">
                  고객에 대한 ESG 내부심사를 실시합니다. 여기에는 운영, 사회
                  정책(예: 근로조건, 다양성 및 포용성 등), 거버넌스 구조의
                  환경적 영향을 살펴보는 것이 포함됩니다. 이렇게 하면 현재
                  상황을 명확하게 파악하고 개선이 필요한 영역을 식별하는 데
                  도움이 됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    3
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <ImSearch size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  3. 벤치마킹
                </h2>
                <p className="text-start leading-relaxed">
                  고객의 ESG 성과를 동종 업계 또는 모범 사례와 비교합니다. 이
                  단계는 상대적인 강점과 약점을 식별하는 데 도움이 됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-10 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    4
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <ImEqualizer size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  4. 전략개발
                </h2>
                <p className="text-start leading-relaxed">
                  조직을 위한 맞춤형 ESG 전략을 개발하고 명확하고 달성 가능한
                  목표와 이정표를 설정합니다. 여기에는 새로운 정책 권고, 기존
                  절차의 변경, 교육 프로그램, 이해관계자 참여 전략 등이 포함될
                  수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pt-10 pb-20 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    5
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <ImTarget size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  5. 실행계획 수립
                </h2>
                <p className="text-start leading-relaxed">
                  고객과 협력하여 ESG 전략 실행을 위한 세부 계획을 수립합니다.
                  여기에는 일반적으로 타임라인, 다른 팀 구성원에 대한 명확한
                  책임, 모니터링 및 평가 시스템이 포함됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    6
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <ImUsers size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  6. 교육 및 역량 구축
                </h2>
                <p className="text-start leading-relaxed">
                  식별된 요구 사항에 따라 직원에게 새로운 정책 또는 절차에 대한
                  교육을 제공하거나 ESG 문제를 모니터링하고 관리하는 회사의
                  역량을 구축합니다
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    7
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <ImBubbles4 size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  7. 보고 및 커뮤니케이션
                </h2>
                <p className="text-start leading-relaxed">
                  국내외 지침에 따라 투명한 ESG 보고 구조를 개발하도록 고객을
                  지원합니다. 또한 조직이 이해관계자에게 ESG 노력을 효과적으로
                  전달하도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-10 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    8
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <ImStatsBars size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  8. 모니터링 및 평가
                </h2>
                <p className="text-start leading-relaxed">
                  ESG 목표에 대한 조직의 진행 상황을 추적하기 위한 시스템을
                  개발하고 정기적인 업데이트 및 피드백을 제공합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pt-10 pb-20 sm:items-center md:w-2/3">
            {/* <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div> */}
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
                    9
                  </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className=" me-10 rounded-full bg-blue-500 p-5">
                <ImSpinner size="2em" color="white" />
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  9. 지속적인 개선
                </h2>
                <p className="text-start leading-relaxed">
                  ESG는 일회성 프로세스가 아니라 지속적인 여정입니다. 필요에
                  따라 ESG 전략을 조정하고 조직이 진화하는 ESG 기대치 및 표준에
                  대응할 수 있도록 지속적인 지원을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
