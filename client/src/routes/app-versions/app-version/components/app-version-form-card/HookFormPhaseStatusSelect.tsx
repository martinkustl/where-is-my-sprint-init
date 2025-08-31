import HookFormSelect from '@/components/form/HookFormSelect';
import { type FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { AppStatusEnum } from '@/client/index';

type Props = {
  name: string;
};

const HookFormPhaseStatusSelect: FC<Props> = ({ name }) => {
  const { t } = useTranslation();

  const items: { value: AppStatusEnum; label: string }[] = useMemo(
    () => [
      {
        value: 'NOT_STARTED',
        label: t('appVersionForm.form.phaseStatusSelect.options.notStarted'),
      },
      {
        value: 'IN_PROGRESS',
        label: t('appVersionForm.form.phaseStatusSelect.options.inProgress'),
      },
      {
        value: 'COMPLETED',
        label: t('appVersionForm.form.phaseStatusSelect.options.completed'),
      },
      {
        value: 'DELAYED',
        label: t('appVersionForm.form.phaseStatusSelect.options.delayed'),
      },
    ],
    [t],
  );

  return (
    <HookFormSelect
      items={items}
      name={name}
      label={t('appVersionForm.form.phaseStatusSelect.label')}
      placeholder={t('appVersionForm.form.phaseStatusSelect.placeholder')}
    />
  );
};

export default HookFormPhaseStatusSelect;
