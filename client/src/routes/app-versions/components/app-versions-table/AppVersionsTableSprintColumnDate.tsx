import type { FC } from 'react';
import { cn } from '@/lib/utils';
import useFormatDate from '@/hooks/useFormatDate';
import type { OrdinaryAppPhase, ProductionAppPhase } from '@/client/index';
import { useTranslation } from 'react-i18next';

type Props = {
  appVersionPhase: OrdinaryAppPhase | ProductionAppPhase;
};

const isProductionPhase = (
  appVersionPhase: OrdinaryAppPhase | ProductionAppPhase,
): appVersionPhase is ProductionAppPhase => {
  return appVersionPhase.type === 'PRODUCTION';
};

const AppVersionsTableSprintColumnDate: FC<Props> = ({ appVersionPhase }) => {
  const formatDate = useFormatDate();
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        'rounded-lg border border-slate-600/50 bg-slate-800/60 px-3 py-1.5',
        {
          'border-slate-600/40 bg-slate-800/40':
            appVersionPhase.status === 'NOT_STARTED',
        },
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center text-xs text-slate-300',
          {
            'text-slate-400': appVersionPhase.status === 'NOT_STARTED',
          },
        )}
      >
        <span>
          {isProductionPhase(appVersionPhase)
            ? formatDate(appVersionPhase.releaseDate, 'DD_MM_YYYY')
            : `${formatDate(appVersionPhase.startDate, 'DD_MM_YYYY')} - ${formatDate(appVersionPhase.endDate, 'DD_MM_YYYY')}`}
        </span>
      </div>
      {appVersionPhase.status === 'NOT_STARTED' && (
        <div className="mt-0.5 text-xs text-slate-500">
          {t('appVersions.table.body.columns.date.notStarted')}
        </div>
      )}
    </div>
  );
};

export default AppVersionsTableSprintColumnDate;
