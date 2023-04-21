import LoggedInLayout from 'layout/LoggedInLayout/LoggedInLayout';
import {
  dashboardContainer,
  searchLabel,
  serverList,
  search,
  serverInfoContainer,
  serverInfo,
  infoLabel,
  flagImg,
  chooseServerInfo,
} from './Dashboard.styles';
import { useServerData } from 'api/servers/useServerData';
import { mapServerInfoToCategoried } from './helpers';
import { useCountryCodes } from 'context/CountryCodesContext';
import Loader from 'components/Loader/Loader';
import Collapsable from 'components/Collapsable/Collapsable';
import ServerEntry from './ServerEntry/ServerEntry';
import Input from 'components/Input/Input';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { ChangeEvent, useState } from 'react';

function Dashboard() {
  const { data, isLoading } = useServerData();
  const codes = useCountryCodes();
  const [searchValue, setSearchValue] = useState('');
  const [currentServer, setCurroentServer] = useState<
    | {
        countryName: string;
        countryCode?: string;
        server: {
          serverId: string;
          distance: number;
        };
      }
    | undefined
  >();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <LoggedInLayout>
      <div className={dashboardContainer}>
        <h1>Servers</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={serverInfoContainer}>
            <div>
              <span className={search}>
                <label className={searchLabel} htmlFor='searchBar'>
                  Search country
                </label>
                <SearchIcon />
                <Input
                  id='searchBar'
                  placeholder='Search country...'
                  variant='ghost'
                  onChange={handleSearch}
                  value={searchValue}
                />
              </span>
              <ul className={serverList}>
                {mapServerInfoToCategoried(data, codes)
                  .filter((entry) =>
                    entry.countryName?.toLowerCase().includes(searchValue.toLowerCase()),
                  )
                  .sort((a, b) => a.countryName.localeCompare(b.countryName))
                  .map((entry) => (
                    <Collapsable header={entry.countryName}>
                      {entry.servers
                        .sort((a, b) => a.distance - b.distance)
                        .map((server) => (
                          <ServerEntry
                            serverId={server.serverId}
                            distance={server.distance}
                            countryName={entry.countryName}
                            onEntryClick={() => {
                              setCurroentServer({
                                countryName: entry.countryName,
                                countryCode: entry.countryCode,
                                server,
                              });
                            }}
                          />
                        ))}
                    </Collapsable>
                  ))}
              </ul>
            </div>
            <div className={serverInfo}>
              {currentServer ? (
                <>
                  <h2>Server {currentServer?.server.serverId} </h2>
                  <span className={infoLabel}>
                    Location: {currentServer?.countryName}
                    <img
                      src={`https://flagcdn.com/h20/${currentServer?.countryCode}.png`}
                      height='10'
                      alt='country flag'
                      className={flagImg}
                    />
                  </span>
                  <span className={infoLabel}>Distance: {currentServer?.server.distance}km</span>
                </>
              ) : (
                <span className={chooseServerInfo}>👈 Choose a server on the right</span>
              )}
            </div>
          </div>
        )}
      </div>
    </LoggedInLayout>
  );
}
export default Dashboard;
