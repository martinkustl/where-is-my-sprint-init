import type { FC } from 'react';
import type { PhaseInfo } from '../../types';
import { cn } from '@/lib/utils';
import AppPhaseIcon from '../AppPhaseIcon';

type Props = {
  phase: PhaseInfo;
};

const AppVersionsTableHeaderPhaseColumn: FC<Props> = ({ phase }) => {
  return (
    <th
      key={phase.phase}
      className="min-w-[200px] border-b border-slate-700/50 p-4 text-center font-medium text-slate-300 opacity-100 transition-all duration-300"
    >
      <div className="space-y-3">
        <AppPhaseIcon className="p-3" iconClassName="mb-2" phase={phase.phase}>
          <div className="text-sm font-semibold text-white transition-all duration-300">
            {phase.phaseName}
          </div>
        </AppPhaseIcon>
        <div
          className={cn('text-xs transition-all duration-300', {
            'text-sky-300': phase.phase === 'DELIVERY_1',
            'text-cyan-300': phase.phase === 'DELIVERY_2',
            'text-orange-300': phase.phase === 'TESTING',
            'text-purple-300': phase.phase === 'USER_TESTING',
            'text-emerald-300': phase.phase === 'PRODUCTION',
          })}
        >
          {phase.description}
        </div>
      </div>
    </th>
  );
};

export default AppVersionsTableHeaderPhaseColumn;
