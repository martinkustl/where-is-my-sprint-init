import { Link } from 'react-router';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AppVersionsPageHeader = () => {
  const { t } = useTranslation();
  return (
    <CardHeader className="relative z-10">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold text-white">
            {t('appVersions.header.title')}
          </CardTitle>
          <CardDescription className="text-slate-300">
            {t('appVersions.header.description')}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-green-400/50 bg-green-500/20 text-green-200 transition-all duration-300 hover:bg-green-500/30 hover:text-green-100"
          >
            <Link to="/app-versions/new">
              <Plus className="mr-2 h-4 w-4" />
              {t('appVersions.header.createNew')}
            </Link>
          </Button>
        </div>
      </div>
    </CardHeader>
  );
};

export default AppVersionsPageHeader;
