import Header from './Header';
import Footer from './Footer';

function Layout({ children, currentPage, setCurrentPage }) {
    return (
        <div className="app-container">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;