import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Основной макет приложения. Задаёт структуру для всех страниц.
 */
export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-primary-light selection:text-primary-dark">
      <Header />
      
      <main className="flex-grow flex flex-col">
        {/* Outlet рендерит компонент текущего маршрута */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
