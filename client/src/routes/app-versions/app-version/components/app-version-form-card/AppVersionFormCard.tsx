import { Calendar } from 'lucide-react';
import type { FC, PropsWithChildren } from 'react';
import PageContentCard from '@/components/PageContentCard';
import AppVersionForm from './AppVersionForm';
import type { AppVersionFormSchema } from './appVersionFormSchema';
import { CardTitle } from '@/components/ui/card';

type Props = {
  title: string;
  defaultValues?: Partial<AppVersionFormSchema>;
  onSubmit: (data: AppVersionFormSchema) => void;
};

const AppVersionFormCard: FC<PropsWithChildren<Props>> = ({
  title,
  defaultValues,
  onSubmit,
}) => {
  return (
    <PageContentCard
      contentClassName="pb-6"
      header={
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 p-2">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </div>
      }
    >
      <AppVersionForm onSubmit={onSubmit} defaultValues={defaultValues} />
    </PageContentCard>
  );
};

export default AppVersionFormCard;
