import { NavLink } from "react-router-dom";

import styled from "styled-components"

const NavItemLi = styled.li`
  margin: 1em 0;
  & > a {
    position: relative;
    font: 400 1.5em var(--primary-font);
    color: var(--white);
    transition: 300ms;
    &:hover {
      color: var(--blue-jeans);
    }
  }
`

export default function NavItem(props) {
  return(
    <NavItemLi>
      <NavLink to={props.link}>{props.children}</NavLink>
    </NavItemLi>
  );
}