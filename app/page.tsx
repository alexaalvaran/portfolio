
import Header from "./components/header";
import TechStack from "./components/techstack";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <TechStack />
            <Projects />
            <Contact />
        </main>
  );
}
