'use client'

import React, { useState, useEffect } from 'react';
import {useRecoilValue} from "recoil";
import {switchState} from "@/recoil/recoilAtoms";

const Search = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const darkMode = useRecoilValue(switchState);
  useEffect(() => {

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth <= 600);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 이펙트 실행

  return (
    <div className="flex-grow flex items-center h-12">
      {/* Add your search input field and any other necessary elements */}
      {!isSmallScreen && (
        <input
          type="text"
          placeholder="검색"
          className={darkMode ? "py-2 px-3 border bg-[#18181b] border-gray-300 " : "py-2 px-3 border border-gray-300 "}
          style={{

            maxWidth: '60rem',
            width: '25rem',
            height: '2rem',
            // margin: '0 1rem',
            // background: 'rgba(255, 255, 255, .4)',
            borderBottomLeftRadius: '5px',
            borderTopLeftRadius: '5px'
          }}
        />
      )}
      {/* You can add a search icon or button here if needed */}
      <button
        className={`${darkMode ? 'bg-[#53535F61] bg-opacity-100' : 'bg-gray-200'} ${isSmallScreen ? 'md:ml-2' : 'md:mr-2'} rounded-r-lg`}>


        {/* 검색 아이콘 추가 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={darkMode ? "h-8 w-8  text-white" : "h-8 w-8 text-gray-700"}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18 18l-3-3"/>
          <circle cx="10" cy="10" r="6" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  );
};

export default Search;
