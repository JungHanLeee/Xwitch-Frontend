import React from "react";
import CustomLink from "@/components/CustomLink";
import {useRecoilState, useRecoilValue} from "recoil";
import {foundStreamerState} from "@/recoil/recoilAtoms";

const ChannelInfoContent: React.FC = () => {
  const foundStreamer = useRecoilValue(foundStreamerState);
  return (
    <div className="channel-info-content">
      <section className="Layout-sc-1xcs6mc-0 skip-to-target section-one" id="offline-channel-main-content"
               aria-label="주요 내용" aria-hidden="false" tabIndex={0}>

        <div></div>
        <div className="Layout-sc-1xcs6mc-0 dehlJN home-header-sticky">
          <div className="Layout-sc-1xcs6mc-0 dGvaUO">
            <div className="Layout-sc-1xcs6mc-0 jskmre">
              <div className="Layout-sc-1xcs6mc-0 kbdfeJ">
                <div aria-label="채널 오프라인" className="Layout-sc-1xcs6mc-0 cwtKyw">
                  <div className="ScTokenOverrideCSSVars-sc-13alv3m-0">
                    <div className="ScAccentRegionCssVars-sc-1gab5n-0">
                      <CustomLink size={'72'} status={'offline'} href={`/pages/${foundStreamer?.streamerId}`}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Layout-sc-1xcs6mc-0 hdoiLi">
                <a href={`/pages/${foundStreamer?.streamerId}`}>
                  <div className="Layout-sc-1xcs6mc-0 fcaZHY"><h1
                    className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 ivranM ezNtJL tw-title">{foundStreamer?.streamerName}</h1>
                    <div className="Layout-sc-1xcs6mc-0 izrobB">
                      <div className="ScFigure-sc-wkgzod-0 cKJUoi tw-svg">
                        <svg width="16" height="16" viewBox="0 0 16 16" aria-label="인증된 파트너">
                          <path fillRule="evenodd"
                                d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
                                clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a><p className="CoreText-sc-1txzju1-0 cwNkcn">팔로워 92.4만명</p>
              </div>
            </div>
            <div className="Layout-sc-1xcs6mc-0 xxjeD">
              <div data-target="channel-header-right" className="Layout-sc-1xcs6mc-0 fGJyEH">
                <div className="Layout-sc-1xcs6mc-0 hljDeB"></div>
                <div className="Layout-sc-1xcs6mc-0 cwtKyw">
                  <div className="Layout-sc-1xcs6mc-0 hssKzJ">
                    <div style={{opacity: '1', transform: 'translateX(50px) translateZ(0px)'}}>
                      <div className="Layout-sc-1xcs6mc-0 lmNILC">
                        <div className="Layout-sc-1xcs6mc-0 bzcGMK">
                          <div className="Layout-sc-1xcs6mc-0 hkISPQ">
                            <div style={{opacity: '1'}}>
                              <div className="Layout-sc-1xcs6mc-0 bXHHlg">
                                <div className="Layout-sc-1xcs6mc-0 fVQeCA">
                                  <button aria-label="팔로우" data-a-target="follow-button"
                                          data-test-selector="follow-button"
                                          className="ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 ccqkQH gmCwLG">
                                    <div className="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr">
                                      <div data-a-target="tw-core-button-label-text"
                                           className="Layout-sc-1xcs6mc-0 bFxzAY">
                                        <div className="Layout-sc-1xcs6mc-0 ktLpvM">
                                          <div className="InjectLayout-sc-1i43xsx-0 bgnKmX"
                                               style={{
                                                 transition: 'transform 0ms ease 0ms',
                                                 opacity: '1'
                                               }}>
                                            <div className="ScAnimation-sc-s60rmz-0 kCyYsz tw-animation"
                                                 data-a-target="tw-animation-target">
                                              <div className="Layout-sc-1xcs6mc-0 ktLpvM">
                                                <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                                  <figure
                                                    className="ScFigure-sc-1hrsqw6-0 btGeNA tw-svg">
                                                    <svg type="color-fill-current" width="20px"
                                                         height="20px" version="1.1" viewBox="0 0 20 20"
                                                         x="0px" y="0px"
                                                         className="ScSvg-sc-1hrsqw6-1 ihOSMR">
                                                      <g>
                                                        <path fillRule="evenodd"
                                                              d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
                                                              clipRule="evenodd"></path>
                                                      </g>
                                                    </svg>
                                                  </figure>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span><div
                                            style={{
                                              transition: 'all 0ms ease 0ms',
                                              opacity: '1'
                                            }}>팔로우</div></span>
                                        </div>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="InjectLayout-sc-1i43xsx-0 kFGaik"
                             style={{transition: 'all 200ms ease-in-out 0ms', opacity: '0'}}>
                          <div>
                            <div className="Layout-sc-1xcs6mc-0 live-notifications__btn"
                                 data-a-target="live-notifications-wrapper--off">
                              <div className="Layout-sc-1xcs6mc-0 iMILUc">
                                <button tabIndex={-1} aria-label="알림 켜기"
                                        data-a-target="notifications-toggle"
                                        className="ScCoreButton-sc-ocjdkq-0 ScCoreButtonSecondary-sc-ocjdkq-2 ccqkQH cegTsp">
                                  <div className="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr">
                                    <div data-a-target="tw-core-button-label-text"
                                         className="Layout-sc-1xcs6mc-0 bFxzAY">
                                      <div className="Layout-sc-1xcs6mc-0 ktLpvM">
                                        <div className="InjectLayout-sc-1i43xsx-0 feRWBE"
                                             style={{
                                               transition: 'transform 200ms ease 0ms',
                                               opacity: '1'
                                             }}>
                                          <div className="ScAnimation-sc-s60rmz-0 kCyYsz tw-animation"
                                               data-a-target="tw-animation-target">
                                            <div className="Layout-sc-1xcs6mc-0 ktLpvM">
                                              <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                                <figure className="ScFigure-sc-1hrsqw6-0 btGeNA tw-svg">
                                                  <svg type="color-fill-current" width="20px"
                                                       height="20px" version="1.1" viewBox="0 0 20 20"
                                                       x="0px" y="0px"
                                                       className="ScSvg-sc-1hrsqw6-1 ihOSMR">
                                                    <g>
                                                      <path fillRule="evenodd"
                                                            d="M17 14v-2c-1-.5-1.75-1-2-2-.095-.38-.154-.905-.221-1.506C14.49 5.936 14.049 2 10 2 5.95 2 5.509 5.936 5.221 8.494 5.154 9.095 5.095 9.62 5 10c-.25 1-1 1.5-2 2v2h14zm-9.002 2h4-4zm4 0v.012V16zm-5.766-4h7.536a4.262 4.262 0 01-.708-1.515c-.129-.513-.2-1.154-.26-1.684a32.48 32.48 0 00-.009-.083c-.152-1.355-.314-2.606-.78-3.535-.21-.423-.447-.692-.703-.862C11.063 4.158 10.673 4 10 4s-1.063.158-1.308.32c-.256.171-.492.44-.704.863-.465.929-.627 2.18-.78 3.535L7.2 8.8c-.06.53-.131 1.171-.26 1.684-.15.603-.402 1.1-.708 1.515zm1.766 4a2.001 2.001 0 004 .012"
                                                            clipRule="evenodd"></path>
                                                    </g>
                                                  </svg>
                                                </figure>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div className="Layout-sc-1xcs6mc-0 hPfSAv">*/}
                {/*  <div className="Layout-sc-1xcs6mc-0 cVmNmw">*/}
                {/*    <div className="Layout-sc-1xcs6mc-0 hPfSAv">*/}
                {/*      <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">*/}
                {/*        <button aria-label="구독하기" data-a-target="subscribe-button"*/}
                {/*                data-test-selector="subscribe-button__dropdown"*/}
                {/*                className="ScCoreButton-sc-ocjdkq-0 ScCoreButtonSecondary-sc-ocjdkq-2 bTXTVH cegTsp">*/}
                {/*          <div className="ScCoreButtonLabel-sc-s7h2b7-0 bQmsUi">*/}
                {/*            <div className="Layout-sc-1xcs6mc-0 iyOCUH">*/}
                {/*              <div className="ScCoreButtonIcon-sc-ypak37-0 evnVIg tw-core-button-icon">*/}
                {/*                <div className="ScFigure-sc-wkgzod-0 fewniq tw-svg"*/}
                {/*                     data-a-selector="tw-core-button-icon">*/}
                {/*                  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">*/}
                {/*                    <path fillRule="evenodd"*/}
                {/*                          d="M11.456 8.255 10 5.125l-1.456 3.13-3.49.485 2.552 2.516-.616 3.485L10 13.064l3.01 1.677-.616-3.485 2.553-2.516-3.491-.485zM7.19 6.424l-4.2.583c-.932.13-1.318 1.209-.664 1.853l3.128 3.083-.755 4.272c-.163.92.876 1.603 1.722 1.132L10 15.354l3.579 1.993c.846.47 1.885-.212 1.722-1.132l-.755-4.272 3.128-3.083c.654-.644.268-1.723-.664-1.853l-4.2-.583-1.754-3.77c-.406-.872-1.706-.872-2.112 0L7.19 6.424z"*/}
                {/*                          clipRule="evenodd"></path>*/}
                {/*                  </svg>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div data-a-target="tw-core-button-label-text"*/}
                {/*                 className="Layout-sc-1xcs6mc-0 cFsYRp">구독하기*/}
                {/*            </div>*/}
                {/*            <div className="Layout-sc-1xcs6mc-0 kyglys">*/}
                {/*              <div className="ScCoreButtonIcon-sc-ypak37-0 evnVIg tw-core-button-icon">*/}
                {/*                <div className="ScFigure-sc-wkgzod-0 fewniq tw-svg"*/}
                {/*                     data-a-selector="tw-core-button-icon">*/}
                {/*                  <svg width="20" height="20" viewBox="0 0 20 20">*/}
                {/*                    <path d="M14.5 6.5 10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>*/}
                {/*                  </svg>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </button>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              <div className="Layout-sc-1xcs6mc-0 jOVwMQ">
                <button className="ScCoreButton-sc-ocjdkq-0 bTXTVH ScButtonIcon-sc-9yap0r-0 eSFFfM"
                        aria-label="옵션 더 보기" title="옵션 더 보기" aria-expanded="false"
                        data-a-target="report-button-more-button">
                  <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR">
                    <div className="ScFigure-sc-wkgzod-0 fewniq tw-svg">
                      <svg width="20" height="20" viewBox="0 0 20 20" focusable="false"
                           aria-hidden="true" role="presentation">
                        <path
                          d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="Layout-sc-1xcs6mc-0 iULZCz">
            <div className="Layout-sc-1xcs6mc-0 icEBfb">
              <div className="Layout-sc-1xcs6mc-0 dFTnhz tw-tabs">
                <ul role="tablist"
                    className="Layout-sc-1xcs6mc-0 ScScrollArea-sc-17qqzr5-0 rVKbl chpVl">
                  <li role="presentation" className="Layout-sc-1xcs6mc-0 jpzpKm"><a
                    data-a-target="channel-home-tab-Home"
                    data-index="0"
                    role="tab"
                    aria-selected="true"
                    tabIndex={0}
                    className="ScInteractive-sc-iekec1-0 cmTyEs"
                    href={`/pages/${foundStreamer?.streamerId}`}>
                    <div className="Layout-sc-1xcs6mc-0 bsXwrR">
                      <div className="Layout-sc-1xcs6mc-0 ScTextWrapper-sc-iekec1-1 gyvaIN eMPFcb"><p
                        className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 AAWwv ezNtJL tw-title">홈</p>
                      </div>
                    </div>
                  </a>
                    <div className="Layout-sc-1xcs6mc-0 ScTabIndicatorLayout-sc-iekec1-2 iwPmxB AHHvK">
                      <div className="ScActiveIndicator-sc-15g6065-0 blipaW"></div>
                    </div>
                  </li>
                  <li role="presentation" className="Layout-sc-1xcs6mc-0 kYWUOz"><a
                    data-a-target="channel-home-tab-About"
                    data-index="1"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    className="ScInteractive-sc-iekec1-0 cmTyEs"
                    href={`/pages/${foundStreamer?.streamerId}/about`}>
                    <div className="Layout-sc-1xcs6mc-0 juXjJY">
                      <div className="Layout-sc-1xcs6mc-0 ScTextWrapper-sc-iekec1-1 gyvaIN eMPFcb"><p
                        className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 AAWwv ezNtJL tw-title">정보</p>
                      </div>
                    </div>
                  </a>
                    <div
                      className="Layout-sc-1xcs6mc-0 ScTabIndicatorLayout-sc-iekec1-2 fRWndA AHHvK"></div>
                  </li>
                  <li role="presentation" className="Layout-sc-1xcs6mc-0 kYWUOz"><a
                    data-a-target="channel-home-tab-Schedule"
                    data-index="2"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    className="ScInteractive-sc-iekec1-0 cmTyEs"
                    href={`/pages/${foundStreamer?.streamerId}/schedule`}>
                    <div className="Layout-sc-1xcs6mc-0 juXjJY">
                      <div className="Layout-sc-1xcs6mc-0 ScTextWrapper-sc-iekec1-1 gyvaIN eMPFcb"><p
                        className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 AAWwv ezNtJL tw-title">일정</p>
                      </div>
                    </div>
                  </a>
                    <div
                      className="Layout-sc-1xcs6mc-0 ScTabIndicatorLayout-sc-iekec1-2 fRWndA AHHvK"></div>
                  </li>
                  <li role="presentation" className="Layout-sc-1xcs6mc-0 kYWUOz"><a
                    data-a-target="channel-home-tab-Videos"
                    data-index="3"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    className="ScInteractive-sc-iekec1-0 cmTyEs"
                    href={`/pages/${foundStreamer?.streamerId}/videos`}>
                    <div className="Layout-sc-1xcs6mc-0 juXjJY">
                      <div className="Layout-sc-1xcs6mc-0 ScTextWrapper-sc-iekec1-1 gyvaIN eMPFcb"><p
                        className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 AAWwv ezNtJL tw-title">동영상</p>
                      </div>
                    </div>
                  </a>
                    <div
                      className="Layout-sc-1xcs6mc-0 ScTabIndicatorLayout-sc-iekec1-2 fRWndA AHHvK"></div>
                  </li>
                  <li role="presentation" className="Layout-sc-1xcs6mc-0 kYWUOz"><a
                    data-a-target="channel-home-tab-Chat"
                    data-index="4"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    className="ScInteractive-sc-iekec1-0 cmTyEs"
                    href={`/pages/${foundStreamer?.streamerId}`}>
                    <div className="Layout-sc-1xcs6mc-0 juXjJY">
                      <div className="Layout-sc-1xcs6mc-0 ScTextWrapper-sc-iekec1-1 gyvaIN eMPFcb">
                        <div className="Layout-sc-1xcs6mc-0 xxjeD">
                          <div className="Layout-sc-1xcs6mc-0 iyOCUH">
                            <div className="ScFigure-sc-wkgzod-0 fJjste tw-svg">
                              <svg width="20" height="20" viewBox="0 0 20 20">
                                <path
                                  d="M6 8h5.293L5 14.293l1.414 1.414 6.293-6.293V15h2V6H6v2z"></path>
                              </svg>
                            </div>
                          </div>
                          <p
                            className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 AAWwv ezNtJL tw-title">채팅</p>
                        </div>
                      </div>
                    </div>
                  </a>
                    <div
                      className="Layout-sc-1xcs6mc-0 ScTabIndicatorLayout-sc-iekec1-2 fRWndA AHHvK"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Layout-sc-1xcs6mc-0 cNKHwD"></div>
          </div>
        </div>
        <div className="Layout-sc-1xcs6mc-0 cRYXMq">
          <div className="Layout-sc-1xcs6mc-0 jBLVus home__lower-content">
            <div className="Layout-sc-1xcs6mc-0 daZyRV" style={{position: 'relative'}}>
              <div className="ScTransitionBase-sc-hx4quq-0 OBUFH tw-transition"
                   aria-hidden="false"></div>
              <div className="resize-detector">
                <div className="resize-detector">
                  <div className="resize-detector__grow"
                       style={{width: '100000px', height: '100000px'}}></div>
                </div>
                <div className="resize-detector">
                  <div className="resize-detector__shrink"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ChannelInfoContent;