import ContactForm from "@/components/main/Contact/ContactForm";
import PageHeaderComponent from "@/components/main/common/PageHeader";

export default function ContactPage() {
  return (
    <div>
      <PageHeaderComponent
        title="Contact"
        description1="ESG Master는 언제나 고객의 목소리를 존중합니다. "
        description2="문의사항, 제휴 및 제안, 불만사항 등을 전해주시면 신속하게 답변드리겠습니다. "
      />
      <ContactForm />
    </div>
  );
}
