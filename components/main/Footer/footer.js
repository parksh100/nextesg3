import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-3">
      <div className=" mx-auto px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="col-span-2 hidden sm:block">
            <img
              src="/images/logo_esgMaster2.svg"
              alt="esg master logo"
              className="w-52"
            />
            <p className="text-gray-400 text-base mt-2">
              <strong>중소기업 ESG컨설팅 전문기업!</strong>
              <br /> 검증된 노하우로 ESG경영을 돕습니다. ESG Master는 ESG경영을
              위한 컨설팅, 교육, 컨퍼런스, 콘텐츠를 제공합니다.
            </p>
          </div>
          <div className="col-span-1 space-y-2 mx-auto md:max-w-sm">
            <h1 className="font-bold text-xl">Main</h1>
            <p className="text-gray-400 text-base">
              {" "}
              <Link href="#"> 상담신청</Link>
            </p>
            <p className="text-gray-400 text-base">
              {" "}
              <Link href="#"> 견적요청</Link>
            </p>
          </div>

          <div className="col-span-1 space-y-2 mx-auto">
            <h1 className="font-bold text-xl">Service</h1>
            <p className="text-gray-400 text-base">
              {" "}
              <Link href="/about"> About</Link>
            </p>
            <p className="text-gray-400 text-base">
              {" "}
              <Link href="/service"> Process</Link>
            </p>
          </div>

          <div className="col-span-1 space-y-2 mx-auto">
            <h1 className="font-bold text-xl">Support</h1>
            <p className="text-gray-400 text-base">
              {" "}
              <Link href="/contact"> 제안/불편</Link>
            </p>
            <p className="text-gray-400 text-base">
              {" "}
              <Link href="/contact"> 오시는 길</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
