import { type FC, useMemo } from 'react';
import type { PhaseInfo } from '../../types';
import { Code, Code2, Rocket, TestTube, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AppVersionsTableHeaderPhaseColumn from './AppVersionsTableHeaderPhaseColumn';

const AppVersionsTableHeader: FC = () => {
  const { t } = useTranslation();

  const phaseInfos: PhaseInfo[] = useMemo(
    () => [
      {
        phase: 'DELIVERY_1',
        phaseName: t(
          'appVersions.table.header.headerColumns.deliverySprintOne.label',
        ),
        icon: Code,
        description: t(
          'appVersions.table.header.headerColumns.deliverySprintOne.description',
        ),
      },
      {
        phase: 'DELIVERY_2',
        phaseName: t(
          'appVersions.table.header.headerColumns.deliverySprintTwo.label',
        ),
        icon: Code2,
        description: t(
          'appVersions.table.header.headerColumns.deliverySprintTwo.description',
        ),
      },
      {
        phase: 'TESTING',
        phaseName: t(
          'appVersions.table.header.headerColumns.testingSprint.label',
        ),
        icon: TestTube,
        description: t(
          'appVersions.table.header.headerColumns.testingSprint.description',
        ),
      },
      {
        phase: 'USER_TESTING',
        phaseName: t(
          'appVersions.table.header.headerColumns.userTestingSprint.label',
        ),
        icon: Users,
        description: t(
          'appVersions.table.header.headerColumns.userTestingSprint.description',
        ),
      },
      {
        phase: 'PRODUCTION',
        phaseName: t(
          'appVersions.table.header.headerColumns.productionRelease.label',
        ),
        icon: Rocket,
        description: t(
          'appVersions.table.header.headerColumns.productionRelease.description',
        ),
      },
    ],
    [t],
  );

  return (
    <thead>
      <tr>
        <th className="sticky left-0 min-w-[220px] border-b border-slate-700/50 bg-slate-900/95 p-4 text-center font-medium text-slate-300 backdrop-blur-sm">
          {t('appVersions.table.header.headerColumns.version.label')}
        </th>
        {phaseInfos.map((phase) => {
          return (
            <AppVersionsTableHeaderPhaseColumn
              key={phase.phase}
              phase={phase}
            />
          );
        })}
        <th className="border-b border-slate-700/50 p-4 text-center font-medium text-slate-300">
          {t('appVersions.table.header.headerColumns.actions.label')}
        </th>
      </tr>
    </thead>
  );
};

export default AppVersionsTableHeader;
