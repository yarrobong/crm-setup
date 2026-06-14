import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <div className="flex-1 w-full flex flex-col pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
