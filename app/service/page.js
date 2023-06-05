import ConsultingProcessComponent from "@/components/main/Service/ConsultingProcess";
import PageHeaderComponent from "@/components/main/common/PageHeader";
import CarouselCustomize from "@/components/main/CarouselCustomize";

export default function ServicePage() {
  return (
    <>
      <CarouselCustomize
        imgSrc="/images/service-image.jpg"
        imgAlt="화이트보드에 글씨를 쓰는 이미지"
        title="Service"
        content={
          "ESG Master는 언제나 고객의 입장에서 행동합니다. \n 고객의 비즈니스를 이해하고, 고객의 성공을 위해 최선을 다합니다."
        }
      />
      <PageHeaderComponent
        title="검증된 컨설팅 프로세스"
        description1="산업계, 학계의 자문과 ESG Master의 지속적인 연구개발로 완성된 컨설팅 프로세스입니다."
        description2="많은 고객으로부터 그 효율성과 효과성을 입증받은 컨설팅 프로세스입니다."
      />
      <ConsultingProcessComponent />
    </>
  );
}
