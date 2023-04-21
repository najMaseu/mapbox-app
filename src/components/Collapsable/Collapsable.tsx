import { useState, KeyboardEvent } from 'react';
import { collapHeader, container, content, title } from './Collapsable.styles';
import { WithChildren } from 'types/common';
import { ReactComponent as Chevron } from 'assets/chevron.svg';

interface CollapsableProps extends WithChildren {
  header: string;
  onHeaderClick?: () => void;
}

function Collapsable({ header, children, onHeaderClick }: CollapsableProps) {
  const [isCollapsed, setCollapsed] = useState(true);

  const handleHeaderClick = () => {
    setCollapsed((v) => !v);
    if (onHeaderClick) onHeaderClick();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setCollapsed((v) => !v);
    }
  };
  return (
    <div className={container} aria-expanded={!isCollapsed}>
      <div
        className={collapHeader}
        tabIndex={0}
        onClick={handleHeaderClick}
        onKeyDown={handleKeyDown}
        aria-label={header}
        role={'button'}
      >
        <Chevron />
        <span className={title}>{header}</span>
      </div>
      <div className={content} aria-hidden={isCollapsed}>
        {children}
      </div>
    </div>
  );
}

export default Collapsable;
