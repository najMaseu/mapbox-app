import React from 'react';
import { WithChildren } from 'types/componentsCommon';
import { container, content } from './LoggedOutLayout.styles';

type LoggedOutLayoutProps = WithChildren;

function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
    <main className={container}>
      <div className={content}>{children}</div>
    </main>
  );
}

export default LoggedOutLayout;
