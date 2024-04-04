import React from "react";
import {useRecoilValue} from "recoil";
import {switchState} from "@/recoil/recoilAtoms";

const ProfileButton = () => {
  const darkMode = useRecoilValue(switchState);
  return (
    <div className="Layout-sc-1xcs6mc-0 hatIYF">
      <div data-test-selector="toggle-balloon-wrapper__mouse-enter-detector" style={{width: '100%', height: '100%', display: "inherit"}}>
        <div data-a-target="user-menu-toggle" data-test-selector="user-menu__toggle" aria-label="유저 메뉴"style={{width: '100%', height: '100%', display: "inherit"}}>
          <div className="eSFFfM"
                  aria-label="유저 메뉴"style={{width: '100%', height: '100%', display: "inherit"}}>
            <div className="fjwcvR">
              <div className="bCFHWE tw-svg">
                <svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                  <path fillRule="evenodd"
                        fill={darkMode ? "#ffffff" : ""}
                        d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3
                        0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0
                        1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3
                        3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5
                         7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                        clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileButton;
