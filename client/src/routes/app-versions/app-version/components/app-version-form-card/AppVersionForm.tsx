import {
  appVersionFormField,
  appVersionFormSchema,
  type AppVersionFormSchema,
} from './appVersionFormSchema';
import type { FC } from 'react';
import HookForm from '@/components/form/HookForm';
import HookFormInput from '@/components/form/HookFormInput';
import HookFormRangeDatePicker from '@/components/form/HookFormRangeDatePicker';
import HookFormDatePicker from '@/components/form/HookFormDatePicker';
import HookFormSubmitButton from '@/components/form/HookFormSubmitButton';
import AppVersionFormSection from './AppVersionFormSection';
import HookFormPhaseStatusSelect from './HookFormPhaseStatusSelect';
import { useTranslation } from 'react-i18next';
import useForm from '@/hooks/useForm';

type Props = {
  defaultValues?: Partial<AppVersionFormSchema>;
  onSubmit: (data: AppVersionFormSchema) => void;
};

const AppVersionForm: FC<Props> = ({ onSubmit, defaultValues = {} }) => {
  const { t } = useTranslation();

  const form = useForm<AppVersionFormSchema>(appVersionFormSchema, {
    defaultValues,
  });

  return (
    <HookForm onSubmit={onSubmit} form={form} className="flex flex-col gap-6">
      <HookFormInput
        label={t('appVersionForm.form.appVersionName.label')}
        name={appVersionFormField.appVersion}
      />
      <AppVersionFormSection
        phase="DELIVERY_1"
        name={t('appVersionForm.form.sprintOneSection.name')}
      >
        <HookFormRangeDatePicker
          label={t('appVersionForm.form.sprintOneSection.dateRange.label')}
          name={appVersionFormField.sprintOneDateRange}
        />
        <HookFormPhaseStatusSelect name={appVersionFormField.sprintOneStatus} />
      </AppVersionFormSection>

      <AppVersionFormSection
        phase="DELIVERY_2"
        name={t('appVersionForm.form.sprintTwoSection.name')}
      >
        <HookFormRangeDatePicker
          label={t('appVersionForm.form.sprintTwoSection.dateRange.label')}
          name={appVersionFormField.sprintTwoDateRange}
        />
        <HookFormPhaseStatusSelect name={appVersionFormField.sprintTwoStatus} />
      </AppVersionFormSection>
      <AppVersionFormSection
        phase="TESTING"
        name={t('appVersionForm.form.sprintTestSection.name')}
      >
        <HookFormRangeDatePicker
          label={t('appVersionForm.form.sprintTestSection.dateRange.label')}
          name={appVersionFormField.sprintTestDateRange}
        />
        <HookFormPhaseStatusSelect
          name={appVersionFormField.sprintTestStatus}
        />
      </AppVersionFormSection>
      <AppVersionFormSection
        phase="USER_TESTING"
        name={t('appVersionForm.form.sprintUserTestingSection.name')}
      >
        <HookFormRangeDatePicker
          label={t(
            'appVersionForm.form.sprintUserTestingSection.dateRange.label',
          )}
          name={appVersionFormField.sprintUserTestingDateRange}
        />
        <HookFormPhaseStatusSelect
          name={appVersionFormField.sprintUserTestingStatus}
        />
      </AppVersionFormSection>
      <AppVersionFormSection
        phase="PRODUCTION"
        name={t('appVersionForm.form.releaseSection.name')}
      >
        <HookFormDatePicker
          label={t('appVersionForm.form.releaseSection.releaseDate.label')}
          name={appVersionFormField.releaseDate}
        />
        <HookFormPhaseStatusSelect name={appVersionFormField.releaseStatus} />
        <HookFormDatePicker
          label={t(
            'appVersionForm.form.releaseSection.delayedReleaseDate.label',
          )}
          name={appVersionFormField.delayedReleaseDate}
        />
      </AppVersionFormSection>
      <HookFormSubmitButton>
        {t('appVersionForm.form.submitButton.label')}
      </HookFormSubmitButton>
    </HookForm>
  );
};

export default AppVersionForm;
