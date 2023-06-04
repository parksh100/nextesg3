import ProfileComponent from "./Profile";

export default function TeamComponent() {
  return (
    <div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              10년 이상의 다양한 배경을 지닌 검증된 최고의 컨설턴트들을
              소개합니다.
              <br />
              중소기업, 대기업, 금융권, 공공기관 등 다양한 분야의 경험을
              바탕으로 중소기업의 ESG경영을 돕고 있습니다.
            </p>
          </div>
          <ul
            role="list"
            class="grid gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-10 xl:col-span-2"
          >
            <ProfileComponent
              image="/images/psh.jpg"
              position="object-top"
              name="박성훈"
              title="대표컨설턴트 / 경영지도사 / ISO검증심사원"
            />

            <ProfileComponent
              image="/images/ljy.jpg"
              position="object-top"
              name="이주용"
              title="컨설팅학 겸임교수 / ISO선임심사원"
            />

            <ProfileComponent
              image="/images/mjs.png"
              position="object-center"
              name="명준식"
              title="경영지도사/ 컨설팅학 석사/ 전경련ESG전문가"
            />

            <ProfileComponent
              image="/images/his.jpg"
              position="object-center"
              name="허인식"
              title="수석 컨설턴트 / 신용보증기금 21년 근무"
            />

            <ProfileComponent
              image="/images/psb.jpg"
              position="object-center"
              name="박수빈"
              title="총괄 프로젝트 매니저 / 국가안전대진단전문위원"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
