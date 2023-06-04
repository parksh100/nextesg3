import ConsultingProcessComponent from "@/components/main/Service/ConsultingProcess";
import PageHeaderComponent from "@/components/main/common/PageHeader";

export default function ServicePage() {
  return (
    <>
      <PageHeaderComponent
        title="검증된 컨설팅 프로세스"
        description1="산업계, 학계의 자문과 ESG Master의 지속적인 연구개발로 완성된 컨설팅 프로세스입니다."
        description2="많은 고객으로부터 그 효율성과 효과성을 입증받은 컨설팅 프로세스입니다."
      />
      <ConsultingProcessComponent />
    </>
  );
}
