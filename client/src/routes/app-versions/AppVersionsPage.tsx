import PageContentCard from '@/components/PageContentCard';
import AppVersionsPageHeader from './components/AppVersionsPageHeader';
import AppVersionsTable from './components/app-versions-table/AppVersionsTable';

const AppVersionsPage = () => {
  return (
    <PageContentCard contentClassName="px-0" header={<AppVersionsPageHeader />}>
      <div className="overflow-x-auto">
        <AppVersionsTable />
      </div>
    </PageContentCard>
  );
};

export default AppVersionsPage;
