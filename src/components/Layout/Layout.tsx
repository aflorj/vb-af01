import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
export default function Layout() {
  return (
    <div className="container">
      <header className="header">
        <div className="page">
          <a href="#" className="logo">
            <img src="images/svg/logo-v.svg" alt="Viberate" />
            Viberate
          </a>
          <Navbar />
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
