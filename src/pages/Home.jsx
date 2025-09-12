import About from "../components/About";
import Ad from "../components/Ad";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Medarbejdere from "../components/Medarbejdere";
import Newsletter from "../components/Newsletter";
import Udvalgte from "../components/Udvalgte";

export default function Home(){

    return(
        <>
        <Hero />
        <About />
        <Featured />
        <Udvalgte />
        <Newsletter />
        <Medarbejdere />
        <Ad />
        </>
    )
}