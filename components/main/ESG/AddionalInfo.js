"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function AdditionalInfo() {
  const [sales, setSales] = useState("");
  const [energy_1, setEnergy_1] = useState(0);
  const [energy_2, setEnergy_2] = useState(0);
  const [energy_3, setEnergy_3] = useState(0);
  const [energy_4, setEnergy_4] = useState(0);
  const [energy_5, setEnergy_5] = useState(0);
  const [energy_5_etc, setEnergy_5_etc] = useState("");

  const handleChanges = (e) => {
    setSales(e.target.defaultValue);
  };

  const handleChanges1 = (e) => {
    setEnergy_1(e.target.defaultValue);
  };
  const handleChanges2 = (e) => {
    setEnergy_2(e.target.defaultValue);
  };
  const handleChanges3 = (e) => {
    setEnergy_3(e.target.defaultValue);
  };
  const handleChanges4 = (e) => {
    setEnergy_4(e.target.defaultValue);
  };
  const handleChanges5 = (e) => {
    setEnergy_5(e.target.defaultValue);
  };
  const handleChanges5_etc = (e) => {
    setEnergy_5_etc(e.target.defaultValue);
  };

  // useEffect(() => {
  //   console.log(sales);
  //   console.log(energy_1);
  //   console.log(energy_2);
  //   console.log(energy_3);
  //   console.log(energy_4);
  //   console.log(energy_5);
  //   console.log(energy_5_etc);
  // }, [energy_1, energy_2, energy_3, energy_4, energy_5, energy_5_etc]);

  console.log(sales);
  console.log(energy_1);
  console.log(energy_2);
  console.log(energy_3);
  console.log(energy_4);
  console.log(energy_5);
  console.log(energy_5_etc);

  const sum =
    Number(energy_1) +
    Number(energy_2) +
    Number(energy_3) +
    Number(energy_4) +
    Number(energy_5);
  console.log(sum);

  return (
    <>
      {/* make questions with label and checkbox type   */}
      <section className="container px-5 mx-auto">
        <div className="mb-10">
          <label className="text-gray-700 text-xl font-bold mb-2">
            1. 기업의 매출액을 선택해주세요.
          </label>
          <div className=" ms-4 text-lg">
            <input
              type="radio"
              id="1"
              name="sales"
              defaultValue="10억미만"
              onChange={handleChanges}
            />
            <label htmlFor="1" className="me-5">
              {" "}
              10억미만
            </label>
            <input
              type="radio"
              id="2"
              name="sales"
              defaultValue="10억이상"
              onChange={handleChanges}
            />
            <label htmlFor="2" className="me-5">
              {" "}
              10억이상
            </label>
            <input
              type="radio"
              id="3"
              name="sales"
              defaultValue="20억이상"
              onChange={handleChanges}
            />
            <label htmlFor="3" className="me-5">
              {" "}
              20억이상
            </label>
            <input
              type="radio"
              id="4"
              name="sales"
              defaultValue="50억이상"
              onChange={handleChanges}
            />
            <label htmlFor="4" className="me-5">
              {" "}
              50억이상
            </label>
            <input
              type="radio"
              id="5"
              name="sales"
              defaultValue="100억이상"
              onChange={handleChanges}
            />
            <label htmlFor="5" className="me-5">
              {" "}
              100억이상
            </label>
            <input
              type="radio"
              id="6"
              name="sales"
              defaultValue="500억이상"
              onChange={handleChanges}
            />
            <label htmlFor="6" className="me-5">
              {" "}
              500억이상
            </label>
          </div>
        </div>

        {/* 에너지 종류와 그 비율 */}
        <div>
          <div className="text-lg w-full  mb-4">
            <p>
              <strong className="text-blue-500">
                귀사가 사용하고있는 에너지 종류와 그 비율 (%, 비용기준)
              </strong>
              을 선택 해 주세요.
            </p>
          </div>
          <div className="mb-4">
            각 에너지의 사용 비율을 클릭 해 총합이 100%가 되도록 설정해 주시기
            바랍니다.
          </div>
        </div>
        <div>
          <table className="border border-collapse">
            <tbody className="border border-collapse">
              <tr className="border ">
                <th className="text-start p-5 text-lg border">1. 전력</th>
                <td className="px-4">
                  <input
                    type="radio"
                    id="전력0"
                    name="energy_1"
                    defaultValue="0"
                    className=""
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력0"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    0%
                  </label>

                  <input
                    type="radio"
                    id="전력10"
                    name="energy_1"
                    defaultValue="10"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력10"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    10%
                  </label>

                  <input
                    type="radio"
                    id="전력20"
                    name="energy_1"
                    defaultValue="20"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력20"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    20%
                  </label>

                  <input
                    type="radio"
                    id="전력30"
                    name="energy_1"
                    defaultValue="30"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력30"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    30%
                  </label>

                  <input
                    type="radio"
                    id="전력40"
                    name="energy_1"
                    defaultValue="40"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력40"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    40%
                  </label>

                  <input
                    type="radio"
                    id="전력50"
                    name="energy_1"
                    defaultValue="50"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력50"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    50%
                  </label>

                  <input
                    type="radio"
                    id="전력60"
                    name="energy_1"
                    defaultValue="60"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력60"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    60%
                  </label>

                  <input
                    type="radio"
                    id="전력70"
                    name="energy_1"
                    defaultValue="70"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력70"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    70%
                  </label>

                  <input
                    type="radio"
                    id="전력80"
                    name="energy_1"
                    defaultValue="80"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력80"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    80%
                  </label>

                  <input
                    type="radio"
                    id="전력90"
                    name="energy_1"
                    defaultValue="90"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력90"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    90%
                  </label>

                  <input
                    type="radio"
                    id="전력100"
                    name="energy_1"
                    defaultValue="100"
                    onChange={handleChanges1}
                  />
                  <label
                    htmlFor="전력100"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    100%
                  </label>
                </td>
              </tr>
              <tr className="border">
                <th className="text-start p-5 text-lg border ">2. 유류</th>
                <td className="px-4">
                  <input
                    type="radio"
                    id="유류0"
                    name="energy_2"
                    defaultValue="0"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류0"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    0%
                  </label>

                  <input
                    type="radio"
                    id="유류10"
                    name="energy_2"
                    defaultValue="10"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류10"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    10%
                  </label>

                  <input
                    type="radio"
                    id="유류20"
                    name="energy_2"
                    defaultValue="20"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류20"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    20%
                  </label>

                  <input
                    type="radio"
                    id="유류30"
                    name="energy_2"
                    defaultValue="30"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류30"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    30%
                  </label>

                  <input
                    type="radio"
                    id="유류40"
                    name="energy_2"
                    defaultValue="40"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류40"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    40%
                  </label>

                  <input
                    type="radio"
                    id="유류50"
                    name="energy_2"
                    defaultValue="50"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류50"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    50%
                  </label>

                  <input
                    type="radio"
                    id="유류60"
                    name="energy_2"
                    defaultValue="60"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류60"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    60%
                  </label>

                  <input
                    type="radio"
                    id="유류70"
                    name="energy_2"
                    defaultValue="70"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류70"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    70%
                  </label>

                  <input
                    type="radio"
                    id="유류80"
                    name="energy_2"
                    defaultValue="80"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류80"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    80%
                  </label>

                  <input
                    type="radio"
                    id="유류90"
                    name="energy_2"
                    defaultValue="90"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류90"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    90%
                  </label>

                  <input
                    type="radio"
                    id="유류100"
                    name="energy_2"
                    defaultValue="100"
                    onChange={handleChanges2}
                  />
                  <label
                    htmlFor="유류100"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    100%
                  </label>
                </td>
              </tr>
              <tr className="border">
                <th className="text-start p-5 text-lg border">3. 가스</th>
                <td className="px-4">
                  <input
                    type="radio"
                    id="가스0"
                    name="energy_3"
                    defaultValue="0"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스0"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    0%
                  </label>

                  <input
                    type="radio"
                    id="가스10"
                    name="energy_3"
                    defaultValue="10"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스10"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    10%
                  </label>

                  <input
                    type="radio"
                    id="가스20"
                    name="energy_3"
                    defaultValue="20"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스20"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    20%
                  </label>

                  <input
                    type="radio"
                    id="가스30"
                    name="energy_3"
                    defaultValue="30"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스30"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    30%
                  </label>

                  <input
                    type="radio"
                    id="가스40"
                    name="energy_3"
                    defaultValue="40"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스40"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    40%
                  </label>

                  <input
                    type="radio"
                    id="가스50"
                    name="energy_3"
                    defaultValue="50"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스50"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    50%
                  </label>

                  <input
                    type="radio"
                    id="가스60"
                    name="energy_3"
                    defaultValue="60"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스60"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    60%
                  </label>

                  <input
                    type="radio"
                    id="가스70"
                    name="energy_3"
                    defaultValue="70"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스70"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    70%
                  </label>

                  <input
                    type="radio"
                    id="가스80"
                    name="energy_3"
                    defaultValue="80"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스80"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    80%
                  </label>

                  <input
                    type="radio"
                    id="가스90"
                    name="energy_3"
                    defaultValue="90"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스90"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    90%
                  </label>

                  <input
                    type="radio"
                    id="가스100"
                    name="energy_3"
                    defaultValue="100"
                    onChange={handleChanges3}
                  />
                  <label
                    htmlFor="가스100"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    100%
                  </label>
                </td>
              </tr>
              <tr className="border">
                <th className="text-start p-5 text-lg border">4. 스팀</th>
                <td className="px-4">
                  <input
                    type="radio"
                    id="스팀0"
                    name="energy_4"
                    defaultValue="0"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀0"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    0%
                  </label>

                  <input
                    type="radio"
                    id="스팀10"
                    name="energy_4"
                    defaultValue="10"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀10"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    10%
                  </label>

                  <input
                    type="radio"
                    id="스팀20"
                    name="energy_4"
                    defaultValue="20"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀20"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    20%
                  </label>

                  <input
                    type="radio"
                    id="스팀30"
                    name="energy_4"
                    defaultValue="30"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀30"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    30%
                  </label>

                  <input
                    type="radio"
                    id="스팀40"
                    name="energy_4"
                    defaultValue="40"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀40"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    40%
                  </label>

                  <input
                    type="radio"
                    id="스팀50"
                    name="energy_4"
                    defaultValue="50"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀50"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    50%
                  </label>

                  <input
                    type="radio"
                    id="스팀60"
                    name="energy_4"
                    defaultValue="60"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀60"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    60%
                  </label>

                  <input
                    type="radio"
                    id="스팀70"
                    name="energy_4"
                    defaultValue="70"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀70"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    70%
                  </label>

                  <input
                    type="radio"
                    id="스팀80"
                    name="energy_4"
                    defaultValue="80"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀80"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    80%
                  </label>

                  <input
                    type="radio"
                    id="스팀90"
                    name="energy_4"
                    defaultValue="90"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀90"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    90%
                  </label>

                  <input
                    type="radio"
                    id="스팀100"
                    name="energy_4"
                    defaultValue="100"
                    onChange={handleChanges4}
                  />
                  <label
                    htmlFor="스팀100"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    100%
                  </label>
                </td>
              </tr>
              <tr className="border">
                <th className="text-start p-5 text-lg border">
                  5. 기타
                  <br />
                  <input
                    type="text"
                    name="energy_5_etc"
                    placeholder="(예 : 화목, 연탄, 석탄 등)"
                  />
                </th>
                <td className="px-4">
                  <input
                    type="radio"
                    id="기타0"
                    name="energy_5"
                    defaultValue="0"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타0"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    0%
                  </label>

                  <input
                    type="radio"
                    id="기타10"
                    name="energy_5"
                    defaultValue="10"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타10"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    10%
                  </label>

                  <input
                    type="radio"
                    id="기타20"
                    name="energy_5"
                    defaultValue="20"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타20"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    20%
                  </label>

                  <input
                    type="radio"
                    id="기타30"
                    name="energy_5"
                    defaultValue="30"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타30"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    30%
                  </label>

                  <input
                    type="radio"
                    id="기타40"
                    name="energy_5"
                    defaultValue="40"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타40"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    40%
                  </label>

                  <input
                    type="radio"
                    id="기타50"
                    name="energy_5"
                    defaultValue="50"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타50"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    50%
                  </label>

                  <input
                    type="radio"
                    id="기타60"
                    name="energy_5"
                    defaultValue="60"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타60"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    60%
                  </label>

                  <input
                    type="radio"
                    id="기타70"
                    name="energy_5"
                    defaultValue="70"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타70"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    70%
                  </label>

                  <input
                    type="radio"
                    id="기타80"
                    name="energy_5"
                    defaultValue="80"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타80"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    80%
                  </label>

                  <input
                    type="radio"
                    id="기타90"
                    name="energy_5"
                    defaultValue="90"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타90"
                    className="text-left py-5 me-5 text-lg ms-2"
                  >
                    90%
                  </label>

                  <input
                    type="radio"
                    id="기타100"
                    name="energy_5"
                    defaultValue="100"
                    onChange={handleChanges5}
                  />
                  <label
                    htmlFor="기타100"
                    className="text-left  py-5 me-5 text-lg ms-2"
                  >
                    100%
                  </label>
                </td>
              </tr>
              <tr>
                <th className="text-start p-5 text-lg">합계</th>
                <td className="text-center">
                  <p>
                    <span>
                      <span
                        className={`font-bold text-lg ${
                          sum === 100 ? "text-blue-500 text-xl" : "text-red-500"
                        } `}
                      >
                        {sum}
                      </span>
                      %
                    </span>{" "}
                    / 100%
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
