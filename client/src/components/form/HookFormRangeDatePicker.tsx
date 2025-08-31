import { useFormContext } from 'react-hook-form';

import { Calendar } from '../ui/calendar';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import type { FC } from 'react';
import type { DateRange } from 'react-day-picker';
import useFormatDate from '@/hooks/useFormatDate';
import DatePickerButton from './DatePickerButton';

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  description?: string;
};

const HookFromDatePicker: FC<Props> = ({
  label,
  name,
  placeholder,
  description,
  ...props
}) => {
  const form = useFormContext();
  const formatDate = useFormatDate();

  return (
    <FormField<Record<string, DateRange | undefined>>
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <DatePickerButton value={field.value}>
                  {field.value?.from ? (
                    field.value.to ? (
                      <>
                        {formatDate(field.value.from, 'DD_MM_YYYY')} -{' '}
                        {formatDate(field.value.to, 'DD_MM_YYYY')}
                      </>
                    ) : (
                      formatDate(field.value.from, 'DD_MM_YYYY')
                    )
                  ) : (
                    <span>{placeholder}</span>
                  )}
                </DatePickerButton>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={field.value}
                onSelect={field.onChange}
                defaultMonth={field.value?.from ? field.value.from : new Date()}
                disabled={(date) => date < new Date('1900-01-01')}
                {...props}
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

export default HookFromDatePicker;
