import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type DateFormat = 'DD_MM_YYYY';

const useFormatDate = () => {
  const { i18n } = useTranslation();

  return useCallback(
    (date: string | Date, format: DateFormat) => {
      if (typeof date === 'string') {
        date = new Date(date);
      }

      switch (format) {
        case 'DD_MM_YYYY':
          return new Intl.DateTimeFormat(i18n.language, {
            weekday: undefined,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(date));
        default:
          return date.toString(); // Fallback to the original date if format is not recognized
      }
    },
    [i18n],
  );
};

export default useFormatDate;
