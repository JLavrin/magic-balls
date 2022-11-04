import { FunctionComponent, PropsWithChildren } from "react"

import Topbar from "../Topbar"

import { StyledLayout, StyledContent } from "./Layout.styled"

type Props = {

} & PropsWithChildren

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Topbar/>
      <StyledContent>
        {children}
      </StyledContent>
    </StyledLayout>
  )
}

export default Layout