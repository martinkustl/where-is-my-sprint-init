import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { FC, PropsWithChildren } from 'react';
import type { Phase } from '@/types';
import AppVersionFormSectionIcon from './AppVersionFormSectionIcon';

type Props = {
  name: string;
  phase: Phase;
} & PropsWithChildren;

const AppVersionFormSection: FC<Props> = ({ children, name, phase }) => {
  return (
    <Card className="border border-slate-600/50 bg-slate-800/40">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg text-white">
          <div className="flex items-center">
            <AppVersionFormSectionIcon phase={phase} />
            {name}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};

export default AppVersionFormSection;
