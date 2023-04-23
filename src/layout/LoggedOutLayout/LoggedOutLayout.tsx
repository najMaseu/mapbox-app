import { container, content } from './LoggedOutLayout.styles';
import { WithChildren } from 'types/common';

type LoggedOutLayoutProps = WithChildren;

export const LoggedOutLayout = ({ children }: LoggedOutLayoutProps) => {
  return (
    <main className={container}>
      <div className={content}>{children}</div>
    </main>
  );
};
