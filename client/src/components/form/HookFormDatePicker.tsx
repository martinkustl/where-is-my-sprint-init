import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import useFormatDate from '@/hooks/useFormatDate';
import DatePickerButton from './DatePickerButton';

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  description?: string;
};

const HookFormDatePicker: FC<Props> = ({
  label,
  name,
  description,
  placeholder,
}) => {
  const form = useFormContext();
  const formatDate = useFormatDate();

  return (
    <FormField<Record<string, Date | undefined>>
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <DatePickerButton value={field.value}>
                  {field.value ? (
                    formatDate(field.value, 'DD_MM_YYYY')
                  ) : (
                    <span>{placeholder}</span>
                  )}
                </DatePickerButton>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                defaultMonth={field.value ? field.value : new Date()}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date('1900-01-01')}
              />
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default HookFormDatePicker;
