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
              10년 이상의 다양한 배경을 지닌 팀원들이 모여 ESG Master를
              만들었습니다.
              <br />
              중소기업, 대기업, 금융권, 공공기관 등 다양한 분야의 경험을
              바탕으로 중소기업의 ESG경영을 돕고 있습니다.
            </p>
          </div>
          <ul
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full object-cover object-top"
                  src="/images/psh.jpg"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    박성훈
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    대표컨설턴트 / 경영지도사 / ISO검증심사원{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full object-cover object-center"
                  src="images/ljy.jpg"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    이주용
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    컨설팅학 겸임교수 / ISO선임심사원
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full object-cover object-center"
                  src="images/mjs.png"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    명준식
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    경영지도사/ 컨설팅학 석사/ 전경련ESG전문가
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full object-cover object-center"
                  src="/images/his.jpg"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    허인식
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    수석 컨설턴트 / 신용보증기금 21년 근무
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full object-cover object-center"
                  src="/images/psb.jpg"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    박수빈
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    총괄 프로젝트 매니저 / 국가안전대진단전문위원
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    김원일
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    컨설팅학 석사
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
