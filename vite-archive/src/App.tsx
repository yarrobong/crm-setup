import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import ScrollToTop from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { CasesPage } from './pages/CasesPage';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="cases" element={<CasesPage />} />
          {/* Дополнительные маршруты можно добавить здесь */}
          <Route path="*" element={
            <div className="flex-1 flex items-center justify-center py-20 px-4 text-center">
              <div>
                <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
                <p className="text-xl text-text-secondary mb-8">Страница находится в разработке или не существует.</p>
                <a href="/" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 font-medium text-white transition-colors hover:bg-primary-dark">
                  На главную
                </a>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}
