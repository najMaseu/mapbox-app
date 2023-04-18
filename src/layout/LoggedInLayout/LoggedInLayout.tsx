import React from 'react';
import { WithChildren } from 'types/common';
import { container, content } from './LoggedInLayout.styles';

function LoggedInLayout({ children }: WithChildren) {
  return (
    <main className={container}>
      <div className={content}>{children}</div>
    </main>
  );
}

export default LoggedInLayout;
