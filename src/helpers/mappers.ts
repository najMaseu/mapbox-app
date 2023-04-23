import { first } from 'lodash';
import { CountryCodes, ServerDataResult } from 'types/common';

export type ServerDataCategorized = {
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
      const itemToCheck = accumulator.find((item) => item.countryName === countryName);

      if (!itemToCheck) {
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
        ...accumulator.filter((category) => category.countryName !== itemToCheck.countryName),
        {
          countryCode: itemToCheck.countryCode,
          countryName: itemToCheck.countryName,
          servers: [
            ...itemToCheck.servers,
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
