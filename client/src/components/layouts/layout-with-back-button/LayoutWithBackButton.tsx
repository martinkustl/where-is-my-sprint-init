import { Link, Outlet } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LayoutWithBackButton = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Link
          to="/"
          className="flex items-center text-sky-400 transition-colors hover:text-sky-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('layoutWithBackButton.backButton')}
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutWithBackButton;
