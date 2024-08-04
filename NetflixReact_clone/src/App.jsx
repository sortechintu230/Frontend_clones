import Nav from "./components/Nav";
import Content from "./components/Content";
import './App.css'
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Foot from "./Foot";


export default function App() {
  return (
    <>
      <main>
        <Nav />
        <Content/>
      </main>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Foot/>
    </>
  )
}