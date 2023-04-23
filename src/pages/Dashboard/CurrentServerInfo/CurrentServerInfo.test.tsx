import { render, screen } from 'tests/utils';
import { CurrentServerInfo } from './CurrentServerInfo';

describe('CurrentServerInfo component', () => {
  it('displays correct info', () => {
    const testID = 'testid';
    const testCountry = 'Testania';
    const testCode = 'xd';
    const testDistance = 2222;

    render(
      <CurrentServerInfo
        serverId={testID}
        countryCode={testCode}
        distance={testDistance}
        countryName={testCountry}
      />,
    );

    expect(screen.getByText(testID, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(testDistance, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(testCountry, { exact: false })).toBeInTheDocument();
    expect(screen.getByAltText('country flag')).toBeInTheDocument();
  });

  it('does not display flag img when no valid country code provided', () => {
    const testID = 'testid';
    const testCountry = 'Testania';
    const testDistance = 2222;

    render(
      <CurrentServerInfo serverId={testID} distance={testDistance} countryName={testCountry} />,
    );

    expect(screen.getByText(testID, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(testDistance, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(testCountry, { exact: false })).toBeInTheDocument();
    expect(screen.queryByAltText('country flag')).not.toBeInTheDocument();
  });
});
