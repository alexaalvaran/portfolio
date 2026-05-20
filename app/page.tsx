
import Header from "./components/header";
import TechStack from "./components/techstack";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <TechStack />
            <Projects />
        </main>
  );
}
