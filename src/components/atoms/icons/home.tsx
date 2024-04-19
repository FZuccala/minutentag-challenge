import * as React from "react"
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={83}
    height={77}
    fill="none"
  >
    <g filter="url(#a)">
      <circle cx={41.5} cy={41.5} r={21.5} fill="#FF9F24" fillOpacity={0.24} />
    </g>
    <path
      fill="#FF9F24"
      fillRule="evenodd"
      d="M44 51h4.894c1.166 0 2.117-.929 2.106-2.07v-9.754a2.04 2.04 0 0 0-.745-1.573l-7.389-6.112a2.147 2.147 0 0 0-2.732 0l-7.389 6.112c-.475.39-.745.961-.745 1.573v9.755c0 1.14.95 2.069 2.117 2.069H39v-5.5a2.5 2.5 0 0 1 5 0V51Z"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="a"
        width={83}
        height={83}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_405_469"
          stdDeviation={10}
        />
      </filter>
    </defs>
  </svg>
)
export default HomeIcon