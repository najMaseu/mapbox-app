import React from 'react';
import { container, content } from './LoggedOutLayout.styles';
import { WithChildren } from 'types/common';

type LoggedOutLayoutProps = WithChildren;

function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
    <main className={container}>
      <div className={content}>{children}</div>
    </main>
  );
}

export default LoggedOutLayout;
