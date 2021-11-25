import React, { FC } from "react"
import styled from "styled-components"
import { Header } from "../components/Header"

const MainLayout: FC = ({ children }) => {
  return (
    <Root>
      <Header />
      {children}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
`

export default MainLayout
