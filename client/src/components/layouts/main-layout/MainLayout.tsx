import type { FC } from 'react';
import { Outlet } from 'react-router';
import MainLayoutHeader from './MainLayoutHeader';

const MainLayout: FC = () => {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950/90 to-slate-950"></div>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-sky-900/20 via-sky-800/30 to-sky-900/20"></div>
      <div
        className="absolute inset-0 min-h-screen opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(125, 211, 252, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(2, 132, 199, 0.15) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3"></div>

      <MainLayoutHeader />
      <div className="backdrop-blur-xl">
        <div className="relative z-10 mx-auto px-6 py-8">
          <div className="mb-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
