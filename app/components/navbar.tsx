export default function Navbar() {
    return (
        <nav className="fixed sticky top-0 left-0 w-full z-10 px-6 py-4 bg-amber-50 text-zinc-500">
            <ul className="flex w-full justify-end items-center font-bold">
                <li><a href="#About" className="hover:text-zinc-700"> ABOUT </a></li>
                <li><a href="#TechStack" className="hover:text-zinc-700"> TECH STACK </a></li>
                <li><a href="#Projects" className="hover:text-zinc-700"> PROJECTS </a></li>
                <li><a href="#Contact" className="hover:text-zinc-700"> CONTACT </a></li>
            </ul>
        </nav>
    )
}