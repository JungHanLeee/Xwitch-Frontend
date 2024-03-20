"use client"

import React, {useEffect, useState} from 'react'
import StreamerProfileButton from "@/components/StreamerProfileButton";
import {streamerInfo} from "@/constants/streamerInfo";
import {useRecoilState} from "recoil";
import {sidebarExtendState} from "@/recoil/recoilAtoms";

export const SideBar = ({serverSideData}: any) => {
    const [clientSideData, setClientSideData] = useState(null);
    const [sidebarWidth, setSidebarWidth] = useState(56);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [extend, setExtend] = useState(false);
    const [extended, setExtends] = useRecoilState(sidebarExtendState);
    const handleExtend = () => {
      console.log("handle", extend);
      setExtend(!extend);
      setExtends(!extended)
      setSidebarWidth(!extend ? 15 : 4);
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        const fetchData = async () => {
          // const res = await fetch('');
          // const data = await res.json();
          // setClientSideData(data);
        };

        setSidebarWidth(window.innerWidth >= 1200 ? (extend ? 15 : 3) : 3);

        // fetchData().then(r => console.log(r));
        // 화면 크기에 따른 사이드바 크기 조정

        if (typeof window != 'undefined') {
          window.addEventListener('resize', handleResize);

          return () => {
            window.removeEventListener('resize', handleResize);
          }
        }
      }, [extend, window.innerWidth]
    )

    return (
      <div className={'bg-gray-200 h-full'} style={{width: `${sidebarWidth}rem`}}>
        <div className='bg-gray-200' style={{position: 'relative'}}>
          <div>
            <div
              className={`Layout-sc-1xcs6mc-0 collapse-toggle ${ typeof window !== 'undefined' && window.innerWidth < 1200 ? 'hidden' : extend ? 'gazthU' : 'kpdiXD'}`}>
              <div className="inline-flex kBtJDm">
                <button onClick={handleExtend} className="ScCoreButton-sc-ocjdkq-0 bTXTVH ScButtonIcon-sc-9yap0r-0 eSFFfM"
                        aria-label="측면 탐색 확장"
                        data-a-target="side-nav-arrow">
                  <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR" style={{width: '1.25rem', height: '1.25rem'}}>
                    <div className="ScIconLayout-sc-1q25cff-0 cASLMj">
                      <div className="doeqbO1 tw-aspect ScAspectSpacer-sc-18km980-0">
                        <div className="ScAspectSpacer-sc-18km980-0 bIDIFh1"></div>

                        <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
                             role="presentation" aria-hidden="true" focusable="false"
                             className={`ScIconSVG-sc-1q25cff-1 jpczqG" ${extend && windowWidth>=1200 ? 'flip-horizontal' : ''}`}>
                          <g>
                            <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="side-bar-contents">
              <nav className="Layout-sc-1xcs6mc-0 skip-to-target" id="side-nav" aria-label="왼쪽 내비게이션" aria-hidden="false"
                   tabIndex={0}>
                <div className="Layout-sc-1xcs6mc-0 jxGBqp">
                  <div className="Layout-sc-1xcs6mc-0">
                    <div className="Layout-sc-1xcs6mc-0">
                      <div aria-label="추천 채널" className="Layout-sc-1xcs6mc-0 dcyYPL side-nav-section" role="group">
                        {extend && windowWidth > 1200 ? <div className='m-2 pt-2 font-semibold text-xs'><h2>추천채널</h2></div> :
                          <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                            <div className="Layout-sc-1xcs6mc-0 kYEeAt side-nav-header"
                                 data-a-target="side-nav-header-collapsed">
                              <div className="ScFigure-sc-wkgzod-0 caxXaW tw-svg">
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                  <path fillRule="evenodd"
                                        d="M12.002 3.999a2 2 0 0 1 2 2v2L18 6v8l-3.998-2v2a2 2 0 0 1-2 1.999h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8zM12 6H4v8h8V6z"
                                        clipRule="evenodd"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        }
                        <div className="relative InjectLayout-sc-1i43xsx-0 hWukFy tw-transition-group">
                          {streamerInfo.map((info) => (
                            <StreamerProfileButton key={info.streamerId} info={info} collapsed={extend}/>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="side-info-container">
                      <div id="96711070f35141ed51f373c7a9ba808f"></div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
;

export async function getServerSideProps() {
  const serverSideData = 'Data from Server-Side';

  return {
    props: {serverSideData},
  }
}

export default SideBar;
