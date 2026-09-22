import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../hooks/useTheme.jsx';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;