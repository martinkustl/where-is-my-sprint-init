import { AlertTriangle } from 'lucide-react';
import type { FC } from 'react';
import useFormatDate from '@/hooks/useFormatDate';
import { useTranslation } from 'react-i18next';

type Props = {
  delayedReleaseDate: string;
};

const AppVersionsTableSprintColumnDelayedReleaseDate: FC<Props> = ({
  delayedReleaseDate,
}) => {
  const formatDate = useFormatDate();
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border border-red-500/50 bg-gradient-to-r from-red-950/40 to-red-900/50 px-3 py-2">
      <div className="mb-1 flex items-center text-xs text-red-200">
        <AlertTriangle className="mr-1.5 h-3 w-3" />
        <span className="font-medium">
          {t('appVersions.table.body.columns.sprint.delayedProductionDate')}
        </span>
      </div>
      <div className="text-sm font-semibold text-red-100">
        {formatDate(delayedReleaseDate, 'DD_MM_YYYY')}
      </div>
    </div>
  );
};

export default AppVersionsTableSprintColumnDelayedReleaseDate;
