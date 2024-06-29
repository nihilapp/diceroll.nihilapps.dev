import React from 'react';
import { DefaultPage } from '@/src/widgets';

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children, }: Props) {
  return (
    <DefaultPage>
      {children}
    </DefaultPage>
  );
}
