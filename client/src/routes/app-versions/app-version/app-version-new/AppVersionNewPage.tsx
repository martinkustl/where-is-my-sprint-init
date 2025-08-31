import useCreateAppVersionMutation from './api/useCreateAppVersionMutation';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import type { AppVersionFormSchema } from '../components/app-version-form-card/appVersionFormSchema';
import AppVersionFormCard from '../components/app-version-form-card/AppVersionFormCard';

const AppVersionNewPage = () => {
  const { mutateAsync } = useCreateAppVersionMutation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCreateAppVersion = async (formData: AppVersionFormSchema) => {
    try {
      await mutateAsync({
        version: formData.appVersion,
        phases: {
          delivery1: {
            type: 'DELIVERY_1',
            status: formData.sprintOneStatus,
            startDate: formData.sprintOneDateRange.from.toISOString(),
            endDate: formData.sprintOneDateRange.to.toISOString(),
          },
          delivery2: {
            type: 'DELIVERY_2',
            status: formData.sprintTwoStatus,
            startDate: formData.sprintTwoDateRange.from.toISOString(),
            endDate: formData.sprintTwoDateRange.to.toISOString(),
          },
          testing: {
            type: 'TESTING',
            status: formData.sprintTestStatus,
            startDate: formData.sprintTestDateRange.from.toISOString(),
            endDate: formData.sprintTestDateRange.to.toISOString(),
          },
          userTesting: {
            type: 'USER_TESTING',
            status: formData.sprintUserTestingStatus,
            startDate: formData.sprintUserTestingDateRange.from.toISOString(),
            endDate: formData.sprintUserTestingDateRange.to.toISOString(),
          },
          production: {
            type: 'PRODUCTION',
            status: formData.releaseStatus,
            releaseDate: formData.releaseDate.toISOString(),
            delayedReleaseDate: formData.delayedReleaseDate
              ? formData.delayedReleaseDate.toISOString()
              : undefined,
          },
        },
      });
      navigate('/');
    } catch (err: unknown) {
      console.error('Error updating app version:', err);
    }
  };

  return (
    <AppVersionFormCard
      onSubmit={handleCreateAppVersion}
      title={t('appVersionNewPage.title')}
    />
  );
};

export default AppVersionNewPage;
