import { NavLink } from "react-router-dom";

import styled from "styled-components"

const SectionNav = styled.section`
  width: 20vw;
  height: 100vh;
  padding: 2em;
  background-color: var(--rich-black-fogra);
`
const NavItem = styled.li`
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
export default function NavBar() {
  return(
    <SectionNav>
      <nav>
        <ul>
          <NavItem className="nav-primary">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem className="nav-primary">
            <NavLink to="/about">Sobre</NavLink>
          </NavItem>
        </ul>
      </nav>
    </SectionNav>
  )
}