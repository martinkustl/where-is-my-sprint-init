import { Badge } from '@/components/ui/badge';
import { hasProductionDelay } from './appVersionsTableService';
import { AlertTriangle } from 'lucide-react';
import type { FC } from 'react';
import type { AppVersion } from '@/client/index';
import { useTranslation } from 'react-i18next';

type Props = {
  appVersion: AppVersion;
};

const AppVersionsTableVersionColumn: FC<Props> = ({ appVersion }) => {
  const { t } = useTranslation();

  return (
    <td className="sticky left-0 z-10 border-b border-slate-700/30 bg-slate-900/95 p-4 backdrop-blur-sm">
      <div className="space-y-3">
        <div className="flex flex-col items-center space-x-2">
          <div className="text-lg font-semibold text-white">
            {appVersion.version}
          </div>
          {hasProductionDelay(appVersion) && (
            <Badge
              variant="outline"
              className="border-red-400/60 bg-gradient-to-r from-red-500/40 to-red-600/50 text-xs text-red-100"
            >
              <AlertTriangle className="mr-1 h-3 w-3" />
              {t('appVersions.table.body.columns.appVersion.delayedProdLabel')}
            </Badge>
          )}
        </div>
      </div>
    </td>
  );
};

export default AppVersionsTableVersionColumn;
