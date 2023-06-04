import Link from "next/link";
import {
  ImOffice,
  ImFire,
  ImStatsDots,
  ImGift,
  ImEqualizer,
  ImRocket,
} from "react-icons/im";
import CardComponent from "../common/Card";

export default function Hero() {
  return (
    <section className="container px-5 mx-auto">
      <div>
        <h1 className=" text-gray-900 text-center font-bold mt-10 mb-3 text-2xl md:mt-20 lg:text-5xl lg:mt-40">
          중소기업 ESG 컨설팅서비스
        </h1>
        <p className="text-center text-gray-400 text-base lg:text-xl">
          정부와 공기업, 대기업이 ESG경영을 위한 준비가 마무리되고 있습니다.
          <br />
          이제 중소기업도 ESG경영을 준비해야 할 때입니다.
        </p>
      </div>
      <section className="grid gap-x-8 gap-y-14 grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 mt-10 lg:gap-5 lg:gap-y-10 lg:mt-40">
        <CardComponent
          title="중소기업 특화서비스"
          content="ESG MASTER의 서비스는 중소기업의 고유한 요구와 상황에 맞게
            조정됩니다. 고객이 직면한 특정한 문제를 이해하고 있으며 ESG기준의
            복잡성을 탐색하는데 도움이 되는 전문지식을 보유하고 있습니다. ESG를
            이제 막 시작하든 고도화 단계이든 우리가 도울 수 있습니다."
          icon={<ImOffice size="3em" color="#4a6cf7" />}
        />
        <CardComponent
          title="교육과 컨설팅"
          content="정보에 입각한 의사 결정의 힘을 믿습니다. 우리의 역할은 ESG 컨설팅을
          제공하는 것 이상으로 확장됩니다. 우리는 고객에게 ESG 표준, 위험 및
          기회에 대해 교육하는 데 전념하고 있습니다. ESG 환경의 복잡성을
          안내하여 ESG 고려 사항을 비즈니스 운영 및 전략에 효과적으로 통합하는
          데 필요한 지식을 제공합니다."
          icon={<ImFire size="3em" color="#4a6cf7" />}
        />

        <CardComponent
          title="검증된 컨설팅 프로세스"
          content="ESG MASTER의 컨설팅 프로세스는 연구에 기반을 두고 있으며 업계
          전문가의 검증을 받았습니다. 이를 통해 가장 최신의 신뢰할 수 있는
          관련 정보를 기반으로 조언을 제공할 수 있습니다. 우리는 고객의
          비즈니스를 이해하는 것부터 포괄적인 ESG 전략을 구현하는 것까지
          체계적이고 투명한 프로세스를 따르며 지속 가능성을 향한 여정이
          효율적이고 효과적이도록 보장합니다."
          icon={<ImStatsDots size="3em" color="#4a6cf7" />}
        />

        <CardComponent
          title="맞춤형 전략수립"
          content="ESG MASTER는 각 사업이 고유하며 모든 경우에 적용되는 하나의 ESG
          전략이 없다는 것을 알고 있습니다. 우리는 고객과 긴밀히 협력하여
          고객의 비즈니스 가치, 목표 및 맥락을 이해합니다. 이를 바탕으로
          고객의 비즈니스 목표에 부합하는 맞춤형 ESG 전략을 수립하고
          지속가능한 성장을 지원합니다."
          icon={<ImStatsDots size="3em" color="#4a6cf7" />}
        />

        <CardComponent
          title="ESG보고서"
          content="ESG 이니셔티브에 대한 명확한 커뮤니케이션이 중요합니다. 전문적인 ESG
          보고서 작성 서비스를 제공하여 고객의 이해관계자가 고객의 지속 가능성
          노력을 명확하고 포괄적으로 이해할 수 있도록 합니다. 보고서는 관련
          표준을 준수할 뿐만 아니라 고객의 ESG 스토리를 설득력 있고 투명하게
          전달하도록 설계되었습니다."
          icon={<ImGift size="3em" color="#4a6cf7" />}
        />

        <CardComponent
          title="지속적 관리"
          content=" ESG는 일회성 작업이 아니라 지속적인 여정입니다. ESG MASTER의
          서비스는 전략 수립 및 보고서 작성을 넘어 확장됩니다. ESG MASTER는
          지속적인 ESG 관리, ESG 성과 모니터링, 개선 제안, 진화하는 ESG 환경에
          대한 최신 정보 제공을 제공합니다. 이를 통해 비즈니스는 탄력적이고
          적응력이 뛰어나며 시대를 앞서갈 수 있습니다."
          icon={<ImRocket size="3em" color="#4a6cf7" />}
        />
      </section>
    </section>
  );
}
