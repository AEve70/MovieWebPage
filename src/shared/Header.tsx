export default function Header() {

    return (
        <header className="bg-white border-b-2 border-[#3CCFAF] rounded-lg shadow-md m-4">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8"
            >
                <div className="flex items-center gap-x-12">
                    <a href="/" className="p-1.5">
                        <img
                            alt="logo"
                            src="/src/images/claqueta.png"
                            className="h-8 w-auto"
                        />
                    </a>
                    <a href="/" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
                        Home
                    </a>
                    <a href="/movies" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
                        Movies
                    </a>
                </div>
            </nav>
        </header>
    )
}