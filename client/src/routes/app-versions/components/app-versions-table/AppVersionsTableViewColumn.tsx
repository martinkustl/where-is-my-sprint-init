import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

type Props = {
  appVersionId: string;
};

const AppVersionsTableViewColumn: FC<Props> = ({ appVersionId }) => {
  const { t } = useTranslation();

  return (
    <td className="border-b border-slate-700/30 p-4">
      <Button
        variant="ghost"
        size="sm"
        className="text-slate-300 hover:bg-slate-800/50 hover:text-white"
        asChild
      >
        <Link to={`/app-versions/${appVersionId}/edit`}>
          <Eye className="mr-2 h-4 w-4" />
          {t('appVersions.table.body.columns.view.label')}
        </Link>
      </Button>
    </td>
  );
};

export default AppVersionsTableViewColumn;
