import React, { FC } from "react"
import { useHeaderMenu } from "../../hooks/useHeaderMenu"

const Header: FC = () => {
  const headerMenuItems = useHeaderMenu()

  return <h1>Header</h1>
}

export default Header
