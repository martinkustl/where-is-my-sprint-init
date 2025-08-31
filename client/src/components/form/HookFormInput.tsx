import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useFormContext } from 'react-hook-form';
import type { ComponentProps, FC } from 'react';

type Props = {
  label: string;
  name: string;
  description?: string;
} & ComponentProps<'input'>;

const HookFormInput: FC<Props> = ({
  name,
  label,
  placeholder,
  description,
  ...props
}) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              value={field.value ?? ''}
              {...props}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default HookFormInput;
