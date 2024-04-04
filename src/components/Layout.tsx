import {Navbar} from "@/components/Navbar";
import React, {useEffect} from "react";
import SideBar from "@/components/SideBar";
import {useRecoilValue} from "recoil";
import {switchState} from "@/recoil/recoilAtoms";

const Layout = ({
                  children,
                }: {
  children: React.ReactNode
}) => {
  const darkMode = useRecoilValue(switchState)
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);

    return () => {
      document.body.classList.remove("dark");
    };
  },[darkMode])
  return (
    <html>
    <body className="flex flex-col h-screen overflow-hidden">
    <div className="flex-0 w-full h-12">
      <Navbar/>
    </div>
    <div className="dShujj">
      <div>
        <SideBar/>
      </div>
      <div className="InjectLayout-sc-1i43xsx-0 iA-duFH twilight-main">
        <header id="twilight-sticky-header-root"></header>
        <div className="root-scrollable scrollable-area" data-a-target="root-scroller" data-simplebar="init">
          {/*<div className="simplebar-track vertical" style={{visibility: 'visible'}}>*/}
          {/*  <div className="simplebar-scrollbar" style={{top: '2px', height: '597px'}}></div>*/}
          {/*</div>*/}
          {/*<div className="simplebar-track horizontal" style={{visibility: 'hidden'}}>*/}
          {/*  <div className="simplebar-scrollbar" style={{left: '2px', width: '1055px'}}></div>*/}
          {/*</div>*/}
          <div className="simplebar-scroll-content" style={{paddingRight: '22px', marginBottom: '-44px'}}>
            <div className="simplebar-content home__scrollable-content"
                 style={{paddingBottom: '22px', marginRight: '-22px'}}>
              <div className="Layout-sc-1xcs6mc-0 jNrYjU root-scrollable__wrapper">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Layout-sc-1xcs6mc-0 fYwRhm snackbar-list__container snackbar-overlay__list" aria-live="polite">
        <div className="Layout-sc-1xcs6mc-0 iEVzKC">
          <div className="InjectLayout-sc-1i43xsx-0 hWukFy snackbar-list__items tw-transition-group"></div>
        </div>
      </div>
    </div>

    </body>
    </html>
  )
}
export default Layout;