import { KeyboardEvent } from 'react';
import { entry } from './ServerEntry.styles';
interface ServerEntryProps {
  countryName: string;
  serverId: string;
  distance: number;
  onEntryClick: () => void;
}
export const ServerEntry = ({
  countryName,
  serverId,
  distance,
  onEntryClick,
}: ServerEntryProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onEntryClick();
    }
  };
  return (
    <div
      tabIndex={0}
      aria-label={countryName + serverId}
      role={'button'}
      onKeyDown={handleKeyDown}
      onClick={onEntryClick}
      className={entry}
    >
      <span>
        {countryName} {serverId}
      </span>
      <span>{distance}km</span>
    </div>
  );
};
