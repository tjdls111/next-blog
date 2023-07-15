import React from 'react'

const Footer = () => {
  return (
    <footer>
      <ul className="flex flex-col gap-1 text-xs absolute bottom-0 left-0 z-10 text-bold pl-3 pb-2">
        <li>
          <a
            className="hover:underline  hover:text-blue"
            href="https://snrnsidy.tistory.com/"
            target="_blank"
          >
            Tistory
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:text-blue"
            href="https://www.acmicpc.net/user/snrnsidy"
            target="_blank"
          >
            Baekjoon
          </a>
        </li>
      </ul>
      <div className="absolute bottom-0 left-0 right-0">
        <svg width="100%" height="120px" fill="none">
          <path fill="#F2D7D9">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
            ></animate>
          </path>
        </svg>
      </div>
    </footer>
  )
}
export default Footer
