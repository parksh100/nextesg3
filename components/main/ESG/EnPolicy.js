import Link from "next/link";

export default function EnPolicy() {
  return (
    <section className="container px-5 mx-auto mt-20">
      <form>
        <div>
          <div className="mb-10">
            <span className="text-xl font-bold">환경경영 정책</span>
          </div>
        </div>

        <div className="text-gray-700 text-xl font-bold mb-2">
          <span>
            E01. 귀사의 경영방침 및 사업계획서에 장단기 환경경영 목표가 수립되어
            있습니까?{" "}
          </span>

          <div className="hidden">지표정의</div>
          <div className="hidden">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">E01. 환경목표 수립 및 계획</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <ul className="q-tooltip-content">
                  <li>
                    <p>정의</p>
                    <div>
                      기업의 환경경영 이념 및 방향성을 구체화하기 위해서 CEO가
                      공식적으로 환경 목표를 수립, 계획하고 선언하는 것을
                      의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      환경경영을 효율적으로 수행하기 위해서는, 기업에 요구되는
                      환경책임의 수준을 파악하고 이에 걸맞는 환경목표를 수립해야
                      합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="p-6 w-1/2">
          <table className=" w-full table-auto border border-gray-200 divide-y divide-gray-200 divide-x">
            <tbody className="text-center">
              <tr className="bg-gray-100">
                <th className="px-4 py-2">NO</th>
                <th className="px-4 py-2">내용</th>
                <th className="px-4 py-2">선택</th>
              </tr>

              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">중장기(2년 이상) 계획 수립</td>
                <td className="px-4 py-2">
                  <input
                    type="radio"
                    name="questionno_1"
                    id="box_1_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_1_1"></label>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">단기(1년) 계획 수립</td>
                <td className="px-4 py-2">
                  <input
                    type="radio"
                    name="questionno_1"
                    id="box_1_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_1_2"></label>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">계획 없음</td>
                <td className="px-4 py-2">
                  <input
                    type="radio"
                    name="questionno_1"
                    id="box_1_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_1_3"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-gray-700 text-xl font-bold mb-2">
          <span>
            E02. 귀사의 경영방침 및 사업계획서에 반영된 환경경영 목표 분야를
            체크하십시오. <font color="#39a689">(복수 선택 가능)</font>
          </span>

          <div className="hidden">지표정의</div>
          <div className="hidden">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">E02. 분야별 목표 수립 여부</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <ul className="hidden">
                  <li>
                    <p>정의</p>
                    <div>
                      CEO에 의해 수립된 환경목표를 달성하기 위하여 환경 분야별로
                      단기, 중·장기세부 목표를 수립하는 것을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      한정된 자원을 가지고 환경경영을 효율적으로 수행해야 하는
                      중소벤처기업은 분야별로 단기 및 중·장기의 측정가능한
                      세부목표를 수립해야 합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="p-6 w-1/2">
          <table className=" w-full table-auto border border-gray-200 divide-y divide-gray-200 divide-x ">
            <tbody className="text-center">
              <tr className="bg-gray-100">
                <th className="px-4 py-2">NO</th>
                <th className="px-6 py-2">내용</th>
                <th className="px-4 py-2">선택</th>
              </tr>

              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">온실가스 배출</td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="questionno_2_1"
                    id="box_2_1"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_2_1"></label>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">에너지사용</td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="questionno_2_2"
                    id="box_2_2"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_2_2"></label>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">용수</td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="questionno_2_3"
                    id="box_2_3"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_2_3"></label>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">폐기물</td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="questionno_2_4"
                    id="box_2_4"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_2_4"></label>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">해당없음</td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="questionno_2_5"
                    id="box_2_5"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_2_5"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            E03. 귀사의 경영방침 및 사업계획서상에 친환경제품 개발 또는
            환경친화적 공정개선 계획이 포함되어 있습니까 ?{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">E03. 친환경 혁신 실행</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <ul className="q-tooltip-content">
                  <li>
                    <p>정의</p>
                    <div>
                      친환경 혁신을 통해 제품을 개발, 생산, 포장, 운송, 판매,
                      소비하는 전 과정에서 환경오염을 줄이는 것을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      환경친화적 제품 및 기술 개발을 통해 자원을 효율적으로
                      사용하고 오염물질 배출을 최소화할 수 있습니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table3">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">
                  경영방침 및 사업계획서상에 포함되어 있으며, 친환경제품 개발
                  실적 또는 환경친화적 공정개선 실적을 보유하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_3"
                    id="box_3_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_3_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  경영방침 및 사업계획서상에 포함되어 있으나, 현재 실적은 없다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_3"
                    id="box_3_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_3_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  경영방침 및 사업계획서상에 포함되어 있지 않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_3"
                    id="box_3_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_3_3"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="q_top">
          <div className="color_title">
            <span>환경경영 관리</span>
          </div>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            E04. 귀사의 온실가스 및 대기오염물질 관리 매뉴얼 보유여부와
            관리수준을 체크하십시오.{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">E04. 온실가스 배출 관리</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <ul className="q-tooltip-content">
                  <li>
                    <p>정의</p>
                    <div>
                      기업의 경영활동으로 발생하는 온실가스를 감축하기 위한 관리
                      및 개선 활동을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      온실가스는 기후변화의 주요 원인 중 하나이며 최근 글로벌
                      대기업들은 공급 업체의 온실가스 배출량까지 관리하고
                      있습니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table4">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고, 측정과 분석을 통해 개선된 결과를
                  매뉴얼 및 사업계획에 반영하여 운영하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_4"
                    id="box_4_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_4_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고 측정된 결과를 분석하여 개선하고 있으나
                  사업계획서에 반영하지 못하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_4"
                    id="box_4_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_4_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고 측정은 이루어지나 분석 및 개선은
                  이루어지지 않고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_4"
                    id="box_4_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_4_3"></label>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="textLeft">매뉴얼만 보유하고 있다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_4"
                    id="box_4_4"
                    defaultValue="4"
                  />
                  <label htmlFor="box_4_4"></label>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td className="textLeft">보유하고 있지 않다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_4"
                    id="box_4_5"
                    defaultValue="5"
                  />
                  <label htmlFor="box_4_5"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            E05. 귀사의 수질관리 매뉴얼 보유여부와 관리수준을 체크하십시오.
            (폐수발생 억제 포함){" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">E05. 수처리 및 폐수 관리</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <ul className="q-tooltip-content">
                  <li>
                    <p>정의</p>
                    <div>
                      수자원의 효율적인 활용을 위해 용수 사용을 줄이거나
                      폐수처리 시설을 통해 폐수발생을 줄이는 것을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      자원은 인류의 생존을 위한 필수 자원이며 특히나 식수로
                      쓰이는 담수는 지구상 물 총량의 2.7%에 불과하므로 관리가
                      필요합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table5">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고, 측정과 분석을 통해 개선된 결과를
                  매뉴얼 및 사업계획에 반영하여 운영하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_5"
                    id="box_5_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_5_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고 측정된 결과를 분석하여 개선하고 있으나
                  사업계획서에 반영하지 못하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_5"
                    id="box_5_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_5_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고 측정은 이루어지나 분석 및 개선은
                  이루어지지 않고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_5"
                    id="box_5_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_5_3"></label>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="textLeft">매뉴얼만 보유하고 있다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_5"
                    id="box_5_4"
                    defaultValue="4"
                  />
                  <label htmlFor="box_5_4"></label>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td className="textLeft">보유하고 있지 않다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_5"
                    id="box_5_5"
                    defaultValue="5"
                  />
                  <label htmlFor="box_5_5"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            E06. 귀사의 폐기물 관리 매뉴얼 보유여부와 관리수준을 체크하십시오.{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">E06. 폐기물 관리</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <ul className="q-tooltip-content">
                  <li>
                    <p>정의</p>
                    <div>
                      제품 및 서비스를 생산, 운송, 판매하는 전 과정에서 자원의
                      사용을 원천적으로 줄이거나 재활용, 재사용이 가능하도록
                      개선하여 폐기물 배출을 최소화하고 이를 적법하게 처리하는
                      것을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      폐기물 처리시, 발생할 수 있는 다량의 유해물질을 막기
                      위해서는 자원의 사용을원천적으로 줄이거나 폐기물 발생을
                      최대한 억제해야 합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table6">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고, 측정과 분석을 통해 개선된 결과를
                  매뉴얼 및 사업계획에 반영하여 운영하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_6"
                    id="box_6_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_6_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고 측정된 결과를 분석하여 개선하고 있으나
                  사업계획서에 반영하지 못하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_6"
                    id="box_6_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_6_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  매뉴얼을 보유하고 있고 측정은 이루어지나 분석 및 개선은
                  이루어지지 않고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_6"
                    id="box_6_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_6_3"></label>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="textLeft">매뉴얼만 보유하고 있다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_6"
                    id="box_6_4"
                    defaultValue="4"
                  />
                  <label htmlFor="box_6_4"></label>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td className="textLeft">보유하고 있지 않다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_6"
                    id="box_6_5"
                    defaultValue="5"
                  />
                  <label htmlFor="box_6_5"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            E07. <font color="#348ad2">(필수 아님: 희망 기업만 입력)</font> 최근
            3개년 에너지 사용량 추이를 기재하여 주십시오.
          </span>
          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">E07. 에너지 사용량 추이</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <ul className="q-tooltip-content">
                  <li>
                    <p>정의</p>
                    <div>
                      기업 내에서 사용하는 에너지를 파악하여 합리적이고
                      효율적으로 에너지 사용량을 관리하는 것을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      에너지 효율 향상, 고효율 설비 도입, 건물 단열 강화, 연비
                      개선 등을 통한 에너지 사용량 관리는 환경 피해를 줄이고
                      기후변화 방지에 기여합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>
        <div className="diagnosis_subTitle2">
          <font color="#348ad2">
            ※ 원단위에너지 사용량 확인을 희망하는 기업만 입력: 전력량,
            탄소배출량은 한전 파워플래너 가입시 조회 가능
          </font>
        </div>
        <div className="answer_table">
          <div className="m_scroll">
            <table>
              <tbody>
                <tr>
                  <th>에너지</th>
                  <th>단위</th>
                  <th>
                    <span id="standard_yy_3">2020년</span>
                  </th>
                  <th>
                    <span id="standard_yy_2">2021년</span>
                  </th>
                  <th>
                    <select name="standard_yy" id="standard_yy">
                      <option defaultValue="2022">2022년</option>
                      <option defaultValue="2021">2021년</option>
                    </select>
                  </th>
                  <th>비고</th>
                </tr>
                <tr>
                  <td>구매 에너지(전력)</td>
                  <td>전력량 (kwh)</td>
                  <td>
                    <input
                      type="text"
                      className="num_only3"
                      name="acc1_1"
                      defaultValue=""
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only3"
                      name="acc1_2"
                      defaultValue=""
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only3"
                      name="acc1_3"
                      defaultValue=""
                    />
                  </td>
                  <td>
                    한전 파워플래너 접속
                    <br />
                    <Link href="https://pp.kepco.co.kr/" target="_blank">
                      <font color="#348ad2">(kepco.co.kr)</font>
                    </Link>
                    <Link href="" className="btn">
                      입력방법
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>온실가스 배출량(전력 환산값)</td>
                  <td>탄소배출량(CO2)</td>
                  <td>
                    <input
                      type="text"
                      className="num_only3"
                      name="acc2_1"
                      defaultValue=""
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only3"
                      name="acc2_2"
                      defaultValue=""
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only3"
                      name="acc2_3"
                      defaultValue=""
                    />
                  </td>
                </tr>
                <tr>
                  <td>매출액</td>
                  <td>매출액 (백만원)</td>
                  <td>
                    <input
                      type="text"
                      className="num_only4"
                      name="acc3_1"
                      defaultValue="80"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only4"
                      name="acc3_2"
                      defaultValue="300"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only4"
                      name="acc3_3"
                      defaultValue="450"
                    />
                  </td>
                  <td>결산 재무재표 입력</td>
                </tr>
                <tr>
                  <td>원단위 에너지 사용량</td>
                  <td>kwh / 백만원</td>
                  <td>
                    <input
                      type="text"
                      className="num_only4"
                      name="acc4_1"
                      defaultValue=""
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only4"
                      name="acc4_2"
                      defaultValue=""
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="num_only4"
                      name="acc4_3"
                      defaultValue=""
                    />
                  </td>
                  <td>자동 산출</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </section>
  );
}
