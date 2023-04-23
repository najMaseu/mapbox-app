import { first } from 'lodash';
import { CountryCodes, ServerDataResult } from 'types/common';

type ServerDataCategorized = {
  countryName: string;
  countryCode: string;
  servers: {
    serverId: string;
    distance: number;
  }[];
};

export const mapServerInfoToCategories = (
  serverInfo: ServerDataResult,
  countryCodesList: CountryCodes,
): ServerDataCategorized[] => {
  const codeEntries = Object.entries(countryCodesList);

  const serverDataDetailed = serverInfo.map(({ name, distance }) => {
    const currentInfo = name.split(' ');
    const serverId = currentInfo.pop();
    const countryName = currentInfo.join(' ');

    return {
      serverId: serverId || 'NO ID',
      countryName,
      distance,
      countryCode: first(codeEntries.find((entry) => entry[1] === countryName)) || '',
    };
  });

  return serverDataDetailed.reduce<ServerDataCategorized[]>(
    (accumulator, { countryCode, countryName, serverId, distance }) => {
      const itemToAdd = accumulator.find((item) => item.countryName === countryName);

      if (!itemToAdd) {
        return [
          ...accumulator,
          {
            countryName,
            countryCode,
            servers: [
              {
                serverId,
                distance,
              },
            ],
          },
        ];
      }

      return [
        ...accumulator.filter((category) => category.countryName !== itemToAdd.countryName),
        {
          countryCode: itemToAdd.countryCode,
          countryName: itemToAdd.countryName,
          servers: [
            ...itemToAdd.servers,
            {
              serverId,
              distance,
            },
          ],
        },
      ];
    },
    [] as ServerDataCategorized[],
  );
};
