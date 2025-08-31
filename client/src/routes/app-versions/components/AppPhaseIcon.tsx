import type { FC, PropsWithChildren } from 'react';
import { Code, Code2, Rocket, TestTube, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Phase } from '@/types';

const getIconAndClassName = (phase: Phase) => {
  switch (phase) {
    case 'DELIVERY_1':
      return {
        icon: Code,
        innerIconClassName: 'text-sky-400',
      };
    case 'DELIVERY_2':
      return {
        icon: Code2,
        innerIconClassName: 'text-cyan-400',
      };
    case 'TESTING':
      return {
        icon: TestTube,
        innerIconClassName: 'text-orange-400',
      };
    case 'USER_TESTING':
      return {
        icon: Users,
        innerIconClassName: 'text-purple-400',
      };
    case 'PRODUCTION':
      return {
        icon: Rocket,
        innerIconClassName: 'text-emerald-400',
      };
    default:
      throw new Error('Invalid phase provided');
  }
};

type Props = {
  phase: Phase;
  className?: string;
  iconClassName?: string;
};

const AppPhaseIcon: FC<PropsWithChildren<Props>> = ({
  phase,
  children,
  className,
  iconClassName,
}) => {
  const { icon: Icon, innerIconClassName } = getIconAndClassName(phase);

  return (
    <div
      className={cn(
        `rounded-xl border bg-gradient-to-br p-2 shadow-lg ring-2 transition-all duration-300`,
        {
          'border-sky-500/60 from-sky-500/40 to-sky-600/50 shadow-sky-500/20 ring-sky-400/30':
            phase === 'DELIVERY_1',
          'border-cyan-500/60 from-cyan-500/40 to-cyan-600/50 shadow-cyan-500/20 ring-cyan-400/30':
            phase === 'DELIVERY_2',
          'border-orange-500/60 from-orange-500/40 to-orange-600/50 shadow-orange-500/20 ring-orange-400/30':
            phase === 'TESTING',
          'border-purple-500/60 from-purple-500/40 to-purple-600/50 shadow-purple-500/20 ring-purple-400/30':
            phase === 'USER_TESTING',
          'border-emerald-500/60 from-emerald-500/40 to-emerald-600/50 shadow-emerald-500/20 ring-emerald-400/30':
            phase === 'PRODUCTION',
        },
        className,
      )}
    >
      <Icon
        className={cn(
          'mx-auto h-6 w-6 transition-all duration-300',
          innerIconClassName,
          iconClassName,
        )}
      />
      {children}
    </div>
  );
};

export default AppPhaseIcon;
