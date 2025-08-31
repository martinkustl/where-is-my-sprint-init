import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import type { DateRange } from 'react-day-picker';

type Props = {
  value?: Date | DateRange;
} & Omit<ComponentProps<'button'>, 'value'>;

const DatePickerButton: FC<PropsWithChildren<Props>> = ({
  children,
  value,
  ...props
}) => {
  return (
    <Button
      {...props}
      type="button"
      variant="outline"
      className={cn(
        'w-full justify-start border-slate-600/50 bg-slate-800/50 text-left font-normal text-white hover:bg-slate-700/50',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        !value && 'text-muted-foreground',
      )}
    >
      {children}
      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    </Button>
  );
};

export default DatePickerButton;
