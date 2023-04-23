import {
  infoLabel,
  flagImg,
  serverInfoTitle,
  currentServerContainer,
} from './CurrentServerInfo.styles';

interface CurrentServerInfoProps {
  serverId: string;
  countryCode?: string;
  distance: number;
  countryName: string;
}

export const CurrentServerInfo = ({
  serverId,
  countryCode,
  distance,
  countryName,
}: CurrentServerInfoProps) => {
  return (
    <div className={currentServerContainer}>
      <h2 className={serverInfoTitle}>Server {serverId} </h2>
      <span className={infoLabel}>
        Location: {countryName}
        {countryCode ? (
          <img
            src={`https://flagcdn.com/h20/${countryCode}.png`}
            height='10'
            alt='country flag'
            className={flagImg}
          />
        ) : null}
      </span>
      <span className={infoLabel}>Distance: {distance}km</span>
    </div>
  );
};
