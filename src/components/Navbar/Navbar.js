import styled from "styled-components"
import NavItem from "./NavItem"

import { URLs } from "../../utils/appURLs";

const SectionNav = styled.section`
  width: 20vw;
  height: 100vh;
  padding: 2em;
  background-color: var(--rich-black-fogra);
`
const Title = styled.h2`
  font: bold 2em var(--primary-font);
  color: var(--white);
  line-height: 120%;
  margin-bottom: 1em;
`
export default function NavBar() {
  
  return(
    <SectionNav>
      <Title>Home Finance</Title>
      <nav>
        <ul>
          {URLs.map((url, index) => {
            return(
              <NavItem link={url.link} key={index}>
                {url.name}
              </NavItem>
              )
            })
          }
        </ul>
      </nav>
    </SectionNav>
  )
}