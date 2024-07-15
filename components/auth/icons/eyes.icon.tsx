import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const EyeSvg = (props: SvgProps) => (
  <Svg
    //xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke="silver"
      strokeWidth={2}
      d="M7 11c-2.727 0-6-2.778-6-5s3.273-5 6-5 6 2.778 6 5-3.273 5-6 5ZM6 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
    />
  </Svg>
)
export default EyeSvg