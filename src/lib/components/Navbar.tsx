export default function Navbar() {
    return (
        <nav>
            <div className="p-4 flex justify-center items-center">
                <div className="space-x-10">
                    <a href="#about" className="text-lg fira hover:text-sky-400 transition nav-underline">About</a>
                    <a href="#projects" className="text-lg fira hover:text-sky-400 transition nav-underline">Projects</a>
                    <a href="#contact" className="text-lg fira hover:text-sky-400 transition nav-underline">Contact</a>
                </div>
            </div>
        </nav>
    )
}