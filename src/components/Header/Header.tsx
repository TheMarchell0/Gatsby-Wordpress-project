import React, { FC } from "react"
import { useHeaderMenu } from "../../hooks/useHeaderMenu"
import { Link } from "gatsby"
import styled from "styled-components"

const Header: FC = () => {
  const headerMenuItems = useHeaderMenu().map(item=> {
    return <Link key={item.id} to={item.path}>{item.label}</Link>
  });

  return <>
    <Navigation>
      {headerMenuItems}
    </Navigation>
  </>
}

const Navigation = styled.nav`
display: flex;
flex-direction: column;
`

export default Header
