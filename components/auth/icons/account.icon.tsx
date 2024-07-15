import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const AccountSvg = (props: SvgProps) => (
  <Svg
    //xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G fill="silver" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M10 3.334a2.419 2.419 0 1 0 0 4.837 2.419 2.419 0 0 0 0-4.837ZM5.915 5.753a4.085 4.085 0 1 1 8.17 0 4.085 4.085 0 0 1-8.17 0ZM7.932 12.825a4.598 4.598 0 0 0-4.599 4.599v.076a.833.833 0 0 1-1.666 0v-.076a6.265 6.265 0 0 1 6.265-6.265h4.136a6.265 6.265 0 0 1 6.265 6.265v.076a.833.833 0 0 1-1.666 0v-.076a4.598 4.598 0 0 0-4.599-4.599H7.933Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default AccountSvg
