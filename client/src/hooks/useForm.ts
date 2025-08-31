import { zodResolver } from '@hookform/resolvers/zod';
import {
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';
import { useForm as useHookForm } from 'react-hook-form';
import { ZodObject } from 'zod';

const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any,
>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSchema: ZodObject<any, any>,
  props?: UseFormProps<TFieldValues, TContext>,
): UseFormReturn<TFieldValues, TContext> => {
  return useHookForm<TFieldValues, TContext>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver<any, any, any>(formSchema),
    ...props,
  });
};

export default useForm;
