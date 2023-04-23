import { LoggedInLayout } from 'layout/LoggedInLayout/LoggedInLayout';
import {
  dashboardContainer,
  serverList,
  serverInfoContainer,
  chooseServerInfo,
} from './Dashboard.styles';
import { useServerData } from 'api/servers/useServerData';
import { mapServerInfoToCategoried } from './helpers';
import { useCountryCodes } from 'context/CountryCodesContext';
import { Loader } from 'components/Loader/Loader';
import { Collapsable } from 'components/Collapsable/Collapsable';
import { ServerEntry } from './ServerEntry/ServerEntry';
import { ChangeEvent, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { CurrentServerInfo } from './CurrentServerInfo/CurrentServerInfo';

export const Dashboard = () => {
  const { data, isLoading } = useServerData();
  const codes = useCountryCodes();
  const [searchValue, setSearchValue] = useState('');
  const [currentServer, setCurroentServer] = useState<
    | {
        countryName: string;
        countryCode?: string;
        serverId: string;
        distance: number;
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
              <SearchBar onChange={handleSearch} value={searchValue} />

              <div className={serverList}>
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
                                serverId: server.serverId,
                                distance: server.distance,
                              });
                            }}
                          />
                        ))}
                    </Collapsable>
                  ))}
              </div>
            </div>

            {currentServer ? (
              <CurrentServerInfo
                serverId={currentServer.serverId}
                countryName={currentServer.countryName}
                countryCode={currentServer?.countryCode}
                distance={currentServer.distance}
              />
            ) : (
              <span className={chooseServerInfo}>👈 Choose a server on the right</span>
            )}
          </div>
        )}
      </div>
    </LoggedInLayout>
  );
};
