function Header({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
    ];

    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">My App</h1>
                <nav className="nav">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                            onClick={() => setCurrentPage(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;