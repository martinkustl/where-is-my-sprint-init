import useAppVersionDetailQuery from './api/useAppVersionDetailQuery';
import { useNavigate, useParams } from 'react-router';
import useEditAppVersionMutation from './api/useEditAppVersionMutation';
import { useTranslation } from 'react-i18next';
import type { AppVersionFormSchema } from '../components/app-version-form-card/appVersionFormSchema';
import AppVersionFormCard from '../components/app-version-form-card/AppVersionFormCard';

const AppVersionEditPage = () => {
  const { appVersionId } = useParams<{ appVersionId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, isFetching } = useAppVersionDetailQuery(appVersionId!);
  const { mutateAsync } = useEditAppVersionMutation();

  if (!data || isFetching) {
    return <div>{t('editAppVersionPage.loading.title')}</div>;
  }

  const appVersion = data.data;

  if (!appVersion) {
    return <div>{t('editAppVersionPage.notFound.title')}</div>;
  }

  const handleEditAppVersion = async (formData: AppVersionFormSchema) => {
    try {
      await mutateAsync({
        id: appVersion.id,
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
      onSubmit={handleEditAppVersion}
      defaultValues={{
        appVersion: appVersion.version,
        sprintOneDateRange: {
          from: new Date(appVersion.phases.delivery1.startDate),
          to: new Date(appVersion.phases.delivery1.endDate),
        },
        sprintOneStatus: appVersion.phases.delivery1.status,
        sprintTwoDateRange: {
          from: new Date(appVersion.phases.delivery2.startDate),
          to: new Date(appVersion.phases.delivery2.endDate),
        },
        sprintTwoStatus: appVersion.phases.delivery2.status,
        sprintTestDateRange: {
          from: new Date(appVersion.phases.testing.startDate),
          to: new Date(appVersion.phases.testing.endDate),
        },
        sprintTestStatus: appVersion.phases.testing.status,
        sprintUserTestingDateRange: {
          from: new Date(appVersion.phases.userTesting.startDate),
          to: new Date(appVersion.phases.userTesting.endDate),
        },
        sprintUserTestingStatus: appVersion.phases.userTesting.status,
        releaseDate: new Date(appVersion.phases.production.releaseDate),
        releaseStatus: appVersion.phases.production.status,
        delayedReleaseDate: appVersion.phases.production.delayedReleaseDate
          ? new Date(appVersion.phases.production.delayedReleaseDate)
          : undefined,
      }}
      title={t('editAppVersionPage.title')}
    />
  );
};

export default AppVersionEditPage;
