
import CardImgData from "./card_img_data.js"

const CardDetailPageData = {
  nexon: `<div class="sub-wrap-box card-detail-page">
                <div class="close-button-area">
                  <i
                    id="top-close-button"
                    class="fa-solid fa-circle-xmark"
                    style="color: #000"
                  ></i>
                </div>
                <!-- 카드소개페이지 컨텐트 랩 박스 -->
                <div class="contant-wrap-box">
                  <!-- 카드소개페이지 메인 영역 -->
                  <h2 class="blind">카드소개 메인영역</h2>
                  <!-- 2-1 카드소개 상단 영역 -->
                  <div class="card-detail-top-area">
                    <!-- 2-1-1. 카드소개 상단 이미지 -->
                    <div class="cont-box">
                      <div class="col-7">
                        <div class="card-detail-top-img">
                          <img
                            src="./imgs/nexoncard/nexon_main_img.png"
                            alt="네이버 상단 메인 이미지"
                          />
                        </div>
                      </div>
                      <div class="col-5 col-5-card-main">
                        <div class="card-detail-top-txt">
                          <ul>
                            <li>
                              네이버플러스 멤버십 혜택에<br />
                              네이버페이 포인트 적립받는 카드
                            </li>
                            <li>네이버 현대카드</li>
                            <li>네이버페이 멤버십 무료 이용권</li>
                            <li>네이버페이 포인트 최대 5% 적립</li>
                          </ul>
                        </div>

                        <!-- 2-1-3. 카드소개 상단 연회비박스 -->
                        <div class="card-detail-top-membership-box">
                          <p>연회비</p>
                          <ul>
                            <li>
                              <span>국내전용</span>
                              <p>본인 10,000원</p>
                            </li>
                            <li>
                              <span>VISA</span>
                              <p>본인 10,000원</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 2-1-2. 카드소개 상단 텍스트 -->
                </div>
                <!-- 카드소개페이지 하위 영역 -->
                <div class="overlay-box">
                  <!-- 카드소개페이지 1영역 -->
                  <div class="inbox card-part1">
                    <h2 class="blind">카드소개 1영역</h2>
                    <div>
                      <h1>네이버 현대카드의</h1>
                      <h1>특별한 디자인을 소개합니다.</h1>
                      <p>카드를 클릭해보세요!</p>
                    </div>
                    <div class="card-detail-grid">
                      <div class="view-card-detail card-detail1">
                        <span>Graffiti</span>
                      </div>
                      <div class="view-card-detail card-detail2">
                        <span>Line</span>
                      </div>
                      <div class="view-card-detail card-detail3">
                        <span>Type</span>
                      </div>
                      <div class="view-card-detail card-detail4">
                        <span>Joy</span>
                      </div>
                      <div class="view-card-detail card-detail5">
                        <span>Tube</span>
                      </div>
                      <div class="view-card-detail card-detail6">
                        <span>Core</span>
                      </div>
                    </div>
                    <!-- 선택카드 디테일 팝업페이지 -->
                    <div class="inbox select-card-popup mySwiper">
                      <i
                        id="close-button"
                        class="fa-solid fa-circle-xmark"
                        style="color: #dfdfdf"
                      ></i>
                      <div class="swiper-wrapper">
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                        <div class="swiper-slide">Slide 4</div>
                        <div class="swiper-slide">Slide 5</div>
                        <div class="swiper-slide">Slide 6</div>
                      </div>
                      <div class="swiper-button-next"></div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-pagination"></div>
                    </div>
                  </div>
                  <!-- 카드소개페이지 2영역 -->
                  <div class="inbox card-part2">
                    <h2 class="blind">카드소개 2영역</h2>
                    <div class="card-part2-txt">
                      <p>네이버 특화 혜택</p>
                      <p>
                        네이버 플러스 맴버십<br />
                        무료 이용권 매월 지급
                      </p>
                      <a href="#"
                        >자세히보기
                        <i class="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                    <div class="card-part2-naver-logo">
                      <img
                        src="./imgs/navercard/img_naver.png"
                        alt="네이버 로고"
                      />
                    </div>
                    <div class="naver-membership-box">
                      <div class="box box-green">
                        <i
                          id="show-membership-detail"
                          class="fa-solid fa-circle-plus"
                          style="color: #cacaca"
                        ></i>
                        <p>네이버 특화 혜택</p>
                        <p>네이버 플러스 멤버십</p>
                        <p>대상 가맹점 최대 5%</p>
                        <p>네이버 페이 포인트 적립</p>
                      </div>
                      <div class="box box-gray">
                        <p>그 외 가맹점</p>
                        <p>적립·한도 제한없이</p>
                        <p>1% 네이버페이</p>
                        <p>포인트 적립</p>
                      </div>
                    </div>
                    <div class="naver-membership-detail">
                      <div class="memebrship-contant-box">
                        <i
                          id="close-membershipbox-button"
                          class="fa-solid fa-circle-xmark"
                          style="color: #000"
                        ></i>
                        <h2>네이버페이 포인트 적립</h2>
                        <section class="table-box">
                          <h2>네이버페이 포인트 최대 5% 적립</h2>
                          <table>
                            <caption>
                              네이버페이 포인트 적립 - 구분 ,적립률 ,적립한도
                              항목으로 구성된 표 입니다.
                            </caption>
                            <colgroup>
                              <col width="30%" />
                              <col width="30%" />
                              <col width="20%" />
                              <col width="20%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th class="alC" colspan="2">구분</th>
                                <th class="alC">적립률</th>
                                <th class="alC">적립한도</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="alC alM" rowspan="2">
                                  네이버플러스 멤버십<br />적립 대상<br />(<span
                                    class="logo_npayplus"
                                  ></span
                                  >)
                                </td>
                                <td class="alC">네이버플러스 멤버십 회원</td>
                                <td class="alC">5%</td>
                                <td class="alC alM" rowspan="2">
                                  월 이용금액<br />20만원 한도
                                </td>
                              </tr>
                              <tr>
                                <td class="alC">네이버플러스 멤버십 비회원</td>
                                <td class="alC">1%</td>
                              </tr>
                              <tr>
                                <td class="alC">그 외 가맹점</td>
                                <td class="alC">-</td>
                                <td class="alC">1%</td>
                                <td class="alC">제한 없음</td>
                              </tr>
                            </tbody>
                          </table>
                          <li>
                            네이버플러스 멤버십 회원이 네이버플러스 멤버십 적립
                            대상에서 결제 시 네이버페이 포인트 최대 5% 적립
                          </li>
                          <ul class="dash_list">
                            <li>
                              네이버플러스 멤버십 회원이 네이버플러스 멤버십
                              적립 대상에서 결제 시 네이버페이 포인트 최대 5%
                              적립
                            </li>
                            <li>
                              네이버플러스 멤버십 적립 대상이란, 네이버를 통해
                              네이버페이로 결제한 상품서비스 중 결제하기
                              페이지에 네이버플러스 멤버십 적립 대상 아이콘이
                              있는 주문건을 말함
                              <ul class="bul_list">
                                <li>
                                  단,상품을 결제하더라도
                                  유가증권(상품권,기프티콘 등)이거나 무이자 할부
                                  이용 건 등은 적립 불가(적립 제외 대상은 아래
                                  유의사항에서 확인 가능)
                                </li>
                                <li class="fw_bold">
                                  월 적립 한도 초과 후 혜택 적용된 결제 건을
                                  취소할 경우, 한도 초과로 혜택이 적용되지 않은
                                  이전 결제 건에 대해 다음 달 15일경 혜택
                                  적용(월 적립 한도 이내)
                                </li>
                                <!-- 2024-10-15 Q11139 수정 -->
                                <li class="fw_bold">
                                  네이버플러스 멤버십 비회원이 네이버플러스
                                  멤버십 적립 대상 결제 시 1% 적립 혜택이
                                  적용되는 승인 건도 월 이용금액 20만원
                                  적립한도가 적용됨
                                </li>
                              </ul>
                            </li>
                            <li>
                              네이버플러스 멤버십 적립 대상 외 국내외 가맹점에서
                              결제 시 1% 적립
                              <ul class="bul_list">
                                <li>적립한도 제한 없음</li>
                              </ul>
                            </li>
                          </ul>
                        </section>
                        <div class="box_bg_gray">
                          <div class="card_bundle">
                            <div class="box_title">
                              <p>유의사항</p>
                            </div>
                            <ul class="dash_list">
                              <li class="fw_bold">
                                전월 이용금액 30만원 미만 시 다음 달 혜택 미제공
                              </li>
                              <li>
                                최초 신규 발급 시 발급월 기준 다음 달 이용
                                건까지는 전월 이용금액 30만원 미만도 혜택 제공
                              </li>
                              <li>
                                전월 이용금액 산정 기준은 '적립서비스 제공 기준'
                                참고
                              </li>
                              <li class="fw_bold">
                                5% 적립 혜택은 네이버플러스 멤버십 회원에 한해
                                제공
                                <ul class="bul_list">
                                  <li class="fw_bold">
                                    비회원인 경우 네이버플러스 멤버십 적립 대상
                                    상품 결제 시 1% 적립
                                  </li>
                                  <li class="fw_bold">
                                    멤버십 해지 시 해지일 기준 다음 날 승인
                                    건부터는 네이버플러스 멤버십 적립 대상 상품
                                    구매 시에도 1% 적립률 적용
                                  </li>
                                </ul>
                              </li>
                              <li class="fw_bold">
                                아래의 경우, 네이버플러스 멤버십 적립 대상이어도
                                그 외 가맹점으로 분류되어 1% 적립률 적용
                                <ul class="bul_list">
                                  <li class="fw_bold">
                                    네이버를 통해 네이버 외 쇼핑몰에 접속 후
                                    25시간이 경과한 경우
                                  </li>
                                  <li class="fw_bold">
                                    주문서 작성 후 해당 페이지에서 25시간 경과
                                    후 결제하는 경우
                                  </li>
                                </ul>
                              </li>
                              <li class="fw_bold">
                                네이버플러스 멤버십 적립 대상 분류는 제휴사
                                기준에 따름
                              </li>
                              <li>
                                네이버페이 포인트는 영업일 기준 다음 달 15일에
                                적립
                              </li>
                              <li class="fw_bold">
                                현대카드의 모든 할인서비스를 이용한 금액(할인
                                적용된 매출 총 금액) 및 무이자할부 이용 금액은
                                적립 혜택 제외
                              </li>
                              <li class="fw_bold">
                                국제브랜드 수수료 및 해외서비스 수수료는 전월
                                이용금액에 포함되지 않음
                              </li>
                              <li class="fw_bold">
                                해외 가맹점 이용 시 별도의 수수료가 부과되니,
                                국제브랜드 수수료 관련 자세한 내용은 ‘카드 이용
                                유의사항’ 참고
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 카드소개페이지 3영역 -->
                  <div class="inbox card-part3">
                    <h2 class="blind">카드소개 3영역</h2>
                    <div class="card-part3-applepay-logo">
                      <img src="./imgs/applepay/img_applepay_10.png" alt="" />
                    </div>
                    <div class="card-part3-txt1">
                      <p>해외여행 필수템, Apple Pay 하나로 끝.</p>
                      <p>간편한 컨택리스, 대중교통 결제,</p>
                      <p>탑승권과 멤버십까지 모두 지갑 앱으로</p>
                      <p>해당 상품은 Apple Pay 이용이 가능합니다.</p>
                    </div>
                    <div class="card-part3-3rd-logo">
                      <img
                        src="./imgs/card_detail_img/3층로고.jpg"
                        alt="3층로고"
                      />
                    </div>
                    <div class="card-part3-txt2">
                      <p>
                        해당 상품은 현대카드 3층 시스템이 탑재된 카드입니다.
                      </p>
                      <p>아직도 카드의 기본 혜택만 받고 계신가요?</p>
                      <p>
                        이제 3층 시스템을 통해 원하는 혜택 패키지를 구독하고,
                      </p>
                      <p>나에게 꼭 맞춘 무료 혜택을 선물 받아보세요!</p>
                    </div>
                  </div>

                  <!-- 카드소개페이지 4영역 -->
                  <div class="inbox card-part4">
                    <h2 class="blind">카드소개 4영역</h2>
                    <p>이용안내</p>

                    <div class="card-part4-list">
                      <ul>
                        <li>
                          모든 가맹점은 현대카드 가맹점 등록 및 업종 분류
                          기준입니다.
                        </li>
                        <li>당사는 상품설명서의 내용을 준수합니다.</li>
                        <li>
                          동일 기간 내 다수의 신용카드를 신청할 경우 개인
                          신용등급 또는 개인신용평점, 이용한도 등에 영향을 미칠
                          수 있습니다.
                        </li>
                        <li>
                          카드 이용 시 제공되는 포인트 및 할인 혜택 등의
                          부가서비스는 카드 신규 출시(2021년 5월 24일) 이후 3년
                          이상 축소·폐지 없이 유지됩니다.상기에도 불구하고
                          다음과 같은 사유가 발생한 경우 카드사는 부가서비스를
                          변경할 수 있습니다.
                          <ul class="ul-ul">
                            <li>
                              카드사의 휴업·파산·경영상의 위기 등에 따른
                              불가피한 경우
                            </li>
                            <li>
                              제휴업체의 휴업·파산·경영상의 위기로 인해
                              불가피하게 부가서비스를 축소·변경하는 경우로서
                              다른 제휴업체를 통해 동종의 유사한 부가서비스
                              제공이 불가한 경우
                            </li>
                            <li>
                              제휴업체가 카드사의 의사에 반하여 해당
                              부가서비스를 축소하거나 변경 시, 당초 부가서비스에
                              상응하는 다른 부가서비스를 제공하는 경우
                            </li>
                            <li>
                              부가서비스를 3년 이상 제공한 상태에서 해당
                              부가서비스로 인해 상품의 수익성이 현저히 낮아진
                              경우
                            </li>
                          </ul>
                        </li>
                        <li>
                          카드사가 부가서비스를 변경하는 경우에는 부가서비스
                          변경 사유, 변경 내용 등 사유 발생 즉시 홈페이지에
                          게시하고 개별 고지 방법 중 2가지 이상의 방법으로
                          고지하여 드립니다. 특히 카드 신규 출시 이후 3년 이상
                          경과했고, 해당 카드의 수익성 유지가 어려워져
                          부가서비스를 변경하는 경우에는 변경일 6개월 전부터
                          2가지 이상의 방법으로 매월 개별 고지해 드립니다.
                        </li>
                        <li>
                          개별 고지 방법 : 서면 교부, 우편 또는 이메일, 전화
                          또는 팩스, 휴대폰 메시지 또는 이에 준하는 전자적
                          의사표시
                        </li>
                        <li>
                          본 내용은 2024년 10월 기준이며, 자세한 내용은 현대카드
                          고객센터(1577-6000)로 문의하시기 바랍니다.
                        </li>
                        <li>연회비는 카드 발급 시 선청구됩니다.</li>
                        <li>
                          카드 연회비(기본연회비 + 제휴연회비)는 보유 카드별로
                          청구됩니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 카드소개페이지 5영역 -->
                  <div class="inbox card-part5">
                    <h2 class="blind">카드소개 5영역</h2>
                    <div class="card-part5-list">
                      <ul>
                        <li>
                          카드 이용대금 연체 시 약정금리 + 연체가산금리 3%의
                          연체금리가 적용(회원별, 이용 상품별 차등 적용/법정
                          최고금리 20% 이내)단, 연체 발생시점에 약정금리가 없는
                          경우 아래와 같이 적용
                          <ul class="ul-ul">
                            <li>
                              일시불 : 거래 발생시점 기준 최소 기간(2개월)의
                              유이자할부 약정금리 + 연체가산금리 3%
                            </li>
                            <li>
                              무이자할부 : 거래 발생시점 기준 동일한 할부 계약
                              기간의 유이자할부 약정금리 + 연체가산금리 3%
                            </li>
                          </ul>
                        </li>
                        <li>
                          상환 능력에 비해 신용카드 이용금액이 과도할 경우,
                          귀하의 개인신용평점이 하락할 수 있습니다.
                        </li>
                        <li>
                          개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할
                          수 있습니다.
                        </li>
                        <li>
                          일정 기간 원리금을 연체할 경우, 모든 원리금을 변제할
                          의무가 발생할 수 있습니다.
                        </li>
                        <li>
                          신용카드 발급이 부적정한 경우(연체금 보유,
                          개인신용평점 낮음 등) 카드 발급이 제한될 수 있습니다.
                        </li>
                        <li>
                          카드 이용대금과 이에 수반되는 모든 수수료를 지정된
                          대금 결제일에 상환합니다.
                        </li>
                        <li>
                          금융소비자는 금융소비자보호법 제19조 제1항에 따라 해당
                          상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.
                        </li>
                        <li>
                          자세한 내용 및 이용 조건은 카드 신청 전 현대카드
                          홈페이지 및 상품설명서, 약관 참고
                        </li>
                        <li>
                          준법감시심의필 제 241008-004호 (2024.10.08 ~
                          2025.10.07)
                        </li>
                        <li>
                          여신금융협회 심의필 제 2024-C1h-06739호 (2024.06.12 ~
                          2025.06.11)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>`,

  naver: `
    <div class="sub-wrap-box card-detail-page">
        <div class="close-button-area">
          <i
            id="top-close-button"
            class="fa-solid fa-circle-xmark"
            style="color: #000"
          ></i>
        </div>
        <!-- 카드소개페이지 컨텐트 랩 박스 -->
        <div class="contant-wrap-box">
          <!-- 카드소개페이지 메인 영역 -->
          <h2 class="blind">카드소개 메인영역</h2>
          <!-- 2-1 카드소개 상단 영역 -->
          <div class="card-detail-top-area">
            <!-- 2-1-1. 카드소개 상단 이미지 -->
            <div class="cont-box">
              <div class="col-7">
                <div class="card-detail-top-img">
                  <img
                    src="./imgs/navercard/naver_main_img.png"
                    alt="네이버 상단 메인 이미지"
                  />
                </div>
              </div>
              <div class="col-5 col-5-card-main">
                <div class="card-detail-top-txt">
                  <ul>
                    <li>
                      네이버플러스 멤버십 혜택에<br />
                      네이버페이 포인트 적립받는 카드
                    </li>
                    <li>네이버 현대카드</li>
                    <li>네이버페이 멤버십 무료 이용권</li>
                    <li>네이버페이 포인트 최대 5% 적립</li>
                  </ul>
                </div>

                <!-- 2-1-3. 카드소개 상단 연회비박스 -->
                <div class="card-detail-top-membership-box">
                  <p>연회비</p>
                  <ul>
                    <li>
                      <span>국내전용</span>
                      <p>본인 10,000원</p>
                    </li>
                    <li>
                      <span>VISA</span>
                      <p>본인 10,000원</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 2-1-2. 카드소개 상단 텍스트 -->
        </div>
        <!-- 카드소개페이지 하위 영역 -->
        <div class="overlay-box">
          <!-- 카드소개페이지 1영역 -->
          <div class="inbox card-part1">
            <h2 class="blind">카드소개 1영역</h2>
            <div>
              <h1>네이버 현대카드의</h1>
              <h1>특별한 디자인을 소개합니다.</h1>
              <p>카드를 클릭해보세요!</p>
            </div>
            <div class="card-detail-grid">
              <div class="view-card-detail card-detail1">
                <span>Graffiti</span>
              </div>
              <div class="view-card-detail card-detail2">
                <span>Line</span>
              </div>
              <div class="view-card-detail card-detail3">
                <span>Type</span>
              </div>
              <div class="view-card-detail card-detail4">
                <span>Joy</span>
              </div>
              <div class="view-card-detail card-detail5">
                <span>Tube</span>
              </div>
              <div class="view-card-detail card-detail6">
                <span>Core</span>
              </div>
            </div>
            <!-- 선택카드 디테일 팝업페이지 -->
            <div class="inbox select-card-popup mySwiper">
              <i
                id="close-button"
                class="fa-solid fa-circle-xmark"
                style="color: #dfdfdf"
              ></i>
              <div class="swiper-wrapper">
                <div class="swiper-slide"></div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <!-- 카드소개페이지 2영역 -->
          <div class="inbox card-part2">
            <h2 class="blind">카드소개 2영역</h2>
            <div class="card-part2-txt">
              <p>네이버 특화 혜택</p>
              <p>
                네이버 플러스 맴버십<br />
                무료 이용권 매월 지급
              </p>
              <a href="#"
                >자세히보기
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div class="card-part2-naver-logo">
              <img
                src="./imgs/navercard/img_naver.png"
                alt="네이버 로고"
              />
            </div>
            <div class="naver-membership-box">
              <div class="box box-green">
                <i
                  id="show-membership-detail"
                  class="fa-solid fa-circle-plus"
                  style="color: #cacaca"
                ></i>
                <p>네이버 특화 혜택</p>
                <p>네이버 플러스 멤버십</p>
                <p>대상 가맹점 최대 5%</p>
                <p>네이버 페이 포인트 적립</p>
              </div>
              <div class="box box-gray">
                <p>그 외 가맹점</p>
                <p>적립·한도 제한없이</p>
                <p>1% 네이버페이</p>
                <p>포인트 적립</p>
              </div>
            </div>
            <div class="naver-membership-detail">
              <div class="memebrship-contant-box">
                <i
                  id="close-membershipbox-button"
                  class="fa-solid fa-circle-xmark"
                  style="color: #000"
                ></i>
                <h2>네이버페이 포인트 적립</h2>
                <section class="table-box">
                  <h2>네이버페이 포인트 최대 5% 적립</h2>
                  <table>
                    <caption>
                      네이버페이 포인트 적립 - 구분 ,적립률 ,적립한도
                      항목으로 구성된 표 입니다.
                    </caption>
                    <colgroup>
                      <col width="30%" />
                      <col width="30%" />
                      <col width="20%" />
                      <col width="20%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="alC" colspan="2">구분</th>
                        <th class="alC">적립률</th>
                        <th class="alC">적립한도</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="alC alM" rowspan="2">
                          네이버플러스 멤버십<br />적립 대상<br />(<span
                            class="logo_npayplus"
                          ></span
                          >)
                        </td>
                        <td class="alC">네이버플러스 멤버십 회원</td>
                        <td class="alC">5%</td>
                        <td class="alC alM" rowspan="2">
                          월 이용금액<br />20만원 한도
                        </td>
                      </tr>
                      <tr>
                        <td class="alC">네이버플러스 멤버십 비회원</td>
                        <td class="alC">1%</td>
                      </tr>
                      <tr>
                        <td class="alC">그 외 가맹점</td>
                        <td class="alC">-</td>
                        <td class="alC">1%</td>
                        <td class="alC">제한 없음</td>
                      </tr>
                    </tbody>
                  </table>
                  <li>
                    네이버플러스 멤버십 회원이 네이버플러스 멤버십 적립
                    대상에서 결제 시 네이버페이 포인트 최대 5% 적립
                  </li>
                  <ul class="dash_list">
                    <li>
                      네이버플러스 멤버십 회원이 네이버플러스 멤버십
                      적립 대상에서 결제 시 네이버페이 포인트 최대 5%
                      적립
                    </li>
                    <li>
                      네이버플러스 멤버십 적립 대상이란, 네이버를 통해
                      네이버페이로 결제한 상품서비스 중 결제하기
                      페이지에 네이버플러스 멤버십 적립 대상 아이콘이
                      있는 주문건을 말함
                      <ul class="bul_list">
                        <li>
                          단,상품을 결제하더라도
                          유가증권(상품권,기프티콘 등)이거나 무이자 할부
                          이용 건 등은 적립 불가(적립 제외 대상은 아래
                          유의사항에서 확인 가능)
                        </li>
                        <li class="fw_bold">
                          월 적립 한도 초과 후 혜택 적용된 결제 건을
                          취소할 경우, 한도 초과로 혜택이 적용되지 않은
                          이전 결제 건에 대해 다음 달 15일경 혜택
                          적용(월 적립 한도 이내)
                        </li>
                        <!-- 2024-10-15 Q11139 수정 -->
                        <li class="fw_bold">
                          네이버플러스 멤버십 비회원이 네이버플러스
                          멤버십 적립 대상 결제 시 1% 적립 혜택이
                          적용되는 승인 건도 월 이용금액 20만원
                          적립한도가 적용됨
                        </li>
                      </ul>
                    </li>
                    <li>
                      네이버플러스 멤버십 적립 대상 외 국내외 가맹점에서
                      결제 시 1% 적립
                      <ul class="bul_list">
                        <li>적립한도 제한 없음</li>
                      </ul>
                    </li>
                  </ul>
                </section>
                <div class="box_bg_gray">
                  <div class="card_bundle">
                    <div class="box_title">
                      <p>유의사항</p>
                    </div>
                    <ul class="dash_list">
                      <li class="fw_bold">
                        전월 이용금액 30만원 미만 시 다음 달 혜택 미제공
                      </li>
                      <li>
                        최초 신규 발급 시 발급월 기준 다음 달 이용
                        건까지는 전월 이용금액 30만원 미만도 혜택 제공
                      </li>
                      <li>
                        전월 이용금액 산정 기준은 '적립서비스 제공 기준'
                        참고
                      </li>
                      <li class="fw_bold">
                        5% 적립 혜택은 네이버플러스 멤버십 회원에 한해
                        제공
                        <ul class="bul_list">
                          <li class="fw_bold">
                            비회원인 경우 네이버플러스 멤버십 적립 대상
                            상품 결제 시 1% 적립
                          </li>
                          <li class="fw_bold">
                            멤버십 해지 시 해지일 기준 다음 날 승인
                            건부터는 네이버플러스 멤버십 적립 대상 상품
                            구매 시에도 1% 적립률 적용
                          </li>
                        </ul>
                      </li>
                      <li class="fw_bold">
                        아래의 경우, 네이버플러스 멤버십 적립 대상이어도
                        그 외 가맹점으로 분류되어 1% 적립률 적용
                        <ul class="bul_list">
                          <li class="fw_bold">
                            네이버를 통해 네이버 외 쇼핑몰에 접속 후
                            25시간이 경과한 경우
                          </li>
                          <li class="fw_bold">
                            주문서 작성 후 해당 페이지에서 25시간 경과
                            후 결제하는 경우
                          </li>
                        </ul>
                      </li>
                      <li class="fw_bold">
                        네이버플러스 멤버십 적립 대상 분류는 제휴사
                        기준에 따름
                      </li>
                      <li>
                        네이버페이 포인트는 영업일 기준 다음 달 15일에
                        적립
                      </li>
                      <li class="fw_bold">
                        현대카드의 모든 할인서비스를 이용한 금액(할인
                        적용된 매출 총 금액) 및 무이자할부 이용 금액은
                        적립 혜택 제외
                      </li>
                      <li class="fw_bold">
                        국제브랜드 수수료 및 해외서비스 수수료는 전월
                        이용금액에 포함되지 않음
                      </li>
                      <li class="fw_bold">
                        해외 가맹점 이용 시 별도의 수수료가 부과되니,
                        국제브랜드 수수료 관련 자세한 내용은 ‘카드 이용
                        유의사항’ 참고
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 카드소개페이지 3영역 -->
          <div class="inbox card-part3">
            <h2 class="blind">카드소개 3영역</h2>
            <div class="card-part3-applepay-logo">
              <img src="./imgs/applepay/img_applepay_10.png" alt="" />
            </div>
            <div class="card-part3-txt1">
              <p>해외여행 필수템, Apple Pay 하나로 끝.</p>
              <p>간편한 컨택리스, 대중교통 결제,</p>
              <p>탑승권과 멤버십까지 모두 지갑 앱으로</p>
              <p>해당 상품은 Apple Pay 이용이 가능합니다.</p>
            </div>
            <div class="card-part3-3rd-logo">
              <img
                src="./imgs/card_detail_img/3층로고.jpg"
                alt="3층로고"
              />
            </div>
            <div class="card-part3-txt2">
              <p>
                해당 상품은 현대카드 3층 시스템이 탑재된 카드입니다.
              </p>
              <p>아직도 카드의 기본 혜택만 받고 계신가요?</p>
              <p>
                이제 3층 시스템을 통해 원하는 혜택 패키지를 구독하고,
              </p>
              <p>나에게 꼭 맞춘 무료 혜택을 선물 받아보세요!</p>
            </div>
          </div>

          <!-- 카드소개페이지 4영역 -->
          <div class="inbox card-part4">
            <h2 class="blind">카드소개 4영역</h2>
            <p>이용안내</p>

            <div class="card-part4-list">
              <ul>
                <li>
                  모든 가맹점은 현대카드 가맹점 등록 및 업종 분류
                  기준입니다.
                </li>
                <li>당사는 상품설명서의 내용을 준수합니다.</li>
                <li>
                  동일 기간 내 다수의 신용카드를 신청할 경우 개인
                  신용등급 또는 개인신용평점, 이용한도 등에 영향을 미칠
                  수 있습니다.
                </li>
                <li>
                  카드 이용 시 제공되는 포인트 및 할인 혜택 등의
                  부가서비스는 카드 신규 출시(2021년 5월 24일) 이후 3년
                  이상 축소·폐지 없이 유지됩니다.상기에도 불구하고
                  다음과 같은 사유가 발생한 경우 카드사는 부가서비스를
                  변경할 수 있습니다.
                  <ul class="ul-ul">
                    <li>
                      카드사의 휴업·파산·경영상의 위기 등에 따른
                      불가피한 경우
                    </li>
                    <li>
                      제휴업체의 휴업·파산·경영상의 위기로 인해
                      불가피하게 부가서비스를 축소·변경하는 경우로서
                      다른 제휴업체를 통해 동종의 유사한 부가서비스
                      제공이 불가한 경우
                    </li>
                    <li>
                      제휴업체가 카드사의 의사에 반하여 해당
                      부가서비스를 축소하거나 변경 시, 당초 부가서비스에
                      상응하는 다른 부가서비스를 제공하는 경우
                    </li>
                    <li>
                      부가서비스를 3년 이상 제공한 상태에서 해당
                      부가서비스로 인해 상품의 수익성이 현저히 낮아진
                      경우
                    </li>
                  </ul>
                </li>
                <li>
                  카드사가 부가서비스를 변경하는 경우에는 부가서비스
                  변경 사유, 변경 내용 등 사유 발생 즉시 홈페이지에
                  게시하고 개별 고지 방법 중 2가지 이상의 방법으로
                  고지하여 드립니다. 특히 카드 신규 출시 이후 3년 이상
                  경과했고, 해당 카드의 수익성 유지가 어려워져
                  부가서비스를 변경하는 경우에는 변경일 6개월 전부터
                  2가지 이상의 방법으로 매월 개별 고지해 드립니다.
                </li>
                <li>
                  개별 고지 방법 : 서면 교부, 우편 또는 이메일, 전화
                  또는 팩스, 휴대폰 메시지 또는 이에 준하는 전자적
                  의사표시
                </li>
                <li>
                  본 내용은 2024년 10월 기준이며, 자세한 내용은 현대카드
                  고객센터(1577-6000)로 문의하시기 바랍니다.
                </li>
                <li>연회비는 카드 발급 시 선청구됩니다.</li>
                <li>
                  카드 연회비(기본연회비 + 제휴연회비)는 보유 카드별로
                  청구됩니다.
                </li>
              </ul>
            </div>
          </div>
          <!-- 카드소개페이지 5영역 -->
          <div class="inbox card-part5">
            <h2 class="blind">카드소개 5영역</h2>
            <div class="card-part5-list">
              <ul>
                <li>
                  카드 이용대금 연체 시 약정금리 + 연체가산금리 3%의
                  연체금리가 적용(회원별, 이용 상품별 차등 적용/법정
                  최고금리 20% 이내)단, 연체 발생시점에 약정금리가 없는
                  경우 아래와 같이 적용
                  <ul class="ul-ul">
                    <li>
                      일시불 : 거래 발생시점 기준 최소 기간(2개월)의
                      유이자할부 약정금리 + 연체가산금리 3%
                    </li>
                    <li>
                      무이자할부 : 거래 발생시점 기준 동일한 할부 계약
                      기간의 유이자할부 약정금리 + 연체가산금리 3%
                    </li>
                  </ul>
                </li>
                <li>
                  상환 능력에 비해 신용카드 이용금액이 과도할 경우,
                  귀하의 개인신용평점이 하락할 수 있습니다.
                </li>
                <li>
                  개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할
                  수 있습니다.
                </li>
                <li>
                  일정 기간 원리금을 연체할 경우, 모든 원리금을 변제할
                  의무가 발생할 수 있습니다.
                </li>
                <li>
                  신용카드 발급이 부적정한 경우(연체금 보유,
                  개인신용평점 낮음 등) 카드 발급이 제한될 수 있습니다.
                </li>
                <li>
                  카드 이용대금과 이에 수반되는 모든 수수료를 지정된
                  대금 결제일에 상환합니다.
                </li>
                <li>
                  금융소비자는 금융소비자보호법 제19조 제1항에 따라 해당
                  상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.
                </li>
                <li>
                  자세한 내용 및 이용 조건은 카드 신청 전 현대카드
                  홈페이지 및 상품설명서, 약관 참고
                </li>
                <li>
                  준법감시심의필 제 241008-004호 (2024.10.08 ~
                  2025.10.07)
                </li>
                <li>
                  여신금융협회 심의필 제 2024-C1h-06739호 (2024.06.12 ~
                  2025.06.11)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`,

  musinsa: `<div class="sub-wrap-box card-detail-page">
                <div class="close-button-area">
                  <i
                    id="top-close-button"
                    class="fa-solid fa-circle-xmark"
                    style="color: #000"
                  ></i>
                </div>
                <!-- 카드소개페이지 컨텐트 랩 박스 -->
                <div class="contant-wrap-box">
                  <!-- 카드소개페이지 메인 영역 -->
                  <h2 class="blind">카드소개 메인영역</h2>
                  <!-- 2-1 카드소개 상단 영역 -->
                  <div class="card-detail-top-area">
                    <!-- 2-1-1. 카드소개 상단 이미지 -->
                    <div class="cont-box">
                      <div class="col-7">
                        <div class="card-detail-top-img">
                          <img
                            src="./imgs/musinsacard/musinsa_main_img.png"
                            alt="무신사 상단 메인 이미지"
                          />
                        </div>
                      </div>
                      <div class="col-5 col-5-card-main">
                        <div class="card-detail-top-txt">
                          <ul>
                            <li>
                              무신사 할인에 무신사 적립금 받는 카드
                              
                            </li>
                            <li>무신사 현대카드</li>
                            <li>무신사·솔드아웃 5% 할인</li>
                            <li>그 외 가맹점 한도 없이 1% 적립</li>
                          </ul>
                        </div>

                        <!-- 2-1-3. 카드소개 상단 연회비박스 -->
                        <div class="card-detail-top-membership-box">
                          <p>연회비</p>
                          <ul>
                            <li>
                              <span>국내전용</span>
                              <p>본인 10,000원</p>
                            </li>
                            <li>
                              <span>VISA</span>
                              <p>본인 10,000원</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 2-1-2. 카드소개 상단 텍스트 -->
                </div>
                <!-- 카드소개페이지 하위 영역 -->
                <div class="overlay-box">
                  <!-- 카드소개페이지 1영역 -->
                  <div class="inbox card-part1">
                    <h2 class="blind">카드소개 1영역</h2>
                    <div>
                      <h1>무신사 현대카드의</h1>
                      <h1>특별한 디자인을 소개합니다.</h1>
                      <p>카드를 클릭해보세요!</p>
                    </div>
                    <div class="card-detail-grid">
                      <div class="view-card-detail card-detail1">
                        <span>무신사 박스</span>
                      </div>
                      <div class="view-card-detail card-detail2">
                        <span>솔드아웃</span>
                      </div>
                      <div class="view-card-detail card-detail3">
                        <span>데님</span>
                      </div>
                      <div class="view-card-detail card-detail4">
                        <span>케어라벨</span>
                      </div>
                      <div class="view-card-detail card-detail5">
                        <span>슈박스-레드</span>
                      </div>
                      <div class="view-card-detail card-detail6">
                        <span>그린버튼</span>
                      </div>
                    </div>
                    <!-- 선택카드 디테일 팝업페이지 -->
                    <div class="inbox select-card-popup mySwiper">
                      <i
                        id="close-button"
                        class="fa-solid fa-circle-xmark"
                        style="color: #dfdfdf"
                      ></i>
                      <div class="swiper-wrapper">
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                        <div class="swiper-slide">Slide 4</div>
                        <div class="swiper-slide">Slide 5</div>
                        <div class="swiper-slide">Slide 6</div>
                      </div>
                      <div class="swiper-button-next"></div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-pagination"></div>
                    </div>
                  </div>
                  <!-- 카드소개페이지 2영역 -->
                  <div class="inbox card-part2">
                    <h2 class="blind">카드소개 2영역</h2>
                    <div class="card-part2-txt">
                      <p>네이버 특화 혜택</p>
                      <p>
                        네이버 플러스 맴버십<br />
                        무료 이용권 매월 지급
                      </p>
                      <a href="#"
                        >자세히보기
                        <i class="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                    <div class="card-part2-naver-logo">
                      <img
                        src="./imgs/navercard/img_naver.png"
                        alt="네이버 로고"
                      />
                    </div>
                    <div class="naver-membership-box">
                      <div class="box box-green">
                        <i
                          id="show-membership-detail"
                          class="fa-solid fa-circle-plus"
                          style="color: #cacaca"
                        ></i>
                        <p>네이버 특화 혜택</p>
                        <p>네이버 플러스 멤버십</p>
                        <p>대상 가맹점 최대 5%</p>
                        <p>네이버 페이 포인트 적립</p>
                      </div>
                      <div class="box box-gray">
                        <p>그 외 가맹점</p>
                        <p>적립·한도 제한없이</p>
                        <p>1% 네이버페이</p>
                        <p>포인트 적립</p>
                      </div>
                    </div>
                    <div class="naver-membership-detail">
                      <div class="memebrship-contant-box">
                        <i
                          id="close-membershipbox-button"
                          class="fa-solid fa-circle-xmark"
                          style="color: #000"
                        ></i>
                        <h2>네이버페이 포인트 적립</h2>
                        <section class="table-box">
                          <h2>네이버페이 포인트 최대 5% 적립</h2>
                          <table>
                            <caption>
                              네이버페이 포인트 적립 - 구분 ,적립률 ,적립한도
                              항목으로 구성된 표 입니다.
                            </caption>
                            <colgroup>
                              <col width="30%" />
                              <col width="30%" />
                              <col width="20%" />
                              <col width="20%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th class="alC" colspan="2">구분</th>
                                <th class="alC">적립률</th>
                                <th class="alC">적립한도</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="alC alM" rowspan="2">
                                  네이버플러스 멤버십<br />적립 대상<br />(<span
                                    class="logo_npayplus"
                                  ></span
                                  >)
                                </td>
                                <td class="alC">네이버플러스 멤버십 회원</td>
                                <td class="alC">5%</td>
                                <td class="alC alM" rowspan="2">
                                  월 이용금액<br />20만원 한도
                                </td>
                              </tr>
                              <tr>
                                <td class="alC">네이버플러스 멤버십 비회원</td>
                                <td class="alC">1%</td>
                              </tr>
                              <tr>
                                <td class="alC">그 외 가맹점</td>
                                <td class="alC">-</td>
                                <td class="alC">1%</td>
                                <td class="alC">제한 없음</td>
                              </tr>
                            </tbody>
                          </table>
                          <li>
                            네이버플러스 멤버십 회원이 네이버플러스 멤버십 적립
                            대상에서 결제 시 네이버페이 포인트 최대 5% 적립
                          </li>
                          <ul class="dash_list">
                            <li>
                              네이버플러스 멤버십 회원이 네이버플러스 멤버십
                              적립 대상에서 결제 시 네이버페이 포인트 최대 5%
                              적립
                            </li>
                            <li>
                              네이버플러스 멤버십 적립 대상이란, 네이버를 통해
                              네이버페이로 결제한 상품서비스 중 결제하기
                              페이지에 네이버플러스 멤버십 적립 대상 아이콘이
                              있는 주문건을 말함
                              <ul class="bul_list">
                                <li>
                                  단,상품을 결제하더라도
                                  유가증권(상품권,기프티콘 등)이거나 무이자 할부
                                  이용 건 등은 적립 불가(적립 제외 대상은 아래
                                  유의사항에서 확인 가능)
                                </li>
                                <li class="fw_bold">
                                  월 적립 한도 초과 후 혜택 적용된 결제 건을
                                  취소할 경우, 한도 초과로 혜택이 적용되지 않은
                                  이전 결제 건에 대해 다음 달 15일경 혜택
                                  적용(월 적립 한도 이내)
                                </li>
                                <!-- 2024-10-15 Q11139 수정 -->
                                <li class="fw_bold">
                                  네이버플러스 멤버십 비회원이 네이버플러스
                                  멤버십 적립 대상 결제 시 1% 적립 혜택이
                                  적용되는 승인 건도 월 이용금액 20만원
                                  적립한도가 적용됨
                                </li>
                              </ul>
                            </li>
                            <li>
                              네이버플러스 멤버십 적립 대상 외 국내외 가맹점에서
                              결제 시 1% 적립
                              <ul class="bul_list">
                                <li>적립한도 제한 없음</li>
                              </ul>
                            </li>
                          </ul>
                        </section>
                        <div class="box_bg_gray">
                          <div class="card_bundle">
                            <div class="box_title">
                              <p>유의사항</p>
                            </div>
                            <ul class="dash_list">
                              <li class="fw_bold">
                                전월 이용금액 30만원 미만 시 다음 달 혜택 미제공
                              </li>
                              <li>
                                최초 신규 발급 시 발급월 기준 다음 달 이용
                                건까지는 전월 이용금액 30만원 미만도 혜택 제공
                              </li>
                              <li>
                                전월 이용금액 산정 기준은 '적립서비스 제공 기준'
                                참고
                              </li>
                              <li class="fw_bold">
                                5% 적립 혜택은 네이버플러스 멤버십 회원에 한해
                                제공
                                <ul class="bul_list">
                                  <li class="fw_bold">
                                    비회원인 경우 네이버플러스 멤버십 적립 대상
                                    상품 결제 시 1% 적립
                                  </li>
                                  <li class="fw_bold">
                                    멤버십 해지 시 해지일 기준 다음 날 승인
                                    건부터는 네이버플러스 멤버십 적립 대상 상품
                                    구매 시에도 1% 적립률 적용
                                  </li>
                                </ul>
                              </li>
                              <li class="fw_bold">
                                아래의 경우, 네이버플러스 멤버십 적립 대상이어도
                                그 외 가맹점으로 분류되어 1% 적립률 적용
                                <ul class="bul_list">
                                  <li class="fw_bold">
                                    네이버를 통해 네이버 외 쇼핑몰에 접속 후
                                    25시간이 경과한 경우
                                  </li>
                                  <li class="fw_bold">
                                    주문서 작성 후 해당 페이지에서 25시간 경과
                                    후 결제하는 경우
                                  </li>
                                </ul>
                              </li>
                              <li class="fw_bold">
                                네이버플러스 멤버십 적립 대상 분류는 제휴사
                                기준에 따름
                              </li>
                              <li>
                                네이버페이 포인트는 영업일 기준 다음 달 15일에
                                적립
                              </li>
                              <li class="fw_bold">
                                현대카드의 모든 할인서비스를 이용한 금액(할인
                                적용된 매출 총 금액) 및 무이자할부 이용 금액은
                                적립 혜택 제외
                              </li>
                              <li class="fw_bold">
                                국제브랜드 수수료 및 해외서비스 수수료는 전월
                                이용금액에 포함되지 않음
                              </li>
                              <li class="fw_bold">
                                해외 가맹점 이용 시 별도의 수수료가 부과되니,
                                국제브랜드 수수료 관련 자세한 내용은 ‘카드 이용
                                유의사항’ 참고
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 카드소개페이지 3영역 -->
                  <div class="inbox card-part3">
                    <h2 class="blind">카드소개 3영역</h2>
                    <div class="card-part3-applepay-logo">
                      <img src="./imgs/applepay/img_applepay_10.png" alt="" />
                    </div>
                    <div class="card-part3-txt1">
                      <p>해외여행 필수템, Apple Pay 하나로 끝.</p>
                      <p>간편한 컨택리스, 대중교통 결제,</p>
                      <p>탑승권과 멤버십까지 모두 지갑 앱으로</p>
                      <p>해당 상품은 Apple Pay 이용이 가능합니다.</p>
                    </div>
                    <div class="card-part3-3rd-logo">
                      <img
                        src="./imgs/card_detail_img/3층로고.jpg"
                        alt="3층로고"
                      />
                    </div>
                    <div class="card-part3-txt2">
                      <p>
                        해당 상품은 현대카드 3층 시스템이 탑재된 카드입니다.
                      </p>
                      <p>아직도 카드의 기본 혜택만 받고 계신가요?</p>
                      <p>
                        이제 3층 시스템을 통해 원하는 혜택 패키지를 구독하고,
                      </p>
                      <p>나에게 꼭 맞춘 무료 혜택을 선물 받아보세요!</p>
                    </div>
                  </div>

                  <!-- 카드소개페이지 4영역 -->
                  <div class="inbox card-part4">
                    <h2 class="blind">카드소개 4영역</h2>
                    <p>이용안내</p>

                    <div class="card-part4-list">
                      <ul>
                        <li>
                          모든 가맹점은 현대카드 가맹점 등록 및 업종 분류
                          기준입니다.
                        </li>
                        <li>당사는 상품설명서의 내용을 준수합니다.</li>
                        <li>
                          동일 기간 내 다수의 신용카드를 신청할 경우 개인
                          신용등급 또는 개인신용평점, 이용한도 등에 영향을 미칠
                          수 있습니다.
                        </li>
                        <li>
                          카드 이용 시 제공되는 포인트 및 할인 혜택 등의
                          부가서비스는 카드 신규 출시(2021년 5월 24일) 이후 3년
                          이상 축소·폐지 없이 유지됩니다.상기에도 불구하고
                          다음과 같은 사유가 발생한 경우 카드사는 부가서비스를
                          변경할 수 있습니다.
                          <ul class="ul-ul">
                            <li>
                              카드사의 휴업·파산·경영상의 위기 등에 따른
                              불가피한 경우
                            </li>
                            <li>
                              제휴업체의 휴업·파산·경영상의 위기로 인해
                              불가피하게 부가서비스를 축소·변경하는 경우로서
                              다른 제휴업체를 통해 동종의 유사한 부가서비스
                              제공이 불가한 경우
                            </li>
                            <li>
                              제휴업체가 카드사의 의사에 반하여 해당
                              부가서비스를 축소하거나 변경 시, 당초 부가서비스에
                              상응하는 다른 부가서비스를 제공하는 경우
                            </li>
                            <li>
                              부가서비스를 3년 이상 제공한 상태에서 해당
                              부가서비스로 인해 상품의 수익성이 현저히 낮아진
                              경우
                            </li>
                          </ul>
                        </li>
                        <li>
                          카드사가 부가서비스를 변경하는 경우에는 부가서비스
                          변경 사유, 변경 내용 등 사유 발생 즉시 홈페이지에
                          게시하고 개별 고지 방법 중 2가지 이상의 방법으로
                          고지하여 드립니다. 특히 카드 신규 출시 이후 3년 이상
                          경과했고, 해당 카드의 수익성 유지가 어려워져
                          부가서비스를 변경하는 경우에는 변경일 6개월 전부터
                          2가지 이상의 방법으로 매월 개별 고지해 드립니다.
                        </li>
                        <li>
                          개별 고지 방법 : 서면 교부, 우편 또는 이메일, 전화
                          또는 팩스, 휴대폰 메시지 또는 이에 준하는 전자적
                          의사표시
                        </li>
                        <li>
                          본 내용은 2024년 10월 기준이며, 자세한 내용은 현대카드
                          고객센터(1577-6000)로 문의하시기 바랍니다.
                        </li>
                        <li>연회비는 카드 발급 시 선청구됩니다.</li>
                        <li>
                          카드 연회비(기본연회비 + 제휴연회비)는 보유 카드별로
                          청구됩니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 카드소개페이지 5영역 -->
                  <div class="inbox card-part5">
                    <h2 class="blind">카드소개 5영역</h2>
                    <div class="card-part5-list">
                      <ul>
                        <li>
                          카드 이용대금 연체 시 약정금리 + 연체가산금리 3%의
                          연체금리가 적용(회원별, 이용 상품별 차등 적용/법정
                          최고금리 20% 이내)단, 연체 발생시점에 약정금리가 없는
                          경우 아래와 같이 적용
                          <ul class="ul-ul">
                            <li>
                              일시불 : 거래 발생시점 기준 최소 기간(2개월)의
                              유이자할부 약정금리 + 연체가산금리 3%
                            </li>
                            <li>
                              무이자할부 : 거래 발생시점 기준 동일한 할부 계약
                              기간의 유이자할부 약정금리 + 연체가산금리 3%
                            </li>
                          </ul>
                        </li>
                        <li>
                          상환 능력에 비해 신용카드 이용금액이 과도할 경우,
                          귀하의 개인신용평점이 하락할 수 있습니다.
                        </li>
                        <li>
                          개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할
                          수 있습니다.
                        </li>
                        <li>
                          일정 기간 원리금을 연체할 경우, 모든 원리금을 변제할
                          의무가 발생할 수 있습니다.
                        </li>
                        <li>
                          신용카드 발급이 부적정한 경우(연체금 보유,
                          개인신용평점 낮음 등) 카드 발급이 제한될 수 있습니다.
                        </li>
                        <li>
                          카드 이용대금과 이에 수반되는 모든 수수료를 지정된
                          대금 결제일에 상환합니다.
                        </li>
                        <li>
                          금융소비자는 금융소비자보호법 제19조 제1항에 따라 해당
                          상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.
                        </li>
                        <li>
                          자세한 내용 및 이용 조건은 카드 신청 전 현대카드
                          홈페이지 및 상품설명서, 약관 참고
                        </li>
                        <li>
                          준법감시심의필 제 241008-004호 (2024.10.08 ~
                          2025.10.07)
                        </li>
                        <li>
                          여신금융협회 심의필 제 2024-C1h-06739호 (2024.06.12 ~
                          2025.06.11)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
    `,
  starbucks: `
    <div class="sub-wrap-box card-detail-page">
                <div class="close-button-area">
                  <i
                    id="top-close-button"
                    class="fa-solid fa-circle-xmark"
                    style="color: #000"
                  ></i>
                </div>
                <!-- 카드소개페이지 컨텐트 랩 박스 -->
                <div class="contant-wrap-box">
                  <!-- 카드소개페이지 메인 영역 -->
                  <h2 class="blind">카드소개 메인영역</h2>
                  <!-- 2-1 카드소개 상단 영역 -->
                  <div class="card-detail-top-area">
                    <!-- 2-1-1. 카드소개 상단 이미지 -->
                    <div class="cont-box">
                      <div class="col-7">
                        <div class="card-detail-top-img">
                          <img
                            src="./imgs/starbucks/starbucks_main_img.png"
                            alt="네이버 상단 메인 이미지"
                          />
                        </div>
                      </div>
                      <div class="col-5 col-5-card-main">
                        <div class="card-detail-top-txt">
                          <ul>
                            <li>
                              네이버플러스 멤버십 혜택에<br />
                              네이버페이 포인트 적립받는 카드
                            </li>
                            <li>네이버 현대카드</li>
                            <li>네이버페이 멤버십 무료 이용권</li>
                            <li>네이버페이 포인트 최대 5% 적립</li>
                          </ul>
                        </div>

                        <!-- 2-1-3. 카드소개 상단 연회비박스 -->
                        <div class="card-detail-top-membership-box">
                          <p>연회비</p>
                          <ul>
                            <li>
                              <span>국내전용</span>
                              <p>본인 10,000원</p>
                            </li>
                            <li>
                              <span>VISA</span>
                              <p>본인 10,000원</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 2-1-2. 카드소개 상단 텍스트 -->
                </div>
                <!-- 카드소개페이지 하위 영역 -->
                <div class="overlay-box">
                  <!-- 카드소개페이지 1영역 -->
                  <div class="inbox card-part1">
                    <h2 class="blind">카드소개 1영역</h2>
                    <div>
                      <h1>네이버 현대카드의</h1>
                      <h1>특별한 디자인을 소개합니다.</h1>
                      <p>카드를 클릭해보세요!</p>
                    </div>
                    <div class="card-detail-grid">
                      <div class="view-card-detail card-detail1">
                        <span>Graffiti</span>
                      </div>
                      <div class="view-card-detail card-detail2">
                        <span>Line</span>
                      </div>
                      <div class="view-card-detail card-detail3">
                        <span>Type</span>
                      </div>
                      <div class="view-card-detail card-detail4">
                        <span>Joy</span>
                      </div>
                      <div class="view-card-detail card-detail5">
                        <span>Tube</span>
                      </div>
                      <div class="view-card-detail card-detail6">
                        <span>Core</span>
                      </div>
                    </div>
                    <!-- 선택카드 디테일 팝업페이지 -->
                    <div class="inbox select-card-popup mySwiper">
                      <i
                        id="close-button"
                        class="fa-solid fa-circle-xmark"
                        style="color: #dfdfdf"
                      ></i>
                      <div class="swiper-wrapper">
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                        <div class="swiper-slide">Slide 4</div>
                        <div class="swiper-slide">Slide 5</div>
                        <div class="swiper-slide">Slide 6</div>
                      </div>
                      <div class="swiper-button-next"></div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-pagination"></div>
                    </div>
                  </div>
                  <!-- 카드소개페이지 2영역 -->
                  <div class="inbox card-part2">
                    <h2 class="blind">카드소개 2영역</h2>
                    <div class="card-part2-txt">
                      <p>네이버 특화 혜택</p>
                      <p>
                        네이버 플러스 맴버십<br />
                        무료 이용권 매월 지급
                      </p>
                      <a href="#"
                        >자세히보기
                        <i class="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                    <div class="card-part2-naver-logo">
                      <img
                        src="./imgs/navercard/img_naver.png"
                        alt="네이버 로고"
                      />
                    </div>
                    <div class="naver-membership-box">
                      <div class="box box-green">
                        <i
                          id="show-membership-detail"
                          class="fa-solid fa-circle-plus"
                          style="color: #cacaca"
                        ></i>
                        <p>네이버 특화 혜택</p>
                        <p>네이버 플러스 멤버십</p>
                        <p>대상 가맹점 최대 5%</p>
                        <p>네이버 페이 포인트 적립</p>
                      </div>
                      <div class="box box-gray">
                        <p>그 외 가맹점</p>
                        <p>적립·한도 제한없이</p>
                        <p>1% 네이버페이</p>
                        <p>포인트 적립</p>
                      </div>
                    </div>
                    <div class="naver-membership-detail">
                      <div class="memebrship-contant-box">
                        <i
                          id="close-membershipbox-button"
                          class="fa-solid fa-circle-xmark"
                          style="color: #000"
                        ></i>
                        <h2>네이버페이 포인트 적립</h2>
                        <section class="table-box">
                          <h2>네이버페이 포인트 최대 5% 적립</h2>
                          <table>
                            <caption>
                              네이버페이 포인트 적립 - 구분 ,적립률 ,적립한도
                              항목으로 구성된 표 입니다.
                            </caption>
                            <colgroup>
                              <col width="30%" />
                              <col width="30%" />
                              <col width="20%" />
                              <col width="20%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th class="alC" colspan="2">구분</th>
                                <th class="alC">적립률</th>
                                <th class="alC">적립한도</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="alC alM" rowspan="2">
                                  네이버플러스 멤버십<br />적립 대상<br />(<span
                                    class="logo_npayplus"
                                  ></span
                                  >)
                                </td>
                                <td class="alC">네이버플러스 멤버십 회원</td>
                                <td class="alC">5%</td>
                                <td class="alC alM" rowspan="2">
                                  월 이용금액<br />20만원 한도
                                </td>
                              </tr>
                              <tr>
                                <td class="alC">네이버플러스 멤버십 비회원</td>
                                <td class="alC">1%</td>
                              </tr>
                              <tr>
                                <td class="alC">그 외 가맹점</td>
                                <td class="alC">-</td>
                                <td class="alC">1%</td>
                                <td class="alC">제한 없음</td>
                              </tr>
                            </tbody>
                          </table>
                          <li>
                            네이버플러스 멤버십 회원이 네이버플러스 멤버십 적립
                            대상에서 결제 시 네이버페이 포인트 최대 5% 적립
                          </li>
                          <ul class="dash_list">
                            <li>
                              네이버플러스 멤버십 회원이 네이버플러스 멤버십
                              적립 대상에서 결제 시 네이버페이 포인트 최대 5%
                              적립
                            </li>
                            <li>
                              네이버플러스 멤버십 적립 대상이란, 네이버를 통해
                              네이버페이로 결제한 상품서비스 중 결제하기
                              페이지에 네이버플러스 멤버십 적립 대상 아이콘이
                              있는 주문건을 말함
                              <ul class="bul_list">
                                <li>
                                  단,상품을 결제하더라도
                                  유가증권(상품권,기프티콘 등)이거나 무이자 할부
                                  이용 건 등은 적립 불가(적립 제외 대상은 아래
                                  유의사항에서 확인 가능)
                                </li>
                                <li class="fw_bold">
                                  월 적립 한도 초과 후 혜택 적용된 결제 건을
                                  취소할 경우, 한도 초과로 혜택이 적용되지 않은
                                  이전 결제 건에 대해 다음 달 15일경 혜택
                                  적용(월 적립 한도 이내)
                                </li>
                                <!-- 2024-10-15 Q11139 수정 -->
                                <li class="fw_bold">
                                  네이버플러스 멤버십 비회원이 네이버플러스
                                  멤버십 적립 대상 결제 시 1% 적립 혜택이
                                  적용되는 승인 건도 월 이용금액 20만원
                                  적립한도가 적용됨
                                </li>
                              </ul>
                            </li>
                            <li>
                              네이버플러스 멤버십 적립 대상 외 국내외 가맹점에서
                              결제 시 1% 적립
                              <ul class="bul_list">
                                <li>적립한도 제한 없음</li>
                              </ul>
                            </li>
                          </ul>
                        </section>
                        <div class="box_bg_gray">
                          <div class="card_bundle">
                            <div class="box_title">
                              <p>유의사항</p>
                            </div>
                            <ul class="dash_list">
                              <li class="fw_bold">
                                전월 이용금액 30만원 미만 시 다음 달 혜택 미제공
                              </li>
                              <li>
                                최초 신규 발급 시 발급월 기준 다음 달 이용
                                건까지는 전월 이용금액 30만원 미만도 혜택 제공
                              </li>
                              <li>
                                전월 이용금액 산정 기준은 '적립서비스 제공 기준'
                                참고
                              </li>
                              <li class="fw_bold">
                                5% 적립 혜택은 네이버플러스 멤버십 회원에 한해
                                제공
                                <ul class="bul_list">
                                  <li class="fw_bold">
                                    비회원인 경우 네이버플러스 멤버십 적립 대상
                                    상품 결제 시 1% 적립
                                  </li>
                                  <li class="fw_bold">
                                    멤버십 해지 시 해지일 기준 다음 날 승인
                                    건부터는 네이버플러스 멤버십 적립 대상 상품
                                    구매 시에도 1% 적립률 적용
                                  </li>
                                </ul>
                              </li>
                              <li class="fw_bold">
                                아래의 경우, 네이버플러스 멤버십 적립 대상이어도
                                그 외 가맹점으로 분류되어 1% 적립률 적용
                                <ul class="bul_list">
                                  <li class="fw_bold">
                                    네이버를 통해 네이버 외 쇼핑몰에 접속 후
                                    25시간이 경과한 경우
                                  </li>
                                  <li class="fw_bold">
                                    주문서 작성 후 해당 페이지에서 25시간 경과
                                    후 결제하는 경우
                                  </li>
                                </ul>
                              </li>
                              <li class="fw_bold">
                                네이버플러스 멤버십 적립 대상 분류는 제휴사
                                기준에 따름
                              </li>
                              <li>
                                네이버페이 포인트는 영업일 기준 다음 달 15일에
                                적립
                              </li>
                              <li class="fw_bold">
                                현대카드의 모든 할인서비스를 이용한 금액(할인
                                적용된 매출 총 금액) 및 무이자할부 이용 금액은
                                적립 혜택 제외
                              </li>
                              <li class="fw_bold">
                                국제브랜드 수수료 및 해외서비스 수수료는 전월
                                이용금액에 포함되지 않음
                              </li>
                              <li class="fw_bold">
                                해외 가맹점 이용 시 별도의 수수료가 부과되니,
                                국제브랜드 수수료 관련 자세한 내용은 ‘카드 이용
                                유의사항’ 참고
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 카드소개페이지 3영역 -->
                  <div class="inbox card-part3">
                    <h2 class="blind">카드소개 3영역</h2>
                    <div class="card-part3-applepay-logo">
                      <img src="./imgs/applepay/img_applepay_10.png" alt="" />
                    </div>
                    <div class="card-part3-txt1">
                      <p>해외여행 필수템, Apple Pay 하나로 끝.</p>
                      <p>간편한 컨택리스, 대중교통 결제,</p>
                      <p>탑승권과 멤버십까지 모두 지갑 앱으로</p>
                      <p>해당 상품은 Apple Pay 이용이 가능합니다.</p>
                    </div>
                    <div class="card-part3-3rd-logo">
                      <img
                        src="./imgs/card_detail_img/3층로고.jpg"
                        alt="3층로고"
                      />
                    </div>
                    <div class="card-part3-txt2">
                      <p>
                        해당 상품은 현대카드 3층 시스템이 탑재된 카드입니다.
                      </p>
                      <p>아직도 카드의 기본 혜택만 받고 계신가요?</p>
                      <p>
                        이제 3층 시스템을 통해 원하는 혜택 패키지를 구독하고,
                      </p>
                      <p>나에게 꼭 맞춘 무료 혜택을 선물 받아보세요!</p>
                    </div>
                  </div>

                  <!-- 카드소개페이지 4영역 -->
                  <div class="inbox card-part4">
                    <h2 class="blind">카드소개 4영역</h2>
                    <p>이용안내</p>

                    <div class="card-part4-list">
                      <ul>
                        <li>
                          모든 가맹점은 현대카드 가맹점 등록 및 업종 분류
                          기준입니다.
                        </li>
                        <li>당사는 상품설명서의 내용을 준수합니다.</li>
                        <li>
                          동일 기간 내 다수의 신용카드를 신청할 경우 개인
                          신용등급 또는 개인신용평점, 이용한도 등에 영향을 미칠
                          수 있습니다.
                        </li>
                        <li>
                          카드 이용 시 제공되는 포인트 및 할인 혜택 등의
                          부가서비스는 카드 신규 출시(2021년 5월 24일) 이후 3년
                          이상 축소·폐지 없이 유지됩니다.상기에도 불구하고
                          다음과 같은 사유가 발생한 경우 카드사는 부가서비스를
                          변경할 수 있습니다.
                          <ul class="ul-ul">
                            <li>
                              카드사의 휴업·파산·경영상의 위기 등에 따른
                              불가피한 경우
                            </li>
                            <li>
                              제휴업체의 휴업·파산·경영상의 위기로 인해
                              불가피하게 부가서비스를 축소·변경하는 경우로서
                              다른 제휴업체를 통해 동종의 유사한 부가서비스
                              제공이 불가한 경우
                            </li>
                            <li>
                              제휴업체가 카드사의 의사에 반하여 해당
                              부가서비스를 축소하거나 변경 시, 당초 부가서비스에
                              상응하는 다른 부가서비스를 제공하는 경우
                            </li>
                            <li>
                              부가서비스를 3년 이상 제공한 상태에서 해당
                              부가서비스로 인해 상품의 수익성이 현저히 낮아진
                              경우
                            </li>
                          </ul>
                        </li>
                        <li>
                          카드사가 부가서비스를 변경하는 경우에는 부가서비스
                          변경 사유, 변경 내용 등 사유 발생 즉시 홈페이지에
                          게시하고 개별 고지 방법 중 2가지 이상의 방법으로
                          고지하여 드립니다. 특히 카드 신규 출시 이후 3년 이상
                          경과했고, 해당 카드의 수익성 유지가 어려워져
                          부가서비스를 변경하는 경우에는 변경일 6개월 전부터
                          2가지 이상의 방법으로 매월 개별 고지해 드립니다.
                        </li>
                        <li>
                          개별 고지 방법 : 서면 교부, 우편 또는 이메일, 전화
                          또는 팩스, 휴대폰 메시지 또는 이에 준하는 전자적
                          의사표시
                        </li>
                        <li>
                          본 내용은 2024년 10월 기준이며, 자세한 내용은 현대카드
                          고객센터(1577-6000)로 문의하시기 바랍니다.
                        </li>
                        <li>연회비는 카드 발급 시 선청구됩니다.</li>
                        <li>
                          카드 연회비(기본연회비 + 제휴연회비)는 보유 카드별로
                          청구됩니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 카드소개페이지 5영역 -->
                  <div class="inbox card-part5">
                    <h2 class="blind">카드소개 5영역</h2>
                    <div class="card-part5-list">
                      <ul>
                        <li>
                          카드 이용대금 연체 시 약정금리 + 연체가산금리 3%의
                          연체금리가 적용(회원별, 이용 상품별 차등 적용/법정
                          최고금리 20% 이내)단, 연체 발생시점에 약정금리가 없는
                          경우 아래와 같이 적용
                          <ul class="ul-ul">
                            <li>
                              일시불 : 거래 발생시점 기준 최소 기간(2개월)의
                              유이자할부 약정금리 + 연체가산금리 3%
                            </li>
                            <li>
                              무이자할부 : 거래 발생시점 기준 동일한 할부 계약
                              기간의 유이자할부 약정금리 + 연체가산금리 3%
                            </li>
                          </ul>
                        </li>
                        <li>
                          상환 능력에 비해 신용카드 이용금액이 과도할 경우,
                          귀하의 개인신용평점이 하락할 수 있습니다.
                        </li>
                        <li>
                          개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할
                          수 있습니다.
                        </li>
                        <li>
                          일정 기간 원리금을 연체할 경우, 모든 원리금을 변제할
                          의무가 발생할 수 있습니다.
                        </li>
                        <li>
                          신용카드 발급이 부적정한 경우(연체금 보유,
                          개인신용평점 낮음 등) 카드 발급이 제한될 수 있습니다.
                        </li>
                        <li>
                          카드 이용대금과 이에 수반되는 모든 수수료를 지정된
                          대금 결제일에 상환합니다.
                        </li>
                        <li>
                          금융소비자는 금융소비자보호법 제19조 제1항에 따라 해당
                          상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.
                        </li>
                        <li>
                          자세한 내용 및 이용 조건은 카드 신청 전 현대카드
                          홈페이지 및 상품설명서, 약관 참고
                        </li>
                        <li>
                          준법감시심의필 제 241008-004호 (2024.10.08 ~
                          2025.10.07)
                        </li>
                        <li>
                          여신금융협회 심의필 제 2024-C1h-06739호 (2024.06.12 ~
                          2025.06.11)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>`,

  
  cardPopup: `
              <div class="popup-wrap">
    <h2 class="blind">선택카드디테일 팝업페이지</h2>
    <div class="cont-box">
      <div class="col-1"></div>
      <div class="col-10">
        <section class="card-name-sec">
          <p></p>
          <p>플라스틱플레이트</p>
        </section>
        <section class="card-detail-sec">
          <div class="card-detail-sec-fornt">
           <img src="">
            <aside>-앞면-</aside>
          </div>
          <div class="card-detail-sec-back">
          <img src="">
            <aside>-뒷면-</aside>
          </div>
        </section>
        
        <section class="card-txt-sec">
          <p>
            네이버플러스 멤버십의 로고와 컬러를 친숙한
            키보드로 재해석했습니다.
          </p>
          <p>심플한 레이아웃과 볼드한 키보드 디자인으로</p>
          <p>
            네이버플러스 멤버십의 로고 이미지를 위트 있게
            담아냈습니다.
          </p>
        </section>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
              
              `,
};

export default CardDetailPageData;
