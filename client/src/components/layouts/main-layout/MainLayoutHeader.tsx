import { Rocket } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ButtonSwitchLanguage from './ButtonSwitchLanguage';

const MainLayoutHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-slate-700/50 bg-slate-900/80 shadow-2xl shadow-purple-500/20 backdrop-blur-xl">
      {/* Enhanced shiny overlay with better contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 p-2 shadow-lg">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-900 bg-green-400"></div>
                </div>
                <h1 className="bg-gradient-to-r from-sky-300 to-sky-400 bg-clip-text text-2xl font-bold text-transparent">
                  {t('mainLayout.title')}
                </h1>
              </div>
            </Link>
          </div>
          <div>
            <ButtonSwitchLanguage />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainLayoutHeader;
