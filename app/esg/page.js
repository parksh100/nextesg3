import CarouselCustomize from "@/components/main/CarouselCustomize";
import AdditionalInfo from "@/components/main/ESG/AddionalInfo";
import PageHeaderComponent from "@/components/main/common/PageHeader";
import Link from "next/link";

export default function ESGPage() {
  return (
    <>
      <CarouselCustomize
        imgSrc="/images/background-image1.jpg"
        imgAlt="노트필기장 위에 놓여진 연필"
        title="ESG자가진단"
        content="ESG체크리스트를 기반으로 기업이 전문가와 함께 ESG수준 측정, 이해관계자 분석 등을 통해ESG경영 혁신을 위한 개선과제를 도출하고,
        중장기 추진 전략을 수립할 수 있도록 합니다."
      />
      <PageHeaderComponent
        title="ESG자가진단 체크리스트"
        description1={
          "ESG체크리스트를 기반으로 기업이 전문가와 함께 ESG수준 측정, 이해관계자 분석 등을 통해ESG경영 혁신을 위한 개선과제를 도출하고,  \n 중장기 추진 전략을 수립할 수 있도록 합니다. "
        }
        // description2={
        //   "중소벤처기업진흥공단의 기업진단 서비스 중 일부를 이용하였습니다.\n 더 자세한 자가진단은 중소벤처기업진흥공단 ESG통합플랫폼에서 확인하실 수 있습니다."
        // }
        description2={
          <span>
            {
              "중소벤처기업진흥공단의 기업진단 서비스 중 일부를 이용하였습니다.\n 더 자세한 자가진단은 "
            }
            <Link
              href="https://kdoctor.kosmes.or.kr/esgplatform/service/intro_esg.do"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              중소벤처기업진흥공단 ESG통합플랫폼
            </Link>
            {"에서 확인하실 수 있습니다."}
          </span>
        }
      />

      {/*추가입력사항   */}
      <AdditionalInfo />
      {/* E-환경 */}
      <section className="container px-5 mx-auto">
        <div className="diagnosis_title">
          ESG 자가진단 시작{" "}
          <span>
            상시적으로 자가진단, 기업분석 및 신속한 진단 솔루션을 제공한다.
          </span>
        </div>

        <form>
          <div className="q_top">
            <div className="color_title">
              <span>환경경영 정책</span>
            </div>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              E01. 귀사의 경영방침 및 사업계획서에 장단기 환경경영 목표가
              수립되어 있습니까?{" "}
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
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
                        환경책임의 수준을 파악하고 이에 걸맞는 환경목표를
                        수립해야 합니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div>
            <table>
              <tbody>
                <tr>
                  <th>NO</th>
                  <th>내용</th>
                  <th>선택</th>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="textLeft">중장기(2년 이상) 계획 수립</td>
                  <td>
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
                  <td>2</td>
                  <td className="textLeft">단기(1년) 계획 수립</td>
                  <td>
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
                  <td>3</td>
                  <td className="textLeft">계획 없음</td>
                  <td>
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

          <div className="diagnosis_subTitle">
            <span>
              E02. 귀사의 경영방침 및 사업계획서에 반영된 환경경영 목표 분야를
              체크하십시오. <font color="#39a689">(복수 선택 가능)</font>
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
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
                  <ul className="q-tooltip-content">
                    <li>
                      <p>정의</p>
                      <div>
                        CEO에 의해 수립된 환경목표를 달성하기 위하여 환경
                        분야별로 단기, 중·장기세부 목표를 수립하는 것을
                        의미합니다.
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

          <div className="answer_table" id="q_table2">
            <table>
              <tbody>
                <tr>
                  <th>NO</th>
                  <th>내용</th>
                  <th>선택</th>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="textLeft">온실가스 배출</td>
                  <td>
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
                  <td>2</td>
                  <td className="textLeft">에너지사용</td>
                  <td>
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
                  <td>3</td>
                  <td className="textLeft">용수</td>
                  <td>
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
                  <td>4</td>
                  <td className="textLeft">폐기물</td>
                  <td>
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
                  <td>5</td>
                  <td className="textLeft">해당없음</td>
                  <td>
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
                    경영방침 및 사업계획서상에 포함되어 있으나, 현재 실적은
                    없다.
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
                        기업의 경영활동으로 발생하는 온실가스를 감축하기 위한
                        관리 및 개선 활동을 의미합니다.
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
                    매뉴얼을 보유하고 있고 측정된 결과를 분석하여 개선하고
                    있으나 사업계획서에 반영하지 못하고 있다.
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
                    매뉴얼을 보유하고 있고 측정된 결과를 분석하여 개선하고
                    있으나 사업계획서에 반영하지 못하고 있다.
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
                    매뉴얼을 보유하고 있고 측정된 결과를 분석하여 개선하고
                    있으나 사업계획서에 반영하지 못하고 있다.
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
              E07. <font color="#348ad2">(필수 아님: 희망 기업만 입력)</font>{" "}
              최근 3개년 에너지 사용량 추이를 기재하여 주십시오.
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

        {/* s-사회 */}
        <div className="diagnosis_title2">
          S - 사회
          <span className="essential-info">
            (모든 항목은 필수 입력 항목입니다.)
          </span>
          <div>
            <Link href="" className="green">
              임시저장
            </Link>
            <Link href="" className="navy">
              이전
            </Link>
            <Link href="">다음</Link>
          </div>
        </div>

        <form name="frm" method="post">
          <div className="q_top">
            <div className="color_title">
              <span>사회적책임 정책</span>
            </div>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              S01. 귀사의 경영방침 및 사업계획서에 반영 된 사회적 책임경영
              정책(목표) 분야를 체크하십시오.{" "}
              <font color="#39a689">(복수 선택 가능)</font>
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">S01. 정책(목표) 수립</p>
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
                        기업이 근로자인권 보호, 사회공헌, 공급망(소비자) 관리,
                        정보보안, 산업재해 예방 등과 관련된 책임경영 정책 또는
                        목표를 수립하는 것을 의미합니다.
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        기업의 경영활동에서 발생할 수 있는 인권침해, 산업재해,
                        공급망 위험 등의부정적 영향을 사전에 방지하고 문제
                        발생시 적절한 조치를 취하기 위해 사회적 책임 정책 수립이
                        필요합니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div className="answer_table" id="q_table9">
            <table>
              <tbody>
                <tr>
                  <th>NO</th>
                  <th>내용</th>
                  <th>선택</th>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="textLeft">근로자 인권</td>
                  <td>
                    <input
                      type="checkbox"
                      name="questionno_9_1"
                      id="box_9_1"
                      defaultValue="Y"
                    />
                    <label htmlFor="box_9_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">사회공헌</td>
                  <td>
                    <input
                      type="checkbox"
                      name="questionno_9_2"
                      id="box_9_2"
                      defaultValue="Y"
                    />
                    <label htmlFor="box_9_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">공급망(소비자 포함)</td>
                  <td>
                    <input
                      type="checkbox"
                      name="questionno_9_3"
                      id="box_9_3"
                      defaultValue="Y"
                    />
                    <label htmlFor="box_9_3"></label>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="textLeft">정보보안</td>
                  <td>
                    <input
                      type="checkbox"
                      name="questionno_9_4"
                      id="box_9_4"
                      defaultValue="Y"
                    />
                    <label htmlFor="box_9_4"></label>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td className="textLeft">산업재해 예방(안전/보건 포함)</td>
                  <td>
                    <input
                      type="checkbox"
                      name="questionno_9_5"
                      id="box_9_5"
                      defaultValue="Y"
                    />
                    <label htmlFor="box_9_5"></label>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td className="textLeft">해당없음</td>
                  <td>
                    <input
                      type="checkbox"
                      name="questionno_9_6"
                      id="box_9_6"
                      defaultValue="Y"
                    />
                    <label htmlFor="box_9_6"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="q_top">
            <div className="color_title">
              <span>사회적책임 관리</span>
            </div>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              S02. 지역사회공헌 참여 프로그램을 운영하고 있으며, 개선사항을
              반영하여 관리하고 있습니까?{" "}
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    S02. 지역사회공헌 프로그램 실행
                  </p>
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
                        기업과 지역사회 간의 상호작용을 통해 기업이 지역사회의
                        복지와 발전에 기여하는 활동을 의미합니다.
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        지역사회의 일원으로서 공헌하는 것 뿐만 아니라 지역사회와
                        원만한 관계를 유지하여 대기오염, 소음공해 등 불가피한
                        사건, 사고 발생 시 민원신고 등의 위험을 최소화할 수
                        있습니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div className="answer_table" id="q_table10">
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
                    지역사회 공헌 프로그램을 운영하고 있고, 개선사항을 반영하여
                    관리하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_10"
                      id="box_10_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_10_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    지역사회 공헌 프로그램을 기획 중에 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_10"
                      id="box_10_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_10_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">지역사회 공헌 프로그램이 없다.</td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_10"
                      id="box_10_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_10_3"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              S03. 공정한 계약절차 매뉴얼을 보유하고 있고 준수하고 있으며,
              개선사항을 반영하여 관리하고 있습니까 ?{" "}
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">S03. 공정거래 이행</p>
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
                        공정한 방법으로 거래하는 행위로, 자유로운 시장경쟁을
                        저해하거나 정당하지 못한 방법 등을 사용하여 거래하지
                        않는 행위를 의미합니다.
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        하도급법과 공정거래 위반 기업에 대한 평가기준이 강화되고
                        있으며 하도 급공정거래협약 이행평가시 제조업 등의
                        기술지원 보호 배점이 3점에서 5점으로 상향될 수 있습니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div className="answer_table" id="q_table11">
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
                    계약절차 매뉴얼을 보유하고 있고, 위반 사항 등 개선사항을
                    반영하여 관리하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_11"
                      id="box_11_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_11_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    계약절차 매뉴얼을 보유하고 있으나, 표준계약서만 적용하고
                    있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_11"
                      id="box_11_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_11_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">
                    계약절차 매뉴얼을 보유하고 있으나, 공정한 계약절차 미준수
                    건이 발생하기도 한다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_11"
                      id="box_11_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_11_3"></label>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="textLeft">
                    계약절차 매뉴얼을 보유하고 있지 않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_11"
                      id="box_11_4"
                      defaultValue="4"
                    />
                    <label htmlFor="box_11_4"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              S04. 사내 취업규칙을 갖추고 있으며, 내부 이해관계자의 동의를 거쳐
              개선사항을 반영하여 관리하고 있습니까 ?{" "}
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">S04. 취업규칙 적용</p>
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
                        사용자가 근로계약관계에 적용되는 근로조건이나 복무규율
                        등에 관련된 사항을 일방적으로 작성하여 자신의
                        근로자들에게 공통적으로 적용하는 규칙을 의미합니다.
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        근로기준법 제96조에서는 상시 10인 이상의 근로자를
                        사용하는 사용자는 취업규칙을 반드시 작성하여
                        지방노동관서장에게 신고하도록 규정하고 있고 이는
                        강행규정입니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div className="answer_table" id="q_table12">
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
                    취업규칙을 갖추고 있으며, 위반 및 미흡 등 개선사항을
                    반영하여 관리하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_12"
                      id="box_12_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_12_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    취업규칙은 갖추고 있으나, 개선 및 관리는 이루어지지 않고
                    있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_12"
                      id="box_12_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_12_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">
                    취업규칙은 갖추고 있으나, 신고는 이루어지고 있지 않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_12"
                      id="box_12_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_12_3"></label>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="textLeft">취업규칙이 문서화되어 있지 않다.</td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_12"
                      id="box_12_4"
                      defaultValue="4"
                    />
                    <label htmlFor="box_12_4"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              S05. 근로계약서는 작성·관리되고 있으며, 내부 이해관계자와의
              상생협력을 위해 개선사항을 반영하여 관리하고 있습니까 ?{" "}
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">S05. 근로계약 준수</p>
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
                        근로자와 사업주 모두의 권리보호를 위해 반드시 필요한
                        계약으로 임금, 근로시간 등사업주와 근로자 사이의 핵심
                        근로조건을 명확히 정하는 것을 의미합니다.
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        근로계약서는 임금, 근로시간 등 핵심 근로조건을 명확히
                        정하는 것으로, 근로자와사업주 모두의 권리보호를 위해
                        반드시 필요합니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div className="answer_table" id="q_table13">
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
                    근로계약서는 적법하게 작성·관리되고 있으며, 근로조건 등
                    개선사항을 반영하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_13"
                      id="box_13_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_13_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    근로계약서는 적법하게 작성·관리되고 있으나, 개선활동은
                    이루어지고 있지 않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_13"
                      id="box_13_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_13_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">
                    근로계약서는 적법하게 작성되어 있으나, 관리되고 있지는 않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_13"
                      id="box_13_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_13_3"></label>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="textLeft">
                    근로계약서가 문서화되어 있지 않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_13"
                      id="box_13_4"
                      defaultValue="4"
                    />
                    <label htmlFor="box_13_4"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              S06. 초과근무 기준을 갖추고 있으며, 내부 이해관계자의 충분한 동의
              절차를 거쳐 개선사항을 반영하여 관리하고 있습니까 ?{" "}
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">S06. 초과근로 관리</p>
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
                        근로기준법상의 기준근로시간을 초과하여 근무하는 것을
                        의미하며, 초과근로의 유형으로는 연장근로, 야간근로,
                        휴일근로 등이 있습니다.
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        장시간 근로 관행을 개선함으로써 근로자의 일과 생활의
                        균형을 보호하고 업무의효율성 및 생산성을 향상시킬 수
                        있습니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div className="answer_table" id="q_table14">
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
                    연장근무 및 휴일근무 동의절차 등 기준을 갖추고 있으며,
                    개선사항을 반영하여 관리하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_14"
                      id="box_14_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_14_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    연장근무 및 휴일근무 동의절차 등 기준을 갖추고 있으나,
                    개선사항을 반영하지는 못하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_14"
                      id="box_14_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_14_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">
                    연장근무 및 휴일근무 동의 절차서가 문서화되어 있지 않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_14"
                      id="box_14_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_14_3"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              S07. 산재발생 예방 활동 및 안전관리 대상 분야별 정기 점검이
              이루어지고 있으며, 내부 이해관계자의 충분한 의견을 수렴하여
              개선사항을 반영하여 관리하고 있습니까 ? (화재예방 소화설비 포함){" "}
            </span>

            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">S07. 산업재해 예방</p>
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
                        근로자가 업무와 관련한 건설물, 설비, 원재료, 가스, 증기,
                        분진 등에 의하거나 작업 또는 그 밖의 업무로 인하여 부상
                        또는 사망하거나 질병에 걸리는 산업재해를 예방하기 위한
                        안전조치를 하는 것을 의미합니다.
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        2022년 중대재해법 시행으로 인한 형사처벌, 법인 벌금,
                        행정제재, 징벌적손해보상 등 4중 처벌에 대한 피해를
                        예방하기 위해서는 선제적으로 산업재해를 예방해야 합니다.
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>

          <div className="answer_table" id="q_table15">
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
                    정기 점검이 이루어지고 있으며, 점검 및 결과에 따른
                    개선사항을 반영, 관리하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_15"
                      id="box_15_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_15_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    정기 및 분야별 점검을 실시하고 있으나, 개선사항을 반영,
                    관리하지는 못하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_15"
                      id="box_15_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_15_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">
                    정기 점검은 이루어지고 있으나, 분야별 점검은 실시하고 있지
                    않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_15"
                      id="box_15_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_15_3"></label>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="textLeft">점검을 실시하지 못하고 있다.</td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_15"
                      id="box_15_4"
                      defaultValue="4"
                    />
                    <label htmlFor="box_15_4"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="color_title blue">
            <img src="" />

            <span>서비스업 특화지표</span>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              NS02. 귀사는 고용, 승진, 업무 수행에 있어 성별, 장애 유무,
              출신국가 등 요건에 의한 차별 없이 동등한 기회를 제공하고 있습니까?{" "}
            </span>
            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">NS02. 차별금지 및 모니터링</p>
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
                        업무와 직접적으로 관계없는 이유로 임직원을 차별하고 있지
                        않는지 지속적으로 확인하고, 다양성을 존중하는 조직문화를
                        구축하는 것을 말합니다.{" "}
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        차별금지는 인권 원칙 중 가장 근본적인 원칙 중 하나로
                        법률에 의해 보장받고 있습니다.{" "}
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>
          <div className="answer_table" id="q_table36">
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
                    차별금지를 방지하는 명확한 기준을 제시하고, 모니터링을 통해
                    인식 개선을 위한 노력을 하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_36"
                      id="box_36_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_36_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    차별금지를 방지하는 명확한 기준을 제시하고 모니터링은 하고
                    있으나, 인식 개선을 위한 노력을 하고 있지 않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_36"
                      id="box_36_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_36_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">
                    차별금지를 방지하는 명확한 기준이 없고 모니터링도 하고 있지
                    않지만, 인식 개선을 위한 노력은 하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_36"
                      id="box_36_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_36_3"></label>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="textLeft">
                    차별금지 방지 및 인식 개선에 대해 아무런 노력을 하고 있지
                    않다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_36"
                      id="box_36_4"
                      defaultValue="4"
                    />
                    <label htmlFor="box_36_4"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="diagnosis_subTitle">
            <span>
              NS06. 귀사는 개인정보 보호를 위한 관리체계와 정보보안 조치가
              마련되어 있습니까?{" "}
            </span>
            <div className="q-tooltip">지표정의</div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">NS06. 정보 보호</p>
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
                        고객과 이해관계자의 정보를 보호하기 위한 규정 및
                        관리체계 마련과 영업비밀 및 기술 등의 보호를 위한
                        정보보안 체계를 수립하여 관리하는 것을 말합니다.{" "}
                      </div>
                    </li>
                    <li>
                      <p>필요성</p>
                      <div>
                        통신기술의 발달로 개인정보보호 의무가 더욱 중요해지고
                        있습니다. 또한 모든 임직원이 정보 자산 보호의 중요성 및
                        위험을 인지하고 정보 보안 활동을 실천해야 합니다.{" "}
                      </div>
                    </li>
                  </ul>
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
          </div>
          <div className="answer_table" id="q_table40">
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
                    정보보안 정책과 처리 기준을 규정하고 있으며, 철저하게
                    관리하고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_40"
                      id="box_40_1"
                      defaultValue="1"
                    />
                    <label htmlFor="box_40_1"></label>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="textLeft">
                    정보보안 정책과 처리 기준은 있으나, 관리는 이루어지지 않고
                    있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_40"
                      id="box_40_2"
                      defaultValue="2"
                    />
                    <label htmlFor="box_40_2"></label>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="textLeft">
                    정보보안 정책과 처리 기준은 없으나, 정보보안 각서 작성 등
                    관리가 이루어지고 있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_40"
                      id="box_40_3"
                      defaultValue="3"
                    />
                    <label htmlFor="box_40_3"></label>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="textLeft">
                    정보보안 정책 및 처리 기준도 없고, 관리도 이루어지지 않고
                    있다.
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="questionno_40"
                      id="box_40_4"
                      defaultValue="4"
                    />
                    <label htmlFor="box_40_4"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>

        {/* G- 지배구조 */}
        <div className="diagnosis_title">
          ESG 자가진단 시작{" "}
          <span>
            상시적으로 자가진단, 기업분석 및 신속한 진단 솔루션을 제공한다.
          </span>
        </div>

        <div className="stepBox">
          <div>
            <div>
              <p>
                <span>STEP 01</span>
              </p>
            </div>
            <img src="" />
            <p>
              추가정보
              <br className="m_only" />
              입력
            </p>
          </div>
          <div>
            <div>
              <p>
                <span>STEP 02</span>
              </p>
            </div>
            <img src="" />
            <p>
              인식확산
              <br className="m_only" />
              설문
            </p>
          </div>
          <div>
            <div>
              <p>
                <span>STEP 03</span>
              </p>
            </div>
            <img src="" />
            <p>E - 환경</p>
          </div>
          <div>
            <div>
              <p>
                <span>STEP 04</span>
              </p>
            </div>
            <img src="" />
            <p>S - 사회</p>
          </div>
          <div>
            <div>
              <p>
                <span>STEP 05</span>
              </p>
            </div>
            <img src="" />
            <p>G - 지배구조</p>
          </div>

          <div>
            <div>
              <p>
                <span>STEP 06</span>
              </p>
            </div>
            <img src="" />
            <p>
              수출기업 <br className="m_only" />
              특화지표
            </p>
          </div>

          <div>
            <div>
              <p>
                <span>STEP 07</span>
              </p>
            </div>
            <img src="" />
            <p>체크포인트</p>
          </div>
        </div>

        <div className="diagnosis_title2">
          G - 지배구조
          <span className="essential-info">
            (모든 항목은 필수 입력 항목입니다.)
          </span>
        </div>

        <div className="q_top">
          <div className="color_title">
            <span>윤리경영 정책</span>
          </div>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            G01. 귀사의 경영방침 및 사업계획서에 윤리경영 정책(목표)이 반영되어
            있습니까 ?{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">
                  G01. 윤리경영 정책(목표) 수립
                </p>
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
                      기업 경영 및 사업활동에 있어 '기업의 윤리적 책임'을
                      최우선의 가치로 생각하며, 투명하고 공정하며 합리적인
                      업무수행을 위한 정책을 수립하는 것을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      윤리경영 정책 수립 및 이행은 기업의 이미지 및 신뢰도에
                      긍정적인 영향을미치며 기업의 주가 또는 매출액 향상에
                      직접적인 원인이 될 수 있습니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table16">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">있다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_16"
                    id="box_16_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_16_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">없다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_16"
                    id="box_16_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_16_2"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="q_top">
          <div className="color_title">
            <span>윤리경영관리</span>
          </div>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            G02. 비윤리적 이슈관리 기준이 마련되어 있으며, 내부 이해관계자
            공유를 통해 개선사항을 반영하여 관리하고 있습니까 ?{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">G02. 비윤리적 이슈 관리</p>
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
                      기업의 경영활동 중에 발생할 수 있는 부패, 뇌물수수,
                      부정청탁 등 비윤리적 이슈관리 기준을 마련하고 이슈 발생시
                      사후조치를 통해 개선하고 그 결과를 공개하는 것을
                      의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      비윤리적 이슈를 지속적으로 관리하고 개선함으로써 전
                      직원에게 윤리적 행동을 장려할 수 있으며 기업 내부에
                      바람직한 기업 문화가 정착될 수 있습니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table17">
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
                  관리기준이 마련되어 있으며, 발생사실과 처리결과 및 개선활동을
                  공개하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_17"
                    id="box_17_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_17_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  관리기준이 마련되어 있으나, 발생사실과 처리결과 및 개선 활동을
                  공개하지는 않는다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_17"
                    id="box_17_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_17_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  관리기준이 없고 발생사실은 공개하나, 처리결과 및 개선활동에
                  대해서는 공개하지 않는다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_17"
                    id="box_17_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_17_3"></label>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="textLeft">
                  관리기준이 없고 관련사항도 공개하지 않는다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_17"
                    id="box_17_4"
                    defaultValue="4"
                  />
                  <label htmlFor="box_17_4"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            G03. 환경·사회적책임·지배구조 관련 법규준수 관리시스템(E,S,G 분야
            관리시트 등)을 갖추고 있습니까?{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">G03. 법규 준수</p>
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
                      환경, 사회, 지배구조와 관련한 법규 준수를 위한
                      관리시스템을 구축하는 것을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      ESG 관련 법규 준수 관리에 소홀하여 위반사항이 발생할 경우
                      처벌 및 제재,생산성 하락 등 경영 상의 직접적인 손해가
                      발생할 수 있으며 기업의 이미지 및 명성에 대한 부적적인
                      영향으로 간접적인 피해까지 야기될 수 있습니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table18">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">있다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_18"
                    id="box_18_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_18_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">없다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_18"
                    id="box_18_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_18_2"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="q_top">
          <div className="color_title">
            <span>ESG정책</span>
          </div>
        </div>

        <div className="diagnosis_subTitle">
          <span>G04. 기업의 비재무 성과를 공개하고 있습니까 ? </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">G04. 정보공개</p>
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
                      기업을 둘러싼 다양한 이해관계자에게 지속가능경영에 대한
                      기업의 주요 활동 및 성과에 대한 정보를 공개하여
                      경영투명성을 제고하는 행위를 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      2025년부터는 자산 2조원 이상 코스피 상장사, 2030년부터는
                      전체 코스피상장사가 지속가능경영보고서를 공시해야 합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table19">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">있다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_19"
                    id="box_19_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_19_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">없다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_19"
                    id="box_19_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_19_2"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            G05. ESG 경영을 위한 교육 및 연수 활동을 내부직원을 대상으로
            추진하고 있습니까 ?{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">G05. 인적자원</p>
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
                      ESG 경영을 수행하기 위하여 내부직원을 대상으로 ESG 교육 및
                      연수 활동을 추진하여 ESG에 대한 인식을 제고하는 것을
                      의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      최근 ESG에 대한 실천요구가 중소·중견기업까지 확대되고 있는
                      상황에서직원들은 ESG 교육 및 연수를 통해 ESG에 대한
                      이해도를 높이고 실질적인 대응방안을 마련할 수 있습니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table20">
          <table>
            <tbody>
              <tr>
                <th>NO</th>
                <th>내용</th>
                <th>선택</th>
              </tr>

              <tr>
                <td>1</td>
                <td className="textLeft">있다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_20"
                    id="box_20_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_20_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">없다.</td>
                <td>
                  <input
                    type="radio"
                    name="questionno_20"
                    id="box_20_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_20_2"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            G06. 귀사가 지속가능을 실행하기 위해 보유한 인증을 체크하십시오.{" "}
            <font color="#39a689">(복수 선택 가능)</font>
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">
                  G06. 지속가능을 위한 인증 보유
                </p>
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
                      기업이 환경, 사회, 윤리 및 안전보건 문제와 관련하여 조직
                      또는 제품 및 서비스의 지속가능 성과를 입증하기 위해
                      자발적으로 제3자 독립기관에 받는 인증을 의미합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      지속가능경영 인증을 보유할 경우 지자체별로 인증 비용을
                      지원해주고 조달청우수제품선정 시 가산점, 금융기관 기술평가
                      및 신용보증기금 신용평가 시 가산점 등의 혜택을 받을 수
                      있습니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table21">
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
                  지속가능경영 :{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="A1"
                      id="questionno_21_sub_A1"
                      className="questionno_21_subA"
                      disabled="disabled"
                    />{" "}
                    ISO 50001(에너지)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="A2"
                      id="questionno_21_sub_A2"
                      className="questionno_21_subA"
                      disabled="disabled"
                    />
                    ISO 20121(이벤트)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="A3"
                      id="questionno_21_sub_A3"
                      className="questionno_21_subA"
                      disabled="disabled"
                    />
                    ISO/TS 14067(탄소발자국)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="A4"
                      id="questionno_21_sub_A4"
                      className="questionno_21_subA"
                      disabled="disabled"
                    />
                    ISO37001(반부패)
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="questionno_21_1"
                    id="box_21_1"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_21_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  환경보존 :{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="B1"
                      id="questionno_21_sub_B1"
                      className="questionno_21_subB"
                    />
                    ISO 14001(환경)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="B2"
                      id="questionno_21_sub_B2"
                      className="questionno_21_subB"
                    />
                    ISO 14004(환경 사용지침)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="B3"
                      id="questionno_21_sub_B3"
                      className="questionno_21_subB"
                    />
                    ISO 14040(전 과정평가)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="B4"
                      id="questionno_21_sub_B4"
                      className="questionno_21_subB"
                    />
                    ISO 14064(온실가스검증)
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="questionno_21_2"
                    id="box_21_2"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_21_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  사회적책임 :{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="C1"
                      id="questionno_21_sub_C1"
                      className="questionno_21_subC"
                      disabled="disabled"
                    />
                    OHSAS 18001(안전보건)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="C2"
                      id="questionno_21_sub_C2"
                      className="questionno_21_subC"
                      disabled="disabled"
                    />
                    SA 8000(윤리사회책임)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="C3"
                      id="questionno_21_sub_C3"
                      className="questionno_21_subC"
                      disabled="disabled"
                    />
                    ISO 26000(사회적책임)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="C4"
                      id="questionno_21_sub_C4"
                      className="questionno_21_subC"
                      disabled="disabled"
                    />
                    ISO 22301(사업연속경영)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="C5"
                      id="questionno_21_sub_C5"
                      className="questionno_21_subC"
                      disabled="disabled"
                    />
                    ISO 39001(도로안전)
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="questionno_21_3"
                    id="box_21_3"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_21_3"></label>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="textLeft">
                  생산현장 :{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="D1"
                      id="questionno_21_sub_D1"
                      className="questionno_21_subD"
                    />
                    ISO 9001(품질)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="D2"
                      id="questionno_21_sub_D2"
                      className="questionno_21_subD"
                    />
                    ISO 16949(자동차)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="D3"
                      id="questionno_21_sub_D3"
                      className="questionno_21_subD"
                    />
                    ISO 20000(IT 서비스)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="D4"
                      id="questionno_21_sub_D4"
                      className="questionno_21_subD"
                    />
                    ISO 22000(식품안전)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="D5"
                      id="questionno_21_sub_D5"
                      className="questionno_21_subD"
                    />
                    ISO 27001(정보보호)
                  </label>{" "}
                  <label className="innercheckbox">
                    <input
                      type="checkbox"
                      name="questionno_21_sub"
                      defaultValue="D6"
                      id="questionno_21_sub_D6"
                      className="questionno_21_subD"
                    />
                    ISO 28001(물류보안)
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="questionno_21_4"
                    id="box_21_4"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_21_4"></label>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td className="textLeft">
                  기타 인증 :
                  <input
                    type="text"
                    name="resulttext_21"
                    id="resulttext_21"
                    defaultValue="ISO45001"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="questionno_21_5"
                    id="box_21_5"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_21_5"></label>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td className="textLeft">해당 없음</td>
                <td>
                  <input
                    type="checkbox"
                    name="questionno_21_6"
                    id="box_21_6"
                    defaultValue="Y"
                  />
                  <label htmlFor="box_21_6"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="color_title blue">
          <img src="" />

          <span>서비스업 특화지표</span>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            NG01. 귀사는 리스크를 모니터링하고, 관련 리스크를 관리하는 조직과
            절차가 마련되어 있습니까?{" "}
          </span>
          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">
                  NG01. 리스크 관리 시스템 구축
                </p>
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
                      재무, 회계, 감사 관련 부정사안, 기타 내부통제 관련 현안,
                      지적재산 보호 등을 상시적으로 점검하고, 중요한
                      의사결정사항 및 관련 정보를 보고하는 리스크 관리
                      (거버넌스) 체계가 구축되어 있는지 확인하는 것을 말합니다.{" "}
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      금융위기나 신종 바이러스 팬데믹과 같은 불확실하거나
                      예측하기 어려운 위험의 발생 가능성이 있어 체계적인 리스크
                      관리를 위한 내부통제 및 리스크 관리 체계를 마련하여 운영할
                      필요성이 있습니다.{" "}
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>
        <div className="answer_table" id="q_table42">
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
                  리스크 관리에 관한 내부통제시스템을 구축하고 전담 조직을
                  운영하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_42"
                    id="box_42_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_42_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  리스크 관리에 관한 내부통제시스템을 구축하고 있으나, 전담
                  조직은 운영하고 있지 않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_42"
                    id="box_42_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_42_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  리스크 관리에 관한 내부통제시스템 및 전담 조직을 갖추고 있지
                  않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_42"
                    id="box_42_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_42_3"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 수출기업 특화지표(베트남) */}
        <div className="diagnosis_title2">
          수출기업 특화지표 (베트남)
          <span className="essential-info">
            (모든 항목은 필수 입력 항목입니다.)
          </span>
          <div className="rightBtn" id="savebox3">
            <Link href="" className="green">
              임시저장
            </Link>
            <Link href="" className="navy">
              이전
            </Link>
            <Link href="">다음</Link>
          </div>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            CE01. 귀사의 환경 인허가 취득 여부와 관리 수준을 체크하십시오.{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">CE01. 환경 인허가 및 보고</p>
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
                      사업장에서 발생하는 오염물질이 대기, 물 등 환경과 건강에
                      미치는 영향을 종합적으로 고려하고 배출시설별로 관리하여
                      환경개선 효과를 극대화합니다.
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      제조공정에서 환경영향을 파악하고 지역사회 및 환경에 미치는
                      부정적인 영향을 최소화하면서 동시에 공공보건안전을
                      준수하는지 확인해야 합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table51">
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
                  환경 인허가 및 등록 사항을 취득·유지·관리하며, 관련 이력에
                  대해 보고 및 문서화하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_51"
                    id="box_51_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_51_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  환경 인허가 및 등록 사항을 취득·유지·관리하고 있으나, 관련
                  이력에 대해 보고 및 문서화하지 않고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_51"
                    id="box_51_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_51_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  환경 관련 인허가에 대해 취득만 하고, 유지 및 관리는 하고 있지
                  않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_51"
                    id="box_51_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_51_3"></label>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="textLeft">
                  환경 관련 인허가를 취득하고 있지 않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_51"
                    id="box_51_4"
                    defaultValue="4"
                  />
                  <label htmlFor="box_51_4"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            CS17. 귀사가 미성년자 노동자 고용과 관련하여 이행하고 있는 것을
            체크하십시오.{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">CS17. 아동노동 금지</p>
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
                      미성년자 근로자를 보호하고 아동노동자와 취약 아동이 발달
                      기회에 접근할 수 있도록 적시에 감지하고 지원하는데 중점을
                      두는 것을 말합니다.{" "}
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      국제노동기구(ILO)의 규정과 여러 국가의 법률은 아동
                      보호원칙에 따라 최소연령 이하의 아동노동을 엄금하고 있기
                      때문에 연루되지 않도록 유의해야 합니다.{" "}
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table76">
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
                  미성년 근로자 보호를 위한 회사 정책을 명확하게 표기하고,
                  지속적인 모니터링을 하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_76"
                    id="box_76_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_76_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  미성년 근로자 보호를 위한 회사 정책을 명확하게 표기하고
                  있으나, 모니터링은 하고 있지 않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_76"
                    id="box_76_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_76_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  미성년 근로자 보호를 위한 회사 정책이 없고, 모니터링도 하고
                  있지 않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_76"
                    id="box_76_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_76_3"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="diagnosis_subTitle">
          <span>
            CG09. 귀사는 반부패 등 사업 청렴성을 위한 정책을 수립하고 실행하고
            있습니까?{" "}
          </span>

          <div className="q-tooltip">지표정의</div>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">CG09. 사업 청렴성</p>
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
                      모든 형태의 뇌물수수, 부패행위, 부당이득 및 횡령을
                      허용하지 않는 무관용 정책을 표방해야 하며, 반부패 법규
                      준수를 위한 모니터링 및 집행 절차를 실행해야 하는 것을
                      의미합니다.{" "}
                    </div>
                  </li>
                  <li>
                    <p>필요성</p>
                    <div>
                      현대적 기업모형은 경제적 향상 뿐만 아니라 사회적 향상을
                      위한 책임이 있다는 사고를 반영하고 있어 기업은 경영활동에
                      있어 기업윤리를 최우선 가치로 생각하고 사회적 가치 증진에
                      노력해야합니다.{" "}
                    </div>
                  </li>
                </ul>
              </section>
              <footer className="modal-card-foot"></footer>
            </div>
          </div>
        </div>

        <div className="answer_table" id="q_table89">
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
                  사업청렴성에 관한 기준을 수립하여 문서화하고, 업무 전반에
                  적용하여 적극적인 수준으로 관리하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_89"
                    id="box_89_1"
                    defaultValue="1"
                  />
                  <label htmlFor="box_89_1"></label>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="textLeft">
                  사업쳥렴성에 관한 기준을 수립하여 문서화하고 있으나, 업무에
                  적절히 적용되고 있지 않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_89"
                    id="box_89_2"
                    defaultValue="2"
                  />
                  <label htmlFor="box_89_2"></label>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="textLeft">
                  사업청렴성에 관한 기준이 수립되어 있지 않으나, 업무 전반에
                  윤리·준법준수 노력을 반영하고 있다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_89"
                    id="box_89_3"
                    defaultValue="3"
                  />
                  <label htmlFor="box_89_3"></label>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="textLeft">
                  사업청렴성에 관한 기준도 없고, 업무에 적절히 적용되고 있지
                  않다.
                </td>
                <td>
                  <input
                    type="radio"
                    name="questionno_89"
                    id="box_89_4"
                    defaultValue="4"
                  />
                  <label htmlFor="box_89_4"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
