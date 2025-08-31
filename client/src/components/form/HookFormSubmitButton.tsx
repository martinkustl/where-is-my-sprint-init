import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/button';
import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

type Props = {
  className?: string;
} & PropsWithChildren;

const HookFormSubmitButton: FC<Props> = ({ className, children }) => {
  const form = useFormContext();
  const { t } = useTranslation();

  return (
    <Button
      type="submit"
      disabled={form.formState.isSubmitting}
      className={cn(
        'bg-gradient-to-r from-sky-500 to-sky-600 font-medium text-white shadow-lg hover:from-sky-600 hover:to-sky-700 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    >
      {form.formState.isSubmitting ? t('submitButton.loading') : children}
    </Button>
  );
};

export default HookFormSubmitButton;
