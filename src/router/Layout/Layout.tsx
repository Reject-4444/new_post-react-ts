import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/UI/Navbar/Navbar';
import { Footer } from '../../components/UI/Footer/Footer';
import './Layout.scss';

export const Layout = () => {
    return (
        <div className="main-container">
            <header className="header">
                <Navbar />
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}