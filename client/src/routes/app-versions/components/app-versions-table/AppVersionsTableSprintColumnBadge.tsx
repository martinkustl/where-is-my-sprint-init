import { Badge } from '@/components/ui/badge';
import { type FC, useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { OrdinaryAppPhase, ProductionAppPhase } from '@/client/index';
import { useTranslation } from 'react-i18next';

type Props = {
  appVersionPhase: OrdinaryAppPhase | ProductionAppPhase;
};

const AppVersionsTableSprintColumnBadge: FC<Props> = ({ appVersionPhase }) => {
  const { t } = useTranslation();

  const statusText = useMemo(() => {
    switch (appVersionPhase.status) {
      case 'NOT_STARTED':
        return t('appVersions.table.body.columns.statusBadge.badge.notStarted');
      case 'IN_PROGRESS':
        return t('appVersions.table.body.columns.statusBadge.badge.inProgress');
      case 'COMPLETED':
        return t('appVersions.table.body.columns.statusBadge.badge.completed');
      case 'DELAYED':
        return t('appVersions.table.body.columns.statusBadge.badge.delayed');
      default:
        return '—';
    }
  }, [t, appVersionPhase.status]);

  return (
    <div className="relative">
      <Badge
        variant="outline"
        className={cn(
          'text-secondary cursor-pointer px-3 py-1.5 text-sm font-semibold transition-all duration-300 hover:scale-105',
          {
            'border-emerald-400/70 bg-gradient-to-br from-emerald-500/50 to-emerald-600/60 text-emerald-100 shadow-lg shadow-emerald-500/40':
              appVersionPhase.status === 'COMPLETED',
            'border-gray-400/50 bg-gradient-to-br from-gray-600/40 to-gray-700/50 text-gray-200':
              appVersionPhase.status === 'NOT_STARTED',
            'border-red-400/80 bg-gradient-to-br from-red-600/60 to-red-700/70 text-red-100 shadow-lg shadow-red-500/40':
              appVersionPhase.status === 'DELAYED',
            'border-cyan-300/80 bg-gradient-to-br from-cyan-400/70 to-cyan-500/80 text-white shadow-xl ring-2 shadow-cyan-500/50 ring-cyan-400/40':
              appVersionPhase.status === 'IN_PROGRESS',
          },
        )}
      >
        {statusText}
      </Badge>
    </div>
  );
};

export default AppVersionsTableSprintColumnBadge;
