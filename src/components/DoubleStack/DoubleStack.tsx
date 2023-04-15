import { ReactNode, useState, KeyboardEvent } from 'react';
import {
  cardContentWrapper,
  innerCard,
  mainCard,
  secondaryCard,
  stackContainer,
} from './DounleStack.styles';
import { cx } from '@emotion/css';

interface DoubleStackProps {
  mainContent: ReactNode;
  mainContentCollapsed: ReactNode;
  secondaryConent: ReactNode;
  secondaryContentCollapsed: ReactNode;
}

function DoubleStack({
  mainContent,
  secondaryConent,
  mainContentCollapsed,
  secondaryContentCollapsed,
}: DoubleStackProps) {
  const [isMainContentExpanded, setMainCardExtended] = useState(true);

  const switchVisibleCard = () => {
    setMainCardExtended((v) => !v);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      switchVisibleCard();
    }
  };

  return (
    <div className={stackContainer}>
      <div
        tabIndex={0}
        aria-label={!isMainContentExpanded ? 'expand main' : undefined}
        aria-expanded={isMainContentExpanded}
        role={!isMainContentExpanded ? 'button' : 'region'}
        onClick={!isMainContentExpanded ? switchVisibleCard : undefined}
        onKeyDown={!isMainContentExpanded ? handleKeyDown : undefined}
        className={cx(mainCard, innerCard)}
      >
        <div className={cardContentWrapper} aria-hidden={isMainContentExpanded}>
          {mainContentCollapsed}
        </div>
        <div className={cardContentWrapper} aria-hidden={!isMainContentExpanded}>
          {mainContent}
        </div>
      </div>

      <div
        tabIndex={0}
        aria-label={isMainContentExpanded ? 'expand secondary' : undefined}
        role={isMainContentExpanded ? 'button' : 'region'}
        aria-expanded={!isMainContentExpanded}
        onClick={isMainContentExpanded ? switchVisibleCard : undefined}
        onKeyDown={isMainContentExpanded ? handleKeyDown : undefined}
        className={cx(secondaryCard, innerCard)}
      >
        <div className={cardContentWrapper} aria-hidden={!isMainContentExpanded}>
          {secondaryContentCollapsed}
        </div>
        <div className={cardContentWrapper} aria-hidden={isMainContentExpanded}>
          {secondaryConent}
        </div>
      </div>
    </div>
  );
}

export default DoubleStack;
