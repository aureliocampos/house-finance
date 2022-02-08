import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { firebaseApp } from "./utils/firebaseUtils";
import './App.css';

function App() {
  console.log(firebaseApp);

  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}

export default App;
