import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 flex flex-col justify-between">
        {children}
      </main>
      {!isHome && <Footer />}
    </div>
  );
};

export default MainLayout;
