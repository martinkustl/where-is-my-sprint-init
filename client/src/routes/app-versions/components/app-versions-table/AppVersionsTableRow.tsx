import type { AppVersion } from '@/client/index';
import { cn } from '@/lib/utils';
import type { FC } from 'react';
import AppVersionsTableVersionColumn from './AppVersionsTableVersionColumn';
import { hasProductionDelay } from './appVersionsTableService';
import AppVersionsTableSprintColumn from './AppVersionsTableSprintColumn';
import AppVersionsTableViewColumn from './AppVersionsTableViewColumn';

type Props = {
  appVersion: AppVersion;
};

const AppVersionsTableRow: FC<Props> = ({ appVersion }) => {
  return (
    <tr
      key={appVersion.id}
      className={cn('transition-colors duration-200 hover:bg-slate-800/50', {
        'border-l-4 border-red-500/50 bg-red-950/20':
          hasProductionDelay(appVersion),
      })}
    >
      <AppVersionsTableVersionColumn appVersion={appVersion} />
      {Object.values(appVersion.phases).map((phase) => {
        return (
          <AppVersionsTableSprintColumn
            key={phase.type}
            appVersionPhase={phase}
          />
        );
      })}
      <AppVersionsTableViewColumn appVersionId={appVersion.id} />
    </tr>
  );
};

export default AppVersionsTableRow;
