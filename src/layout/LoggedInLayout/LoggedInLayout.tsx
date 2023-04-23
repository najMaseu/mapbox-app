import React from 'react';
import { WithChildren } from 'types/common';
import { container, content, navbar } from './LoggedInLayout.styles';
import { Button } from 'components/Button/Button';
import { useSignOut } from 'react-auth-kit';

export const LoggedInLayout = ({ children }: WithChildren) => {
  const signOut = useSignOut();
  return (
    <main className={container}>
      <div className={content}>
        <nav className={navbar}>
          <Button
            onClick={() => {
              signOut();
            }}
            label={'Log out'}
          />
        </nav>
        {children}
      </div>
    </main>
  );
};
