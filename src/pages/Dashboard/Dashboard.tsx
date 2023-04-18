import LoggedInLayout from 'layout/LoggedInLayout/LoggedInLayout';
import React from 'react';
import { dashboardContainer } from './Dashboard.styles';
import { useServerData } from 'api/servers/useServerData';

function Dashboard() {
  const { data } = useServerData();

  return (
    <LoggedInLayout>
      <div className={dashboardContainer}>
        {data.map((v) => (
          <p>{v.name}</p>
        ))}
      </div>
    </LoggedInLayout>
  );
}

export default Dashboard;
