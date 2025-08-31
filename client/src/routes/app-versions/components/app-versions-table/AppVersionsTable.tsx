import AppVersionsTableHeader from './AppVersionsTableHeader';
import useAppVersionsQuery from '../../api/useAppVersionsQuery';
// import useNaiveAppVersionsQuery from '../../hooks/useNaiveAppVersionsQuery.ts';
import AppVersionsTableRow from './AppVersionsTableRow';
import { Toilet } from 'lucide-react';
import SimpleLoading from '@/components/SimpleLoading';

const AppVersionsTable = () => {
  // const { data: appVersions } = useNaiveAppVersionsQuery();
  const { data: appVersionsData, error } = useAppVersionsQuery();

  const appVersions = appVersionsData?.data;

  if (error) {
    return <Toilet className="mx-auto my-4 h-12 w-12" />;
  }

  if (!appVersions) {
    return <SimpleLoading />;
  }

  return (
    <table className="w-full border-collapse">
      <AppVersionsTableHeader />
      <tbody>
        {appVersions.map((appVersion) => (
          <AppVersionsTableRow key={appVersion.id} appVersion={appVersion} />
        ))}
      </tbody>
    </table>
  );
};

export default AppVersionsTable;
