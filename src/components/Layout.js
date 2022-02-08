import NavBar  from './Navbar/Navbar';

import styled from "styled-components";

const View = styled.div`
  display: flex;
  gap: 1.5em;
  width: 100vw;
  height: 100vh;
  background-color: '#f4f4f4';
`


export default function Layout({ children }) {
  return (
    <View>
      <NavBar />
      <main className="main-wrapper">
        { children }
      </main>
    </View>
  )
}