import { type ReactNode } from 'react';
import {
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

import { Form } from '../ui/form';

export type HookFormProps<T extends FieldValues = FieldValues> = {
  onSubmit: SubmitHandler<T>;
  children?: ReactNode;
  form: UseFormReturn<T>;
  className?: string;
};

const HookForm = <T extends FieldValues = FieldValues>({
  onSubmit,
  form,
  children,
  className,
}: HookFormProps<T>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </Form>
  );
};

export default HookForm;
