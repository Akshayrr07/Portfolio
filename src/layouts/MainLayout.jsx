import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '96px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
