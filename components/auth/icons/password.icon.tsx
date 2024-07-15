import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PasswordSvg = (props: SvgProps) => (
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
      d="M1.667 8.125c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833V17.5c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V8.125Zm1.666.833v7.709h13.334V8.958H3.333Z"
      clipRule="evenodd"
    />
    <Path
      fill="silver"
      fillRule="evenodd"
      d="M10 3.333c-2.099 0-3.854 1.777-3.854 4.034a.833.833 0 1 1-1.667 0c0-3.118 2.443-5.7 5.521-5.7s5.52 2.582 5.52 5.7a.833.833 0 1 1-1.666 0c0-2.257-1.755-4.034-3.854-4.034ZM10 11.438c.46 0 .833.373.833.833v.938a.833.833 0 1 1-1.666 0v-.938c0-.46.373-.833.833-.833Z"
      clipRule="evenodd"
    />
  </Svg>
)


export default PasswordSvg
