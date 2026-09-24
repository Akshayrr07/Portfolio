import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../hooks/useTheme.jsx';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <Suspense fallback={<div className="container mx-auto px-4 py-20" role="status">Loading project…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;