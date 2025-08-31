import { Card, CardContent, CardHeader } from './ui/card';

import type { FC, PropsWithChildren, ReactNode } from 'react';

type Props = {
  header: ReactNode;
  contentClassName?: string;
} & PropsWithChildren;

const PageContentCard: FC<Props> = ({ header, children, contentClassName }) => {
  return (
    <Card className="relative mx-auto overflow-hidden border border-slate-700/50 bg-slate-900/80 pt-6 pb-0 shadow-2xl shadow-purple-500/20 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-sky-500/10"></div>
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <CardHeader>{header}</CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
};

export default PageContentCard;
