import type { FC } from 'react';
import AppVersionsTableSprintColumnBadge from './AppVersionsTableSprintColumnBadge';
import AppVersionsTableSprintColumnDate from './AppVersionsTableSprintColumnDate';
import AppVersionsTableSprintColumnDelayedReleaseDate from './AppVersionsTableSprintColumnDelayedReleaseDate';
import type { OrdinaryAppPhase, ProductionAppPhase } from '@/client/index';

type Props = {
  appVersionPhase: OrdinaryAppPhase | ProductionAppPhase;
};

const isProductionPhase = (
  appVersionPhase: OrdinaryAppPhase | ProductionAppPhase,
): appVersionPhase is ProductionAppPhase => {
  return appVersionPhase.type === 'PRODUCTION';
};

const AppVersionsTableSprintColumn: FC<Props> = ({ appVersionPhase }) => {
  const { type } = appVersionPhase;

  return (
    <td key={type} className={'border-b border-slate-700/30 p-4 text-center'}>
      <div className="flex flex-col items-center space-y-3">
        <AppVersionsTableSprintColumnBadge appVersionPhase={appVersionPhase} />
        <div className="space-y-2">
          <AppVersionsTableSprintColumnDate appVersionPhase={appVersionPhase} />
          {isProductionPhase(appVersionPhase) &&
            appVersionPhase?.delayedReleaseDate && (
              <AppVersionsTableSprintColumnDelayedReleaseDate
                delayedReleaseDate={appVersionPhase.delayedReleaseDate}
              />
            )}
        </div>
      </div>
    </td>
  );
};

export default AppVersionsTableSprintColumn;
