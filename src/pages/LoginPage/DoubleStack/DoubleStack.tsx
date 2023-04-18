import { ReactNode, useState, KeyboardEvent } from 'react';
import {
  cardContentWrapper,
  cardTitle,
  innerCard,
  mainCard,
  mainCardTitleStyles,
  secondaryCard,
  secondaryCardTitleStyles,
  stackContainer,
} from './DounleStack.styles';
import { cx } from '@emotion/css';

interface DoubleStackProps {
  mainContent: ReactNode;
  mainCardTitle: string;
  secondaryConent: ReactNode;
  secondaryCardTitle: string;
}

function DoubleStack({
  mainContent,
  secondaryConent,
  mainCardTitle,
  secondaryCardTitle,
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
        aria-label={mainCardTitle}
        aria-expanded={isMainContentExpanded}
        role={!isMainContentExpanded ? 'button' : 'region'}
        onClick={!isMainContentExpanded ? switchVisibleCard : undefined}
        onKeyDown={!isMainContentExpanded ? handleKeyDown : undefined}
        className={cx(innerCard, mainCard)}
      >
        <div className={cx(cardTitle, mainCardTitleStyles)}>{mainCardTitle}</div>
        <div
          tabIndex={-1}
          onFocus={!isMainContentExpanded ? switchVisibleCard : undefined}
          className={cardContentWrapper}
          aria-hidden={!isMainContentExpanded}
        >
          {mainContent}
        </div>
      </div>

      <div
        tabIndex={0}
        aria-label={secondaryCardTitle}
        aria-expanded={!isMainContentExpanded}
        role={isMainContentExpanded ? 'button' : 'region'}
        onClick={isMainContentExpanded ? switchVisibleCard : undefined}
        onKeyDown={isMainContentExpanded ? handleKeyDown : undefined}
        className={cx(innerCard, secondaryCard)}
      >
        <div className={cx(cardTitle, secondaryCardTitleStyles)}>{secondaryCardTitle}</div>
        <div
          tabIndex={-1}
          className={cardContentWrapper}
          aria-hidden={isMainContentExpanded}
          onFocus={isMainContentExpanded ? switchVisibleCard : undefined}
        >
          {secondaryConent}
        </div>
      </div>
    </div>
  );
}

export default DoubleStack;
