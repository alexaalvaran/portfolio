export default function Navbar() {
    return (
        <nav className="w-full sticky top-0 z-50 py-3 px-10 bg-amber-50 text-zinc-400">
            <ul className="flex flex-row w-full items-center justify-end gap-10 font-bold">
                <li><a href="#About" className="hover:text-zinc-600"> ABOUT </a></li>
                <li><a href="#TechStack" className="hover:text-zinc-600"> TECH STACK </a></li>
                <li><a href="#Projects" className="hover:text-zinc-600"> PROJECTS </a></li>
                <li><a href="#Contact" className="hover:text-zinc-600"> CONTACT </a></li>
            </ul>
        </nav>
    )
}