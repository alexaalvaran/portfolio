
import Header from "./components/header";
import TechStack from "./components/techstack";

export default function Home() {
    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-start bg-amber-50 text-zinc-500">
            <Header />
            <TechStack />
        </main>
  );
}
