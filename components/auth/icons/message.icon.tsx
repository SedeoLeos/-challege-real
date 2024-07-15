import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const MessageSvg = (props: SvgProps) => (
  <Svg
    //xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="silver"
      fillRule="evenodd"
      d="M1.667 4.375c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v11.25c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V4.375Zm1.666.833v9.584h13.334V5.208H3.333Z"
      clipRule="evenodd"
    />
    <Path
      fill="silver"
      fillRule="evenodd"
      d="M1.867 3.833c.3-.35.826-.39 1.175-.09L10 9.705l6.958-5.964a.833.833 0 1 1 1.084 1.266l-7.5 6.428a.833.833 0 0 1-1.084 0l-7.5-6.428a.833.833 0 0 1-.09-1.175Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default MessageSvg
