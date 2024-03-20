'use client'
import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import ChannelInfoContent from "@/components/ChannelInfoContent";
import OutLink from "@/components/OutLink";
import BroadCastingNotiButton from "@/components/BroadCastingNotiButton";
import SettingButton from "@/components/SettingButton";
import VideoPlayer from "@/components/VideoPlayer";
import {streamerInfo} from "@/constants/streamerInfo";
import {useRecoilState} from "recoil";
import {foundStreamerState, sidebarExtendState} from "@/recoil/recoilAtoms";

const StreamerPage: React.FC = () => {
  const currentURL = window.location.href.split('/');
  const streamerIdFromURL = currentURL[currentURL.length - 1];
  const [foundStreamer, setFoundStreamer] = useRecoilState(foundStreamerState);
  const [online, setOnline] = useState(true);
  const persistentPlayerContent = document.querySelector('[data-target="persistent-player-content"]');
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [extend, setExtend] = useRecoilState(sidebarExtendState);
  const [videoWrapperStyles, setVideoWrapperStyles] = useState({
    position: 'absolute' as 'absolute',
    overflow: 'hidden',
    zIndex: '1',
  });

  const Streamer = useMemo(() => {
    return streamerInfo.find((streamer) => streamer.streamerId === streamerIdFromURL);
  }, [streamerIdFromURL]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 아직 API가 없는 관계로 주석처리
        // const response = await fetch(/* your API endpoint */);
        // const data = await response.json();

        // Recoil 원자 상태 업데이트
        setFoundStreamer(Streamer);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])
  console.log(extend);

  // const foundStreamer
  //   = useMemo(() => {
  //   return streamerInfo.find((streamer) => streamer.streamerId === streamerIdFromURL);
  // }, [streamerIdFromURL]);
  const streamerNameString =  (foundStreamer?.streamerId + ' ').repeat(16).trim();
  const backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='200px'>`
    + `<text x='15' y='27%' fill='white' font-size='4rem' font-weight='600' opacity='0.1' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>${streamerNameString}</text>`
    + `<text x='5' y='60%' fill='white' font-size='4rem' font-weight='600' opacity='0.1' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>319 ${streamerNameString}</text>`
    + `<text x='0' y='93%' fill='white' font-size='4rem' font-weight='600' opacity='0.1' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>xk319 ${streamerNameString}</text></svg>")`;
  useEffect(() => {
    const updateStyles = () => {
      const element = videoWrapperRef.current;
      if (element) {
        const { top, left, width, height } = element.getBoundingClientRect();

        // 새로운 스타일 계산
        let newStyles = {
          ...videoWrapperStyles,
          top: `${top - 48}px`,
          left: `${left - 48}px`,
          width: `${width}px`,
          height: `${height}px`,
        };
        console.log(extend, newStyles);
        if (extend === true && window.innerWidth>=1200) {
          newStyles = {
            ...newStyles,
            left: `${left - 250}px`,
          };
          console.log("log", newStyles);
        }
        // 스타일 업데이트
        setVideoWrapperStyles((prevStyles) => {
          // 이전 스타일과 새로운 스타일이 같으면 업데이트하지 않음
          if (prevStyles !== newStyles) {
            return newStyles;
          }
          return prevStyles;
        });
      }
    };

    updateStyles(); // 초기 렌더링 시에도 스타일 업데이트

    window.addEventListener('resize', updateStyles);

    // Cleanup 함수를 이용하여 이벤트 리스너를 해제합니다.
    return () => {
      window.removeEventListener('resize', updateStyles);
    };
  }, [videoWrapperRef.current, extend]);
  return (
    <div>

      <div className="channel-root channel-root--home channel-root--unanimated"
           style={{
             backgroundImage: backgroundImage,
             backgroundColor: '#9147ff',
           }}
      >
        <div className="Layout-sc-1xcs6mc-0 dcyYPL">
          <div className="channel-root__player channel-root__player--offline">
            <div className="resize-detector">
              <div className="resize-detector">
                <div className="resize-detector__grow" style={{width: '100000px', height: '100000px'}}></div>
              </div>
              <div className="resize-detector">
                <div className="resize-detector__shrink"></div>
              </div>
            </div>
            <div
              style={{
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <div className="home">
                <div className="Layout-sc-1xcs6mc-0 fpmStH">
                  <div className="Layout-sc-1xcs6mc-0 ixiIRM">
                    <div className="Layout-sc-1xcs6mc-0 dnISBD home-offline-hero"
                         style={{position: 'relative'}}>
                      <div className="resize-detector">
                        <div className="resize-detector">
                          <div className="resize-detector__grow"
                               style={{width: '100000px', height: '100000px'}}></div>
                        </div>
                        <div className="resize-detector">
                          <div className="resize-detector__shrink"></div>
                        </div>
                      </div>
                      <div className="Layout-sc-1xcs6mc-0 hMuFhi">
                        <div className="InjectLayout-sc-1i43xsx-0 home-carousel-info kwMNMO">
                          <div className="Layout-sc-1xcs6mc-0 jkCpei">
                            <div className="Layout-sc-1xcs6mc-0 iNkiyZ">
                              <div className="Layout-sc-1xcs6mc-0 plvaC">
                                <div
                                  className="Layout-sc-1xcs6mc-0 exGAHk channel-status-info channel-status-info--offline">
                                  <p className="CoreText-sc-1txzju1-0 fQYeyD">오프라인</p>
                                </div>
                              </div>
                              <div className="Layout-sc-1xcs6mc-0 golbyW">
                                <h2
                                  className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 loYYIe ezNtJL tw-title">
                                  <span>{foundStreamer?.streamerName}</span>님은 {foundStreamer?.isLive} 상태입니다.
                                </h2>
                              </div>
                              <div className="Layout-sc-1xcs6mc-0 fMazMU">
                                <h3 className="CoreText-sc-1txzju1-0 kksMWj home-carousel-info--subtitle"></h3>
                              </div>
                              <div className="Layout-sc-1xcs6mc-0 daZyRV">
                                {/* 외부 링크 생성 재사용성 고려!!*/}
                                <OutLink/>
                              </div>
                            </div>
                          </div>
                          <div className="Layout-sc-1xcs6mc-0">
                                    <span className="CoreText-sc-1txzju1-0 dLeJdh">
                                      <div className="Layout-sc-1xcs6mc-0 xxjeD home-notify-cta">
                                        <BroadCastingNotiButton/>
                                      </div>
                                    </span>
                          </div>
                        </div>
                        <div className="Layout-sc-1xcs6mc-0 jILLSw home-video__wrapper"
                             data-a-target="home-offline-carousel">
                          <div className="Layout-sc-11xcs6mc-0 copBMt home-video">
                            <div
                              className="Layout-sc-1xcs6mc-0 hzlEAx channel-page__video-player channel-page__video-player--home-carousel"
                              ref={videoWrapperRef}>
                              <div id='1234' className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                                <div className="ScAspectSpacer-sc-18km980-0 fCNuzu"></div>
                                <div data-target="persistent-player-content"
                                     className="Layout-sc-1xcs6mc-0 gMJXeQ"></div>
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
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="channel-root__info channel-root__info--offline channel-root__info--home hMuFhl" style={{
            transition: 'transform 500ms ease 0ms',
            opacity: '1',
          }}>
            <ChannelInfoContent/>
          </div>
        </div>
        <div className="Layout-sc-1xcs6mc-0 cLfLtl"></div>
      </div>
      <VideoPlayer videoWrapperStyles={videoWrapperStyles}/>
    </div>

  )
}
export default StreamerPage;