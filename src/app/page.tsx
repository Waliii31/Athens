import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/section5";
import Section6 from "./Components/section6";
import Footer from "./Components/Footer";
export default function Home() {

  return (
    <>
        <Loader/>
        <Navbar/>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
    </>
  );
}
