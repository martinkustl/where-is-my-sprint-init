import type { Phase } from '@/types';
import type { FC } from 'react';
import AppPhaseIcon from '../../../components/AppPhaseIcon';

type Props = {
  phase: Phase;
};

const AppVersionFormSectionIcon: FC<Props> = ({ phase }) => {
  return <AppPhaseIcon className="mr-3" phase={phase} />;
};

export default AppVersionFormSectionIcon;
