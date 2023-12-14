const Header = () => {
    return (
        <header className="bg-slate-700 flex justify-center">
            <div className="container flex justify-between items-center h-24 w-3/5">
                <div>
                    <a href="/" className="text-3xl font-bold p-2" style={{ border: "5px solid #66FCF1" }}>Auction</a>
                </div>
                <nav>
                    <ul className="flex gap-8 text-2xl font-semibold">
                        <li>
                            <a href="/auth" className="hover:border-b-2">Вход</a>
                        </li>
                        <li>
                            <a href="/register" className="hover:border-b-2">Регистрация</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header