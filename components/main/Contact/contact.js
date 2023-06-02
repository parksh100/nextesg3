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

export default function ContactForm() {
  return (
    <>
      <section className="bg-blue-50 w-full mt-20 m-0 md:mx-auto p-5 lg:mt-40">
        <div className="my-10 text-center w-full">
          <h1 className="text-center font-bold mt-10 mb-3 text-2xl lg:text-5xl lg:mt-20">
            고객센터
          </h1>
          <p className="w-full text-center text-gray-400 text-base lg:text-lg ">
            도움이 필요하신가요? ESG Master는 고객님의 의견을 소중히 여깁니다.
            제안사항이나 불만사항을 남겨주세요. 곧 답변드리겠습니다.
          </p>
        </div>
        <div className="w-full md:max-w-lg md:mx-auto xl:max-w-5xl">
          <form action="">
            <div className="w-full">
              <label htmlFor="name" className=" text-sm font-bold lg:text-lg">
                성명
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="성명을 입력하세요"
                className="w-full rounded-md border-transparent px-6 py-3 text-base placeholder-gray-500 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-3 my-3 lg:mt-1 lg:mb-5 "
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-sm font-bold lg:text-lg">
                이메일
              </label>
              <input
                type="text"
                name="email"
                id="name"
                placeholder="email을 입력하세요"
                className="w-full rounded-md border-transparent px-6 py-3 text-base placeholder-gray-500 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-3 my-3 "
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="message"
                className=" text-sm font-bold lg:text-lg"
              >
                문의사항
              </label>
              <textarea
                name="message"
                // cols={30}
                rows={3}
                placeholder="문의사항을 입력해주세요"
                className="w-full rounded-md border-transparent px-6 py-3 text-base placeholder-gray-500 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-3 my-3"
              />
            </div>
            <div className="flex justify-center mb-20">
              <button className="bg-blue-800 text-white py-3 px-6 rounded-xl font-bold mt-2 hover:bg-red-600 lg:py-4 lg:px-10 lg:text-lg ">
                상담신청
              </button>
            </div>
          </form>
        </div>
        {/* <div className="px-10 py-2">
          <div className="my-10 container">
            <div className="font-bold">성명</div>
            <div className="mt-3 p-2 shadow-sm  rounded-md ring-1 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="text"
                name="name"
                placeholder="성명을 입력하세요"
                className="w-full outline-none h-full"
                maxLength={5}
              />
            </div>
          </div>
          <div className="my-10">
            <div className="font-bold">이메일</div>
            <div className="mt-3 p-2 shadow-sm  rounded-md ring-1 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                className="w-full outline-none"
                maxLength={30}
              />
            </div>
          </div>
          <div className="my-10">
            <div className="font-bold">문의사항</div>
            <div className="mt-3 p-2 shadow-sm  rounded-md ring-1 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="문의사항을 입력하세요"
                className="w-full outline-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mb-20">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-xl font-bold mt-2 hover:bg-red-600 ">
              상담신청
            </button>
          </div>
        </div> */}
      </section>
    </>
  );
}
